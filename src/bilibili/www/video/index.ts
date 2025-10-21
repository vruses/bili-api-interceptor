import { img_key, sub_key } from '@/constants'
import type { PlayerUserInfo, ResultType } from '@/types/response'
import type { XhrResponse } from '@/utils/ajax/ajax-hooker'
import ajaxHooker from '@/utils/ajax/ajax-hooker'
import { encWbi } from '@/utils/wbi-sign'
import { fetchSubtitle } from './useFetch'

// 页面加载完成立即先获取一次字幕
const pendingSubtitle = new Promise((res) => {
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const pendingSubtitle = window.vd?.aid && window.vd?.cid ? fetchSubtitle(window.vd?.aid, window.vd?.cid) : {}
      res(pendingSubtitle)
    }
  }
})
ajaxHooker.hook((request) => {
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

export default {}
