import { Module } from '@nestjs/common';

import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { SessionsModule } from '@master/database';

@Module({
  imports: [
    SessionsModule,
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsApiModule {}
