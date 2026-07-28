import { Body, Controller, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { RcService } from './rc.service';
import { RcRequestDto } from './dto/rc-request.dto';
import { RcResponseDto } from './dto/rc-response.dto';
import { RcChallanRequestDto } from './dto/rc-challan-request.dto';
import { RcChallanResponseDto } from './dto/rc-challan-response.dto';
import { RcChallanAdvancedRequestDto } from './dto/rc-challan-advanced-request.dto';
import { RcChallanAdvancedResponseDto } from './dto/rc-challan-advanced-response.dto';
import { RcV2RequestDto } from './dto/rc-v2-request.dto';
import { RcV2ResponseDto } from './dto/rc-v2-response.dto';
import { ApiResponseDto } from '../../../common/dto/api-response.dto';

@ApiTags('Vehicle - RC')
@ApiBearerAuth('access-token')
@Controller('vehicle/rc')
export class RcController {
    constructor(
        private readonly rcService: RcService,
    ) { }

    @Post()
    @ApiOperation({
        summary: 'Fetch vehicle registration details',
        description:
            'Retrieves complete vehicle registration details using the registration number.',
    })
    @ApiResponse({
        status: 200,
        description: 'Vehicle details fetched successfully.',
        type: RcResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid vehicle registration number.',
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized.',
    })
    @ApiResponse({
        status: 503,
        description: 'Surepass service unavailable.',
    })
    async lookupVehicle(
        @Body() dto: RcRequestDto,
    ): Promise<ApiResponseDto<RcResponseDto>> {

        const vehicle = await this.rcService.lookupVehicle(dto);

        return {
            success: true,
            message: 'Vehicle details fetched successfully.',
            data: vehicle,
        };
    }

    @Post('challan')
    @ApiOperation({
        summary: 'Fetch vehicle challan details',
        description:
            'Retrieves comprehensive vehicle challan details using the registration number, chassis number, and engine number.',
    })
    @ApiResponse({
        status: 200,
        description: 'Challan details fetched successfully.',
        type: RcChallanResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid inputs.',
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized.',
    })
    @ApiResponse({
        status: 503,
        description: 'Surepass service unavailable.',
    })
    async lookupChallan(
        @Body() dto: RcChallanRequestDto,
    ): Promise<ApiResponseDto<RcChallanResponseDto>> {
        const details = await this.rcService.lookupChallan(dto);

        return {
            success: true,
            message: 'Challan details fetched successfully.',
            data: details,
        };
    }

    @Post('challan-advanced')
    @ApiOperation({
        summary: 'Fetch vehicle challan details (Advanced)',
        description:
            'Retrieves advanced vehicle challan details including detailed offense list using the registration certificate (RC) number.',
    })
    @ApiResponse({
        status: 200,
        description: 'Advanced challan details fetched successfully.',
        type: RcChallanAdvancedResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid inputs.',
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized.',
    })
    @ApiResponse({
        status: 503,
        description: 'Surepass service unavailable.',
    })
    async lookupChallanAdvanced(
        @Body() dto: RcChallanAdvancedRequestDto,
    ): Promise<ApiResponseDto<RcChallanAdvancedResponseDto>> {
        const details = await this.rcService.lookupChallanAdvanced(dto);

        return {
            success: true,
            message: 'Advanced challan details fetched successfully.',
            data: details,
        };
    }

    @Post('v2')
    @ApiOperation({
        summary: 'Fetch vehicle registration details (V2)',
        description:
            'Retrieves comprehensive vehicle registration details using the registration certificate (RC) number with configurable unmasking options.',
    })
    @ApiResponse({
        status: 200,
        description: 'Vehicle details fetched successfully (V2).',
        type: RcV2ResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid inputs.',
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized.',
    })
    @ApiResponse({
        status: 503,
        description: 'Surepass service unavailable.',
    })
    async lookupRcV2(
        @Body() dto: RcV2RequestDto,
    ): Promise<ApiResponseDto<RcV2ResponseDto>> {
        const vehicle = await this.rcService.lookupRcV2(dto);

        return {
            success: true,
            message: 'Vehicle details fetched successfully.',
            data: vehicle,
        };
    }
}