import { toResult } from '@/constants/utils'
import type { HistoryList } from './types'

const historyList: HistoryList = {
  cursor: {
    max: 1,
    view_at: 0,
    business: 'archive',
    ps: 20,
  },
  tab: [
    {
      type: 'archive',
      name: '视频',
    },
    {
      type: 'live',
      name: '直播',
    },
    {
      type: 'article',
      name: '专栏',
    },
  ],
  list: [],
}
export const historyListResult = toResult(historyList)
