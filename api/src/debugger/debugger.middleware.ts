import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DebuggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const errorCode = Number(req.query.debugger || req.body.debugger);
    const foundedErrorCode = Object.entries(HttpStatus).find(
      ([code]) => Number(code) === errorCode,
    );

    if (foundedErrorCode) {
      throw new HttpException(
        `Simulation of ${foundedErrorCode[1]} http status.`,
        Number(foundedErrorCode[0]),
      );
    }

    next();
  }
}
