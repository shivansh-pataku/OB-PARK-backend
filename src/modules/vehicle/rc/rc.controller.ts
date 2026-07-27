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
}