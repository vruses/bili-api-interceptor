import { mockUserInfo } from '@/constants'
import type { RequestFn } from '@/utils/ajax'

/**
 * @description 伪造顶部nav的用户信息与登录状态
 */
export const useNav: RequestFn = (request) => {
  if (request.url.includes('/x/web-interface/nav')) return
  // pc端登录
  if (request.type === 'xhr') {
    request.response = (res) => {
      res.responseText = JSON.stringify(mockUserInfo)
    }
  }
  // 移动端登录
  if (request.type === 'fetch') {
    request.response = (res) => {
      res.json = mockUserInfo
    }
  }
}
