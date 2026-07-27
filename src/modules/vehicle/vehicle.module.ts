import { Module } from '@nestjs/common';

import { RcController } from './rc/rc.controller';
import { RcService } from './rc/rc.service';

import { SurepassService } from './providers/surepass/surepass.service';

@Module({
    controllers: [
        RcController,
    ],

    providers: [
        RcService,
        SurepassService,
    ],

    exports: [
        RcService,
    ],
})
export class VehicleModule { }