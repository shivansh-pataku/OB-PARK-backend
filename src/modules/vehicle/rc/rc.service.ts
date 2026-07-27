import { Injectable } from '@nestjs/common';

import { SurepassService } from '../providers/surepass/surepass.service';

import { RcRequestDto } from './dto/rc-request.dto';
import { RcResponseDto } from './dto/rc-response.dto';

@Injectable()
export class RcService {
    constructor(
        private readonly surepassService: SurepassService,
    ) { }

    async lookupVehicle(
        dto: RcRequestDto,
    ): Promise<RcResponseDto> {
        const response = await this.surepassService.lookupRc(
            dto.vehicleNumber,
        );

        return {
            registrationNumber: response.data.rc_number,
            ownerName: response.data.owner_name,
            maker: response.data.maker_description,
            model: response.data.maker_model,
            fuelType: response.data.fuel_type,
            registrationDate: response.data.registration_date,
            insuranceValidTill: response.data.insurance_upto,
            fitnessValidTill: response.data.fit_up_to,
            vehicleCategory: response.data.vehicle_category,
        };
    }
}