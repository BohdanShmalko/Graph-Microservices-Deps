import { Controller, Get, Patch, Post } from '@nestjs/common';

import { SessionsService } from './sessions.service';

@Controller('session')
export class SessionsController {
  constructor(private readonly mainService: SessionsService) {}

  @Get()
  public getSession() {
    return this.mainService.getSession()
  }
}
