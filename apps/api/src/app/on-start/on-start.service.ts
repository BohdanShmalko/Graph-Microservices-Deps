import {
    Injectable,
} from '@nestjs/common';

import { PluginsRepository } from '@master/database';
import { plugins } from './plugins.dataset';


@Injectable()
export class OnStart {
    constructor(
        private readonly sessionRepo: PluginsRepository,
    ) {
        this.createDefaultPlugins();
    }

    private createDefaultPlugins() {
        return Promise.all(
            plugins.map(plugin => this.sessionRepo.upsertOne(
                { _id: plugin._id },
                plugin,
            ))
        )
    }
}