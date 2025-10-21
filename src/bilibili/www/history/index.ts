import { historyList } from '@/constants'
import type { HistoryListRes, ResultType } from '@/types/response'
import ajaxHooker, { type FetchResponse } from '@/utils/ajax/ajax-hooker'

ajaxHooker.hook((request) => {
  // 历史观看记录
  if (request.url.includes('/x/web-interface/history/cursor')) {
    request.response = (res: FetchResponse) => {
      if (!res?.json) return
      const historyListRes: ResultType<HistoryListRes> = historyList
      res.json = historyListRes
    }
  }
})

export default {}
