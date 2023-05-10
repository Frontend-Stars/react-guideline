import { Module } from '@nestjs/common';
import { AccessModule } from './access/access.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [AccessModule, FeaturesModule],
  controllers: [],
  providers: [],
})
export class AdminModule {}
