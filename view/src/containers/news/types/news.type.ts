export interface News {
  id: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
}

export type NewsRaw = News;
