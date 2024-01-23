import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PluginsDocument = Plugins & Document;

@Schema({ timestamps: true, collection: 'Plugins' })
export class Plugins extends Document {
    @Prop({ required: true })
    name!: string;
}

export const PluginsSchema = SchemaFactory.createForClass(Plugins);
