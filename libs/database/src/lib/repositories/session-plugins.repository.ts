import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { SessionPlugins, SessionPluginsDocument } from '../schemas/session-plugins.schema';

@Injectable()
export class SessionPluginsRepository extends BaseRepository {
  constructor(
    @InjectModel(SessionPlugins.name)
    protected override readonly model: Model<SessionPluginsDocument>,
  ) {
      super(model);
  }
}