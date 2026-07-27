import {
    Injectable,
    InternalServerErrorException,
    ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
    SurepassBaseResponse,
    SurepassRcResponse,
} from './surepass.types';

@Injectable()
export class SurepassService {
    private readonly baseUrl: string;
    private readonly token: string;

    constructor(
        private readonly configService: ConfigService,
    ) {
        this.baseUrl = this.configService.getOrThrow<string>(
            'surepass.baseUrl',
        );

        this.token = this.configService.getOrThrow<string>(
            'surepass.token',
        );
    }

    private async request<T extends SurepassBaseResponse>(
        endpoint: string,
        body: unknown,
    ): Promise<T> {
        const response = await fetch(
            `${this.baseUrl}${endpoint}`,
            {
                method: 'POST',

                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(body),
            },
        );

        if (!response.ok) {
            console.log('Status:', response.status);

            console.log(await response.text());

            throw new ServiceUnavailableException(
                'Surepass request failed.',
            );
        }

        const result = (await response.json()) as T;

        if (!result.success) {
            throw new InternalServerErrorException(
                result.message ?? 'Surepass request failed.',
            );
        }

        return result;
    }

    async lookupRc(
        vehicleNumber: string,
    ): Promise<SurepassRcResponse> {
        return this.request<SurepassRcResponse>(
            '/api/v1/rc/rc-full',
            {
                id_number: vehicleNumber,
            },
        );
    }
}