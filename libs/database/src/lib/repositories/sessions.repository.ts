import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { Sessions, SessionsDocument } from '../schemas/sessions.schema';

@Injectable()
export class SessionsRepository extends BaseRepository {
  constructor(
    @InjectModel(Sessions.name)
    private readonly model: Model<SessionsDocument>,
  ) {
      super(model);
  }
}