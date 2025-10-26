import type { RequestFn } from '@/utils/ajax'
import { historyListResult } from './model/constants'

/**
 * @description 历史观看记录
 */
export const useHistory: RequestFn = (request) => {
  if (!request.url.includes('/x/web-interface/history/cursor')) return
  if (request.type === 'xhr') return
  request.response = (res) => {
    if (!res?.json) return
    res.json = historyListResult
  }
}
