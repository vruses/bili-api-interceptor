import type { ResultType } from '@/types/response'

export function toResult<T>(data: T, code = 0, message = 'success', ttl = 1): ResultType<T> {
  return {
    code,
    message,
    ttl,
    data,
  }
}
