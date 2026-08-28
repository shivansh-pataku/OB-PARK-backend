import { Module } from '@nestjs/common';
import { NewsletterController } from './newsletter/newsletter.controller';
import { NewsletterService } from './newsletter/newsletter.service';
import { InvestController } from './invest/invest.controller';
import { InvestService } from './invest/invest.service';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';

@Module({
  controllers: [NewsletterController, InvestController, ContactController],
  providers: [NewsletterService, InvestService, ContactService],
})
export class FormsModule { }
