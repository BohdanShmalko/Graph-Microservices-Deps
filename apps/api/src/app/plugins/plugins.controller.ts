import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';

import { PluginsService } from './plugins.service';
import { ReqUser, SessionGuard } from '../guards/session.guard';
import { UpsertSessionPlugin } from './plugins.dto';

@UseGuards(SessionGuard)
@Controller('plugins')
export class PluginsController {
  constructor(private readonly mainService: PluginsService) {}

  @Get('session')
  public getSessionPlugins(@Req() req: ReqUser) {
    return this.mainService.getSessionPlugins(req.user);
  }

  @Get()
  public getPlugins(@Req() req: ReqUser) {
    return this.mainService.getPlugins(req.user);
  }

  @Post()
  public bindWithPlugin(
    @Req() req: ReqUser, 
    @Body() dto: UpsertSessionPlugin
  ) {
    return this.mainService.bindWithPlugin(req.user, dto);
  }

  @Patch('/:_id')
  public changeSessionPlugin(
    @Req() req: ReqUser, 
    @Param('_id') _id: string, 
    @Body() dto: UpsertSessionPlugin
  ) {
    return this.mainService.changeSessionPlugin(req.user, _id, dto);
  }
}
