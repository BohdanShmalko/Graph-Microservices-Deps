import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionsRepository } from '../repositories/sessions.repository';
import { Sessions, SessionsSchema } from '../schemas/sessions.schema';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: Sessions.name, schema: SessionsSchema },
      ])
    ],
  controllers: [],
  providers: [ 
    SessionsRepository
  ],
  exports: [
    SessionsRepository
  ],
})
export class SessionsModule {}
