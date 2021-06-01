import React from 'react';
import { News } from '../../types/news.type';

export interface NewsItemProps {
  news: News;
}

export const NewsItem = ({ news }: NewsItemProps): JSX.Element => {
  return (
      <div>this is {news.title}</div>
  );
}
