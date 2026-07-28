import { Body, Controller, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { FastagService } from './fastag.service';
import { FastagRequestDto } from './dto/fastag-request.dto';
import { FastagResponseDto } from './dto/fastag-response.dto';
import { FastagV2RequestDto } from './dto/fastag-v2-request.dto';
import { FastagV2ResponseDto } from './dto/fastag-v2-response.dto';
import { FastagBalanceRequestDto } from './dto/fastag-balance-request.dto';
import { FastagBalanceResponseDto } from './dto/fastag-balance-response.dto';
import { ApiResponseDto } from '../../../common/dto/api-response.dto';

@ApiTags('Vehicle - FasTag')
@ApiBearerAuth('access-token')
@Controller('vehicle/fastag')
export class FastagController {
    constructor(
        private readonly fastagService: FastagService,
    ) { }

    @Post('verify')
    @ApiOperation({
        summary: 'Verify vehicle FasTag details',
        description: 'Validates and retrieves the FasTag bank, tag ID, and status associated with the vehicle registration certificate (RC) number.',
    })
    @ApiResponse({
        status: 200,
        description: 'FasTag details verified successfully.',
        type: FastagResponseDto,
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
    async verifyFastag(
        @Body() dto: FastagRequestDto,
    ): Promise<ApiResponseDto<FastagResponseDto>> {
        const result = await this.fastagService.verifyFastag(dto);

        return {
            success: true,
            message: 'FasTag details verified successfully.',
            data: result,
        };
    }

    @Post('verify-v2')
    @ApiOperation({
        summary: 'Verify vehicle FasTag details (V2)',
        description: 'Validates and retrieves the FasTag bank, tag ID, status, and transaction history associated with the vehicle registration certificate (RC) number.',
    })
    @ApiResponse({
        status: 200,
        description: 'FasTag details verified successfully (V2).',
        type: FastagV2ResponseDto,
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
    async verifyFastagV2(
        @Body() dto: FastagV2RequestDto,
    ): Promise<ApiResponseDto<FastagV2ResponseDto>> {
        const result = await this.fastagService.verifyFastagV2(dto);

        return {
            success: true,
            message: 'FasTag details verified successfully.',
            data: result,
        };
    }

    @Post('balance')
    @ApiOperation({
        summary: 'Lookup vehicle FasTag balance and account details',
        description: 'Retrieves current available balance, recharge limit, tag status, and vehicle class associated with the vehicle registration certificate (RC) number and FASTag provider.',
    })
    @ApiResponse({
        status: 200,
        description: 'FasTag balance and details retrieved successfully.',
        type: FastagBalanceResponseDto,
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
    async lookupFastagBalance(
        @Body() dto: FastagBalanceRequestDto,
    ): Promise<ApiResponseDto<FastagBalanceResponseDto>> {
        const result = await this.fastagService.lookupFastagBalance(dto);

        return {
            success: true,
            message: 'FasTag balance details retrieved successfully.',
            data: result,
        };
    }
}
