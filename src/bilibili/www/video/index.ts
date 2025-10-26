import { onDocInteractive } from '@/core/lifecycle'
import onRequest from '@/utils/ajax'
import { usePlayer, usePlayurl, useReply } from './hooks'
import type { Subtitles } from './model/types'

import { fetchSubtitle } from './useFetch'

type SubtitleCache = Promise<Subtitles['subtitle'] | null>
const subtitleCache: { current: SubtitleCache } = {
  current: Promise.resolve(null),
}

// window.vd挂载完成后至player请求之前立即先获取一次字幕
onDocInteractive(() => {
  const { aid, cid } = window.vd ?? {}
  subtitleCache.current = aid && cid ? fetchSubtitle(aid, cid) : Promise.resolve(null)
})
// 解决未登录情况下：评论只展示三条，播放器显示未登录且画质低的问题
onRequest(useReply, usePlayer(subtitleCache), usePlayurl)

export default {}
