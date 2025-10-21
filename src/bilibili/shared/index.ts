import { mockUserInfo } from '@/constants'
import ajaxHooker, { type FetchResponse, type XhrResponse } from '@/utils/ajax/ajax-hooker'

ajaxHooker.hook((request) => {
  // 伪造登录响应数据
  if (request.url.includes('/x/web-interface/nav')) {
    if (request.type === 'xhr') {
      request.response = (res: XhrResponse) => {
        res.responseText = JSON.stringify(mockUserInfo)
      }
    }
    // 移动端登录
    if (request.type === 'fetch') {
      request.response = (res: FetchResponse) => {
        res.json = mockUserInfo
      }
    }
  }
})

export default {}
