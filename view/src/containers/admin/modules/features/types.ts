export type Feature = {
  name: string;
  state: boolean;
  rule: string;
}

export type FeatureRequest = {
  page: number;
  size: number;
  search: string;
}

export type FeatureResponse = {
  length: number;
  data: Feature[];
}
