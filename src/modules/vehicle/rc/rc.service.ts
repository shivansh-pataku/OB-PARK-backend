import { Injectable } from '@nestjs/common';

import { SurepassService } from '../providers/surepass/surepass.service';

import { RcRequestDto } from './dto/rc-request.dto';
import { RcResponseDto } from './dto/rc-response.dto';
import { RcChallanRequestDto } from './dto/rc-challan-request.dto';
import { RcChallanResponseDto } from './dto/rc-challan-response.dto';
import { RcChallanAdvancedRequestDto } from './dto/rc-challan-advanced-request.dto';
import { RcChallanAdvancedResponseDto } from './dto/rc-challan-advanced-response.dto';
import { RcV2RequestDto } from './dto/rc-v2-request.dto';
import { RcV2ResponseDto } from './dto/rc-v2-response.dto';

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

    async lookupChallan(
        dto: RcChallanRequestDto,
    ): Promise<RcChallanResponseDto> {
        const response = await this.surepassService.lookupChallan({
            rc_number: dto.rcNumber,
            chassis_number: dto.chassisNumber,
            engine_number: dto.engineNumber,
            state_only: dto.stateOnly,
            state_portal: dto.statePortal,
        });

        return {
            clientId: response.data.client_id,
            blacklist: response.data.challan_details.blacklist || [],
            challans: (response.data.challan_details.challans || []).map((challan) => ({
                serialNumber: challan.number,
                challanNumber: challan.challan_number,
                offenseDetails: challan.offense_details,
                place: challan.challan_place,
                date: challan.challan_date,
                state: challan.state,
                rto: challan.rto,
                upstreamCode: challan.upstream_code,
                accusedName: challan.accused_name,
                amount: challan.amount,
                status: challan.challan_status,
                courtChallan: challan.court_challan,
            })),
        };
    }

    async lookupChallanAdvanced(
        dto: RcChallanAdvancedRequestDto,
    ): Promise<RcChallanAdvancedResponseDto> {
        const response = await this.surepassService.lookupChallanAdvanced({
            rc_number: dto.rcNumber,
        });

        return {
            clientId: response.data.client_id,
            rcNumber: response.data.rc_number,
            challans: (response.data.challan_details || []).map((challan) => ({
                serialNumber: challan.number,
                challanNumber: challan.challan_number,
                offenseDetails: challan.offense_details,
                place: challan.challan_place,
                offenseDetailsList: (challan.offense_details_list || []).map((offense) => ({
                    offenseName: offense.offense_name,
                })),
                date: challan.challan_date,
                dateTime: challan.challan_date_time,
                state: challan.state,
                rto: challan.rto,
                accusedName: challan.accused_name,
                amount: challan.amount,
                status: challan.challan_status,
                courtChallan: challan.court_challan,
                courtName: challan.court_name,
                upstreamCode: challan.upstream_code,
            })),
        };
    }

    async lookupRcV2(
        dto: RcV2RequestDto,
    ): Promise<RcV2ResponseDto> {
        const response = await this.surepassService.lookupRcV2({
            id_number: dto.vehicleNumber,
            enrich: dto.enrich,
        });

        return {
            clientId: response.data.client_id,
            rcNumber: response.data.rc_number,
            fitnessValidTill: response.data.fit_up_to,
            registrationDate: response.data.registration_date,
            ownerName: response.data.owner_name,
            fatherName: response.data.father_name,
            presentAddress: response.data.present_address,
            permanentAddress: response.data.permanent_address,
            mobileNumber: response.data.mobile_number,
            vehicleCategory: response.data.vehicle_category,
            chassisNumber: response.data.vehicle_chasi_number,
            engineNumber: response.data.vehicle_engine_number,
            maker: response.data.maker_description,
            model: response.data.maker_model,
            bodyType: response.data.body_type,
            fuelType: response.data.fuel_type,
            color: response.data.color,
            normsType: response.data.norms_type,
            financer: response.data.financer,
            financed: response.data.financed,
            insuranceCompany: response.data.insurance_company,
            insurancePolicyNumber: response.data.insurance_policy_number,
            insuranceValidTill: response.data.insurance_upto,
            manufacturingDate: response.data.manufacturing_date,
            manufacturingDateFormatted: response.data.manufacturing_date_formatted,
            registeredAt: response.data.registered_at,
            latestBy: response.data.latest_by,
            lessInfo: response.data.less_info,
            taxValidTill: response.data.tax_upto,
            taxPaidValidTill: response.data.tax_paid_upto,
            cubicCapacity: response.data.cubic_capacity,
            vehicleGrossWeight: response.data.vehicle_gross_weight,
            noCylinders: response.data.no_cylinders,
            seatCapacity: response.data.seat_capacity,
            sleeperCapacity: response.data.sleeper_capacity,
            standingCapacity: response.data.standing_capacity,
            wheelbase: response.data.wheelbase,
            unladenWeight: response.data.unladen_weight,
            vehicleCategoryDescription: response.data.vehicle_category_description,
            puccNumber: response.data.pucc_number,
            puccValidTill: response.data.pucc_upto,
            permitNumber: response.data.permit_number,
            permitIssueDate: response.data.permit_issue_date,
            permitValidFrom: response.data.permit_valid_from,
            permitValidTill: response.data.permit_valid_upto,
            permitType: response.data.permit_type,
            nationalPermitNumber: response.data.national_permit_number,
            nationalPermitValidTill: response.data.national_permit_upto,
            nationalPermitIssuedBy: response.data.national_permit_issued_by,
            nonUseStatus: response.data.non_use_status,
            nonUseFrom: response.data.non_use_from,
            nonUseTo: response.data.non_use_to,
            blacklistStatus: response.data.blacklist_status,
            nocDetails: response.data.noc_details,
            ownerNumber: response.data.owner_number,
            rcStatus: response.data.rc_status,
            rtoCode: response.data.rto_code,
            responseMetadata: {
                maskedChassis: response.data.response_metadata.masked_chassis,
                maskedEngine: response.data.response_metadata.masked_engine,
                maskedOwnerName: response.data.response_metadata.masked_owner_name,
            },
        };
    }
}