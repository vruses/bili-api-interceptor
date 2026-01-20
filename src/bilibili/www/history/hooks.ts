import type { RequestFn } from '@/utils/ajax'
import { historyListResult } from './model/constants'

/**
 * @description 历史观看记录
 */
export const useHistory: RequestFn<'fetch'> = (request) => {
  if (!request.url.includes('/x/web-interface/history/cursor')) return
  request.response = (res) => {
    res.json = historyListResult
  }
}
