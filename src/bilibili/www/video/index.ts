import { onDocComplete } from '@/core/lifecycle'
import type { Subtitles } from '@/types/response'
import onRequest from '@/utils/ajax'
import { usePalyer, usePlayurl, useReply } from './hook'

import { fetchSubtitle } from './useFetch'

let pendingSubtitle: Promise<Subtitles['subtitle'] | null> = Promise.resolve(null)
// 页面加载完成立即先获取一次字幕
onDocComplete(() => {
  pendingSubtitle =
    window.vd?.aid && window.vd?.cid ? fetchSubtitle(window.vd.aid, window.vd.cid) : Promise.resolve(null)
})
// 解决未登录情况下：评论只展示三条，播放器显示未登录且画质低的问题
onRequest(useReply, usePalyer(pendingSubtitle), usePlayurl)

export default {}
