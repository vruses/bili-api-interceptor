import { historyList } from '@/constants'
import type { HistoryListRes, ResultType } from '@/types/response'
import type { RequestFn } from '@/utils/ajax'

/**
 * @description 历史观看记录
 */
export const useHistory: RequestFn = (request) => {
  if (!request.url.includes('/x/web-interface/history/cursor')) return
  if (request.type === 'xhr') return
  request.response = (res) => {
    if (!res?.json) return
    const historyListRes: ResultType<HistoryListRes> = historyList
    res.json = historyListRes
  }
}
