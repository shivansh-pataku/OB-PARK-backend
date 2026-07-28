import {
    Injectable,
    InternalServerErrorException,
    ServiceUnavailableException,
    HttpException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
    SurepassBaseResponse,
    SurepassRcResponse,
    SurepassChallanRequest,
    SurepassChallanDetailsResponse,
    SurepassChallanAdvancedRequest,
    SurepassChallanAdvancedResponse,
    SurepassFastagRequest,
    SurepassFastagResponse,
    SurepassFastagV2Request,
    SurepassFastagV2Response,
    SurepassFastagBalanceRequest,
    SurepassFastagBalanceResponse,
    SurepassRcV2Request,
    SurepassRcV2Response,
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
            const status = response.status;
            console.log('Status:', status);
            const responseText = await response.text();
            console.log(responseText);

            let errorMessage = 'Surepass request failed.';
            try {
                const errorJson = JSON.parse(responseText);
                if (errorJson && errorJson.message) {
                    errorMessage = errorJson.message;
                }
            } catch (e) {
                // Not JSON
            }

            throw new HttpException(errorMessage, status);
        }

        const result = (await response.json()) as T;

        if (!result.success) {
            const status = result.status_code || 500;
            const message = result.message || 'Surepass request failed.';
            throw new HttpException(message, status);
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

    async lookupChallan(
        body: SurepassChallanRequest,
    ): Promise<SurepassChallanDetailsResponse> {
        return this.request<SurepassChallanDetailsResponse>(
            '/api/v1/rc/rc-related/challan-details',
            body,
        );
    }

    async lookupChallanAdvanced(
        body: SurepassChallanAdvancedRequest,
    ): Promise<SurepassChallanAdvancedResponse> {
        return this.request<SurepassChallanAdvancedResponse>(
            '/api/v1/rc/rc-related/challan-advanced',
            body,
        );
    }

    async verifyFastag(
        body: SurepassFastagRequest,
    ): Promise<SurepassFastagResponse> {
        return this.request<SurepassFastagResponse>(
            '/api/v1/fastag/verification',
            body,
        );
    }

    async verifyFastagV2(
        body: SurepassFastagV2Request,
    ): Promise<SurepassFastagV2Response> {
        return this.request<SurepassFastagV2Response>(
            '/api/v1/fastag/fastag-verification-v2',
            body,
        );
    }

    async lookupFastagBalance(
        body: SurepassFastagBalanceRequest,
    ): Promise<SurepassFastagBalanceResponse> {
        return this.request<SurepassFastagBalanceResponse>(
            '/api/v1/fastag/rc-to-fastag-balance',
            body,
        );
    }

    async lookupRcV2(
        body: SurepassRcV2Request,
    ): Promise<SurepassRcV2Response> {
        return this.request<SurepassRcV2Response>(
            '/api/v1/rc/rc-v2',
            body,
        );
    }
}