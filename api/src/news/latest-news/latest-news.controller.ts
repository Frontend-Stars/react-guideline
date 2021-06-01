import { Controller, Get } from '@nestjs/common';
import { LatestNewsService } from './latest-news.service';
import { News } from './latest-news.type';

@Controller('latest-news')
export class LatestNewsController {
  constructor(private readonly latestNewsService: LatestNewsService) {}

  @Get()
  getLatestNews(): News[] {
    return this.latestNewsService.getLatestNews();
  }
}
