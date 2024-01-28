import { Prop, Schema, SchemaFactory,  } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type SessionPluginsDocument = SessionPlugins & Document;

@Schema({ timestamps: true, collection: 'SessionPlugins' })
export class SessionPlugins extends Document {
    @Prop({ required: true })
    sessionId!: ObjectId;

    @Prop({ required: true })
    pluginId!: ObjectId;

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