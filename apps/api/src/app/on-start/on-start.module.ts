import { Module } from '@nestjs/common';

import { PluginsModule } from '@master/database';
import { OnStart } from './on-start.service';

@Module({
  imports: [PluginsModule],
  providers: [OnStart],
  exports: [OnStart],
})
export class OnStartModule {}
