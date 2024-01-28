import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { Plugins, PluginsDocument } from '../schemas/plugins.schema';

@Injectable()
export class PluginsRepository extends BaseRepository {
  constructor(
    @InjectModel(Plugins.name)
    protected override readonly model: Model<PluginsDocument>,
  ) {
      super(model);
  }
}