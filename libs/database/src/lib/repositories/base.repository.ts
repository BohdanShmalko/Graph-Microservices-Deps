import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Document } from 'mongoose';

@Injectable()
export class BaseRepository {
  constructor(
    model: Model<any>,
  ) {}
}