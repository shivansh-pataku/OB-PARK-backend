import { Module } from '@nestjs/common';
import { NewsletterController } from './newsletter/newsletter.controller';
import { NewsletterService } from './newsletter/newsletter.service';
import { InvestController } from './invest/invest.controller';
import { InvestService } from './invest/invest.service';

@Module({
  controllers: [NewsletterController, InvestController],
  providers: [NewsletterService, InvestService],
})
export class FormsModule { }
