export interface Response<T> {
  status_code: number;
  data: {
    metadata: {
      last_update?: string
    }
  }
  content: T
}