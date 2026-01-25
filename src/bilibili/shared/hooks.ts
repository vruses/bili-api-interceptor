import type { RequestFn } from '@/utils/ajax'
import { mockUserInfoResult } from './model/constants'

/**
 * @description 伪造移动 h5 顶部nav的用户信息与登录状态
 */
export const useNav: RequestFn<unknown> = (request) => {
  if (!request.url.includes('/x/web-interface/nav')) return
  // pc端登录
  if (request.type === 'xhr') {
    request.response = (res) => {
      res.responseText = JSON.stringify(mockUserInfoResult)
    }
  }
  // 移动端登录
  if (request.type === 'fetch') {
    request.response = (res) => {
      res.json = mockUserInfoResult
    }
  }
}
