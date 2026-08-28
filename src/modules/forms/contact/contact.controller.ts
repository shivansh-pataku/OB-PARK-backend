import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../../../common/decorators/public.decorator';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { ContactService } from './contact.service';

@ApiTags('Forms - Contact')
@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @Public()
    @Post('submit')
    @ApiOperation({ summary: 'Submit a contact form message' })
    @ApiResponse({ status: 201, description: 'Message submitted successfully.' })
    @ApiResponse({ status: 400, description: 'Bad Request (Validation failed).' })
    async submitMessage(@Body() dto: CreateContactMessageDto) {
        return this.contactService.createMessage(dto);
    }
}
