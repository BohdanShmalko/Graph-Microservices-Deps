import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PluginsApiModule } from './plugins/plugins.module';
import { SessionsApiModule } from './sessions/sessions.module';
import { OnStartModule } from './on-start/on-start.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PluginsApiModule,
    SessionsApiModule,
    OnStartModule,
  ],
  controllers: [],
})
export class AppModule {}
