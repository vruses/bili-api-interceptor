import userStore from '@/store/user'
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
      try {
        const userInfo = JSON.parse(res.responseText)
        if (userInfo.data.isLogin) {
          userStore.isLogin.value = true
          return
        }
      } catch (_error) {}
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

/**
 * @description 拦截获取稿件或者动态评论及子评论列表请求，解除评论获取的数量限制
 */
export const useReply: RequestFn<'fetch'> = (request) => {
  if (!request.url.includes('/x/v2/reply/wbi/main') && !request.url.includes('/x/v2/reply/reply')) return

  request.credentials = 'omit'
}
