import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DebuggerMiddleware } from './debugger.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class DebuggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DebuggerMiddleware).forRoutes('*');
  }
}
