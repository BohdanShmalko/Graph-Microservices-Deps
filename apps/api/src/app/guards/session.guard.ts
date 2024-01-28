import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

import { SessionsDocument, SessionsRepository } from '@master/database';

export type ReqUser = Request & { user: SessionsDocument }

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(
        private readonly sessionRepo: SessionsRepository,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req: ReqUser = context.switchToHttp().getRequest();
        try {
            const sessionToken = req.headers.session_token as string;
            if(!sessionToken) throw 'Unauthorized';
            const userSession = await this.sessionRepo.findSessionByToken(sessionToken);
            if(!userSession) throw 'Unauthorized';
            req.user = userSession;
            return true;
        } catch (e) {
            throw new UnauthorizedException({
                message: e.message,
            });
        }
    }
}