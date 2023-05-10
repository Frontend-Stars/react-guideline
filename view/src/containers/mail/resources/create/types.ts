export interface CreateResponse {
  status: 200 | 402;
}

export interface CreateRequest {
  to: string;
  from: string;
  content: string;
}
