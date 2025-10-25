import type { RequestFn } from '@/utils/ajax'

/**
 * @description 纠正b站搜索页的热搜接口拼接损坏的问题
 */
export const useSearch: RequestFn = (request) => {
  if (!request.url.includes('/api.bilibili.comx/web-interface/search')) return
  request.url = request.url.replace(/\.com(?!\/)/, '.com/')
}
