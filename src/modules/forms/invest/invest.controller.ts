import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../../../common/decorators/public.decorator';
import { CreateInvestRequestDto } from './dto/create-invest-request.dto';
import { InvestService } from './invest.service';

@ApiTags('Forms - Invest')
@Controller('invest') // Base path: /invest
export class InvestController {
    // Injecting the InvestService
    constructor(private readonly investService: InvestService) { }

    @Public() // Public route (no login needed)
    @Post('request-deck') // Final endpoint: POST /invest/request-deck
    @ApiOperation({ summary: 'Request investor presentation deck' })
    @ApiResponse({ status: 201, description: 'Request submitted successfully.' })
    @ApiResponse({ status: 400, description: 'Bad Request (Validation failed).' })
    async requestDeck(@Body() dto: CreateInvestRequestDto) {
        return this.investService.createRequest(dto);
    }
}
