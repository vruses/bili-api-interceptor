export interface ResultType<T> {
  code: number
  message: string
  ttl: number
  data: T
}
