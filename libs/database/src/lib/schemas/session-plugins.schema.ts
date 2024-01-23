import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type SessionPluginsDocument = SessionPlugins & Document;

@Schema({ timestamps: true, collection: 'SessionPlugins' })
export class SessionPlugins extends Document {
    @Prop({ required: true })
    sessionId!: MongooseSchema.Types.ObjectId;

    @Prop({ required: true })
    pluginId!: MongooseSchema.Types.ObjectId;

    @Prop({ default: '' })
    data!: string;
}

export const SessionPluginsSchema = SchemaFactory.createForClass(SessionPlugins);

SessionPluginsSchema.index(
    {
        sessionId: 1,
        pluginId: 1,
    },
  );