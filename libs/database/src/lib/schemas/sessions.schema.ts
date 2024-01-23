import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SessionsDocument = Sessions & Document;

@Schema({ timestamps: true, collection: 'Sessions' })
export class Sessions extends Document {
    @Prop({ required: true })
    token!: string;
}

export const SessionsSchema = SchemaFactory.createForClass(Sessions);
