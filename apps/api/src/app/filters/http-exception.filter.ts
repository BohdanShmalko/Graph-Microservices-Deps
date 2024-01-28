import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    Injectable,
    Logger,
    HttpStatus,
    HttpException,
  } from '@nestjs/common';

  @Catch()
  @Injectable()
  export class AllExceptionFilter implements ExceptionFilter {
    public constructor() {}
    logger = new Logger('ERROR');
    catch(exception: Error, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const res = ctx.getResponse();
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
      res.statusCode = status;
      console.log(exception);
      res.send({ message: 'Server error', ...exception});
    }
  }