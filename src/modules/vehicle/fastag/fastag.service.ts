import { Injectable } from '@nestjs/common';
import { SurepassService } from '../providers/surepass/surepass.service';
import { FastagRequestDto } from './dto/fastag-request.dto';
import { FastagResponseDto } from './dto/fastag-response.dto';
import { FastagV2RequestDto } from './dto/fastag-v2-request.dto';
import { FastagV2ResponseDto } from './dto/fastag-v2-response.dto';
import { FastagBalanceRequestDto } from './dto/fastag-balance-request.dto';
import { FastagBalanceResponseDto } from './dto/fastag-balance-response.dto';

@Injectable()
export class FastagService {
    constructor(
        private readonly surepassService: SurepassService,
    ) { }

    async verifyFastag(
        dto: FastagRequestDto,
    ): Promise<FastagResponseDto> {
        const response = await this.surepassService.verifyFastag({
            rc_number: dto.rcNumber,
        });

        return {
            clientId: response.data.client_id,
            rcNumber: response.data.rc_number,
            bankName: response.data.bank_name,
            tagId: response.data.tag_id,
            status: response.data.status,
        };
    }

    async verifyFastagV2(
        dto: FastagV2RequestDto,
    ): Promise<FastagV2ResponseDto> {
        const response = await this.surepassService.verifyFastagV2({
            rc_number: dto.rcNumber,
        });

        return {
            clientId: response.data.client_id,
            rcNumber: response.data.rc_number,
            bankName: response.data.bank_name,
            tagId: response.data.tag_id,
            status: response.data.status,
            transactions: (response.data.transactions || []).map((tx) => ({
                laneDirection: tx.lane_direction,
                transactionDateTime: tx.transaction_date_time,
                seqNo: tx.seq_no,
                tollPlazaGeocode: tx.toll_plaza_geocode,
                tollPlazaName: tx.toll_plaza_name,
                vehicleType: tx.vehicle_type,
            })),
        };
    }

    async lookupFastagBalance(
        dto: FastagBalanceRequestDto,
    ): Promise<FastagBalanceResponseDto> {
        const response = await this.surepassService.lookupFastagBalance({
            rc_number: dto.rcNumber,
            provider_name: dto.providerName,
        });

        return {
            clientId: response.data.client_id,
            rcNumber: response.data.rc_number,
            providerName: response.data.provider_name,
            providerCode: response.data.provider_code,
            customerName: response.data.customer_name,
            availableRechargeLimit: response.data.available_recharge_limit,
            availableBalance: response.data.available_balance,
            tagStatus: response.data.tag_status,
            vehicleClass: response.data.vehicle_class,
            vehicleClassDesc: response.data.vehicle_class_desc,
            modelName: response.data.model_name,
        };
    }
}
