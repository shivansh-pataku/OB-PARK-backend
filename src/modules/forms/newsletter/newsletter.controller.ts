import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../../../common/decorators/public.decorator';
import { SubscribeNewsletterDto } from './dto/subscribe-newsletter.dto';
import { NewsletterService } from './newsletter.service';

@ApiTags('Forms - Newsletter')
@Controller('newsletter')
export class NewsletterController {
    // 1. Dependency Injection: Injecting our NewsletterService
    constructor(private readonly newsletterService: NewsletterService) { }

    @Public() // 2. Public decorator tells NestJS that this route does NOT require login
    @Post('subscribe') // 3. Creates a POST route: /forms/newsletter/subscribe
    @ApiOperation({ summary: 'Subscribe to the newsletter' })
    @ApiResponse({ status: 201, description: 'Subscribed successfully.' })
    @ApiResponse({ status: 400, description: 'Bad Request (Validation failed or Email already exists).' })
    async subscribe(@Body() dto: SubscribeNewsletterDto) {
        // 4. Getting verified body from @Body() and sending it to service
        return this.newsletterService.subscribe(dto);
    }
}
