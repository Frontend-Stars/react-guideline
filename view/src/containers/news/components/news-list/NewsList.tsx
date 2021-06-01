import React from 'react';
import { News } from '../../types/news.type';
import { NewsItem } from '../news-item/NewsItem';

export interface NewsListProps {
  news: News[];
}

export const NewsList = ({ news }: NewsListProps): JSX.Element => {
  return (
    <>
      {news.map((item) => <NewsItem key={item.id} news={item} />)}
    </>
  );
}
