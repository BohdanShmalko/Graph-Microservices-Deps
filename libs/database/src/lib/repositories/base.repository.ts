import { Injectable } from '@nestjs/common';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';

@Injectable()
export class BaseRepository {
  constructor(
    protected model: Model<any>,
  ) {}

  public create<DT>(document: DT) {
    return this.model.create(document);
  }

  public upsertOne<DT>(documentFilter: FilterQuery<DT>, updateFields: UpdateQuery<DT>) {
    return this.model.findOneAndUpdate(documentFilter, { $set: updateFields }, { upsert: true });
  }

  public find<DT>(documentFilter: FilterQuery<DT>, select = {} ) {
    return this.model.find(documentFilter).select(select).exec();
  }

  public findAndUpdate<DT>(documentFilter: FilterQuery<DT>, updateFields: UpdateQuery<DT>) {
    return this.model.updateMany(documentFilter, { $set: updateFields })
  }
}