import { img_key, sub_key } from '@/constants'
import type { ResultType } from '@/types/response'
import type { RequestFn } from '@/utils/ajax'
import { encWbi } from '@/utils/wbi-sign'
import { relationResult } from './model/constants'
import type { PlayerUserInfo } from './model/types'
import { useSubtitle } from './useFetch'

/**
 * @description 拦截获取视频评论、评论的评论列表请求，解除评论获取的数量限制
 */
export const useReply: RequestFn = (request) => {
  if (!request.url.includes('/x/v2/reply/wbi/main') && !request.url.includes('/x/v2/reply/reply')) return

  request.credentials = 'omit'
}

/**
 * @description 控制播放器请求的用户信息始终为登录状态
 * @param subtitleCache 页面首次加载时或者每次请求时等待的字幕接口
 * @returns ajaxhooker执行的回调
 */
export const usePlayer: () => RequestFn = () => {
  // 大部分用户只会在视频首次加载观看后就关闭页面，除了分p视频的场景会有切换需求，这个速度优化是有意义的
  let isFirstRequest = true
  const { subtitleCache, setSubtitle } = useSubtitle()

  return (request) => {
    if (!request.url.includes('/x/player/wbi/v2')) return
    // response type narrowing
    if (request.type === 'fetch') return
    // get请求从url里获取请求参数
    const payload = Object.fromEntries(new URL('https:' + request.url).searchParams.entries()) as unknown as {
      aid: number
      cid: number
    }
    if (!isFirstRequest) {
      // 更新字幕数据
      setSubtitle(payload.aid, payload.cid)
    }
    request.response = async (res) => {
      if (!res?.responseText) return
      const playerResponse: ResultType<PlayerUserInfo> = JSON.parse(res.responseText)
      // 认定登录状态的字段
      playerResponse.data.login_mid = Math.floor(Math.random() * 100000)
      // 等级不同ui显示不同
      playerResponse.data.level_info.current_level = 6
      // 等待字幕接口加载
      playerResponse.data.subtitle = await subtitleCache.current
      res.responseText = JSON.stringify(playerResponse)
      // 首次加载后
      if (isFirstRequest) isFirstRequest = false
    }
  }
}

/**
 * @description 获取更高质量视频的cdn地址
 */
export const usePlayurl: RequestFn = (request) => {
  // inject custom qsParams to fetch higher-quality CDN video
  if (!request.url.includes('api.bilibili.com/x/player/wbi/playurl')) return
  // Remove w_rid & wts, set try_look=1 and qn=80, then re-WbiSign
  const qsParams = Object.fromEntries(new URLSearchParams(request.url.split(/\?|&w_rid/)[1]).entries())
  Reflect.set(qsParams, 'qn', 80) // qualityNumber->1080p
  Reflect.set(qsParams, 'try_look', 1)
  const query = encWbi(qsParams, img_key, sub_key)
  request.url = `//api.bilibili.com/x/player/wbi/playurl?${query}`
  if (request.type === 'fetch') return
  // 还原window.__playinfo__对象
  request.response = (res) => {
    Object.defineProperty(window, '__playinfo__', {
      get() {
        return JSON.parse(res?.responseText ?? '{}')
      },
      configurable: true,
    })
  }
}

/**
 * @description 返回与视频up主的关系，显示粉丝数
 */
export const useRelation: RequestFn = (request) => {
  if (!request.url.includes('/x/web-interface/relation')) return
  if (request.type === 'fetch') return
  request.response = (res) => {
    res.responseText = JSON.stringify(relationResult)
  }
}
