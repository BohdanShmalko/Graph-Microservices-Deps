import { Module } from '@nestjs/common';

import { PluginsController } from './plugins.controller';
import { PluginsService } from './plugins.service';
import { GuardsModule } from '../guards/guards.module';
import { SessionPluginsModule, PluginsModule, SessionsModule } from '@master/database';

@Module({
  imports: [
    GuardsModule,
    SessionPluginsModule,
    SessionsModule,
    PluginsModule,
  ],
  controllers: [PluginsController],
  providers: [PluginsService],
})
export class PluginsApiModule {}
