import { Module } from '@nestjs/common';

import { RcController } from './rc/rc.controller';
import { RcService } from './rc/rc.service';
import { FastagController } from './fastag/fastag.controller';
import { FastagService } from './fastag/fastag.service';
import { SurepassService } from './providers/surepass/surepass.service';

@Module({
    controllers: [
        RcController,
        FastagController,
    ],

    providers: [
        RcService,
        FastagService,
        SurepassService,
    ],

    exports: [
        RcService,
    ],
})
export class VehicleModule { }