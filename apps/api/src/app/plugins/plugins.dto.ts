import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';
import { ObjectId as MongooseObjectId } from 'mongoose';

export class UpsertSessionPlugin {
    @Transform(({ value }) => new ObjectId(value))
    @IsNotEmpty()
    @IsString()
    pluginId: MongooseObjectId;

    @IsNotEmpty()
    @IsString()
    data: string;
}