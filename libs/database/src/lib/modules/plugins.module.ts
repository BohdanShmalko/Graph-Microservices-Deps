import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PluginsRepository } from '../repositories/plugins.repository';
import { Plugins, PluginsSchema } from '../schemas/plugins.schema';

@Module({
    imports: [
      MongooseModule.forFeature([
        { name: Plugins.name, schema: PluginsSchema },
      ])
    ],
  controllers: [],
  providers: [ 
    PluginsRepository
  ],
  exports: [
    PluginsRepository
  ],
})
export class PluginsModule {}
