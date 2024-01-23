import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionPluginsRepository } from '../repositories/session-plugins.repository';
import { SessionPlugins, SessionPluginsSchema } from '../schemas/session-plugins.schema';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: SessionPlugins.name, schema: SessionPluginsSchema },
      ])
    ],
  controllers: [],
  providers: [ 
    SessionPluginsRepository
  ],
  exports: [
    SessionPluginsRepository
  ],
})
export class SessionPluginsModule {}
