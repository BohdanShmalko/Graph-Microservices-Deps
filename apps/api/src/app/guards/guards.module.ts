import { Module } from '@nestjs/common';

import { SessionsModule } from '@master/database';
import { SessionGuard } from './session.guard';

@Module({
  imports: [SessionsModule],
  providers: [SessionGuard],
  exports: [SessionGuard],
})
export class GuardsModule {}
