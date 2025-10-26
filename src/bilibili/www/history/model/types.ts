export interface HistoryList {
  cursor: {
    business: string
    max: number
    ps: number
    view_at: number
  }
  list: Array<unknown>
  tab: Array<{ type: string; name: string }>
}
