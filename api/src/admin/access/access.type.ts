export interface Application {
  id: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
}

export interface ApplicationResponse {
  data: Application[];
  page: number;
  pages: number;
}
