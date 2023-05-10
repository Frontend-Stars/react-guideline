export interface EditResponse {
  status: 200 | 402;
}

export interface EditRequest {
  name: string;
  state: boolean;
  rule: string;
}
