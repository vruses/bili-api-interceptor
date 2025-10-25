import { onDocInteractive } from '@/core/lifecycle'
import type { Subtitles } from '@/types/response'
import onRequest from '@/utils/ajax'
import { usePlayer, usePlayurl, useReply } from './hooks'

import { fetchSubtitle } from './useFetch'

type SubtitleCache = Promise<Subtitles['subtitle'] | null>
const subtitleCache: { current: SubtitleCache } = {
  current: Promise.resolve(null),
}

// window.vd挂载完成后至player请求之前立即先获取一次字幕
onDocInteractive(() => {
  subtitleCache.current =
    window.vd?.aid && window.vd?.cid ? fetchSubtitle(window.vd.aid, window.vd.cid) : Promise.resolve(null)
})
// 解决未登录情况下：评论只展示三条，播放器显示未登录且画质低的问题
onRequest(useReply, usePlayer(subtitleCache), usePlayurl)

export default {}
