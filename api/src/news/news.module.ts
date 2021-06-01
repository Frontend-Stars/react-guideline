import { Module } from '@nestjs/common';
import { LatestNewsController } from './latest-news/latest-news.controller';
import { LatestNewsService } from './latest-news/latest-news.service';

@Module({
  imports: [],
  controllers: [LatestNewsController],
  providers: [LatestNewsService],
})
export class NewsModule {}
