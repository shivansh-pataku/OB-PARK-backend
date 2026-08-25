import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { BillingService } from './billing.service';
import { CreateBillingDetailsDto } from './dto/billling-details.dto';

@ApiTags('Billing')
@ApiBearerAuth('access-token')
@Controller('billing')
export class BillingController {
    constructor(private readonly billingService: BillingService) { }

    // 1. POST /billing - Naya address/billing details save karne ke liye
    @Post()
    @ApiOperation({ summary: 'Create billing address/details' })
    async create(
        @CurrentUser() user: any,
        @Body() dto: CreateBillingDetailsDto,
    ) {
        const userId = user.sub;
        return this.billingService.create(userId, dto);
    }

    // 2. GET /billing - User ke saare saved billing details dekhne ke liye
    @Get()
    @ApiOperation({ summary: 'Get all saved billing details' })
    async findAll(@CurrentUser() user: any) {
        const userId = user.sub;
        return this.billingService.findAll(userId);
    }

    // 3. GET /billing/:id - Kisi ek billing details ki details fetch karne ke liye
    @Get(':id')
    @ApiOperation({ summary: 'Get specific billing details' })
    async findOne(
        @CurrentUser() user: any,
        @Param('id') id: string,
    ) {
        const userId = user.sub;
        return this.billingService.findOne(userId, id);
    }

    // 4. PATCH /billing/:id - Kisi saved billing details ko edit/update karne ke liye
    @Patch(':id')
    @ApiOperation({ summary: 'Update saved billing details' })
    async update(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() dto: Partial<CreateBillingDetailsDto>,
    ) {
        const userId = user.sub;
        return this.billingService.update(userId, id, dto);
    }

    // 5. DELETE /billing/:id - Kisi saved billing details ko remove/delete karne ke liye
    @Delete(':id')
    @ApiOperation({ summary: 'Delete saved billing details' })
    async remove(
        @CurrentUser() user: any,
        @Param('id') id: string,
    ) {
        const userId = user.sub;
        return this.billingService.remove(userId, id);
    }
}
