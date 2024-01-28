import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


import { SessionsDocument, SessionsRepository } from '@master/database';

@Injectable()
export class SessionsService {
  constructor(
    private readonly sessionsRepo: SessionsRepository,
  ) {}

  public async getSession(): Promise<SessionsDocument> {
    const token: string = uuidv4(); 
    const document = { token } as SessionsDocument;
    await this.sessionsRepo.create<SessionsDocument>(document);
    return document;
  }
}
