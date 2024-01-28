import { Injectable } from '@nestjs/common';

import { PluginsDocument, PluginsRepository, SessionPluginsDocument, SessionPluginsRepository, SessionsDocument } from '@master/database';
import { UpsertSessionPlugin } from './plugins.dto';

@Injectable()
export class PluginsService {
  constructor(
    private readonly pluginsRepo: PluginsRepository,
    private readonly sessionPluginsRepo: SessionPluginsRepository,
  ) {}

  public async getSessionPlugins(
    user: SessionsDocument
  ): Promise<SessionPluginsDocument[]> {
    const sessionPlugins = await this.sessionPluginsRepo.find<SessionPluginsDocument>(
      { sessionId: user._id }, 
      { _id: 1, pluginId: 1, data: 1 }
    );
    return sessionPlugins;
  }

  public async getPlugins(
    user: SessionsDocument
  ): Promise<PluginsDocument[]> {
    const allPlugins = await this.pluginsRepo.find<PluginsDocument>({}, { _id: 1, name: 1 });
    return allPlugins;
  }

  public async bindWithPlugin(
    user: SessionsDocument, 
    dto: UpsertSessionPlugin
  ): Promise<SessionPluginsDocument[]> {
    const sessionPlugin = { sessionId: user._id, data: dto.data, pluginId: dto.pluginId } as SessionPluginsDocument;
    await this.sessionPluginsRepo.create<SessionPluginsDocument>(sessionPlugin)
    return this.getSessionPlugins(user);
  }

  public async changeSessionPlugin(
    user: SessionsDocument, 
    _id: string, 
    dto: UpsertSessionPlugin
  ): Promise<SessionPluginsDocument[]> {
    await this.sessionPluginsRepo.findAndUpdate<SessionPluginsDocument>({ _id, sessionId: user._id }, { pluginId: dto.pluginId, data: dto.data });
    return this.getSessionPlugins(user);
  }
}
