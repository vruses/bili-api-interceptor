import { historyList, mockUserInfo, web_key_urls } from '@/constants'
import { fetchSubtitle } from '@/core/useFetch'
import type { HistoryListRes, PlayerUserInfo, ResultType } from '@/types/response'
import type { FetchResponse, XhrResponse } from '@/utils/ajax/ajax-hooker'
import ajaxHooker from '@/utils/ajax/ajax-hooker'
import { encWbi } from '@/utils/wbi-sign'
import { useWebKey } from '@/utils/web-key'

const pendingSubtitle = new Promise((res) => {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const pendingSubtitle = window.vd?.aid && window.vd?.cid ? fetchSubtitle(window.vd?.aid, window.vd?.cid) : {}
      res(pendingSubtitle)
    }
  }
})

function runScript() {
  const img_key = useWebKey(web_key_urls.img_key_url)
  const sub_key = useWebKey(web_key_urls.sub_key_url)

  ajaxHooker.hook((request) => {
    // 纠正b站搜索页的热搜接口拼接损坏的问题
    if (request.url.includes('/api.bilibili.comx/web-interface/search')) {
      request.url = request.url.replace(/\.com(?!\/)/, '.com/')
    }
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
    // 拦截获取视频评论、评论的评论列表请求，解除评论获取的数量限制
    if (request.url.includes('/x/v2/reply/wbi/main') || request.url.includes('/x/v2/reply/reply')) {
      request.credentials = 'omit'
    }
    // 播放器请求的用户信息，需要返回登录状态
    if (request.url.includes('/x/player/wbi/v2')) {
      request.response = async (res: XhrResponse) => {
        if (!res?.responseText) return
        const playerResponse: ResultType<PlayerUserInfo> = JSON.parse(res.responseText)
        playerResponse.data.login_mid = Math.floor(Math.random() * 100000)
        playerResponse.data.level_info.current_level = 6
        playerResponse.data.subtitle = await pendingSubtitle

        res.responseText = JSON.stringify(playerResponse)
      }
    }
    // 历史观看记录
    if (request.url.includes('/x/web-interface/history/cursor')) {
      request.response = (res: FetchResponse) => {
        if (!res?.json) return
        const historyListRes: ResultType<HistoryListRes> = historyList
        res.json = historyListRes
      }
    }
    // inject custom qsParams to fetch higher-quality CDN video
    if (request.url.includes('api.bilibili.com/x/player/wbi/playurl')) {
      // Remove w_rid & wts, set try_look=1 and qn=80, then re-WbiSign
      const qsParams = Object.fromEntries(new URLSearchParams(request.url.split(/\?|&w_rid/)[1]).entries())
      Reflect.set(qsParams, 'qn', 80) // qualityNumber->1080p
      Reflect.set(qsParams, 'try_look', 1)
      const query = encWbi(qsParams, img_key, sub_key)
      request.url = `//api.bilibili.com/x/player/wbi/playurl?${query}`
      // 还原window.__playinfo__对象
      request.response = (res: XhrResponse) => {
        Object.defineProperty(window, '__playinfo__', {
          get() {
            return JSON.parse(res?.responseText ?? '{}')
          },
          configurable: true,
        })
      }
    }
  })
}
export default runScript
