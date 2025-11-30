import { onDocInteractive } from '@/core/lifecycle'
import type { ResultType } from '@/types/response'
import type { Subtitles } from './model/types'

/**
 *
 * @param aid 视频稿件级唯一标识
 * @param cid 视频内容级唯一标识
 * @returns 不同语种的字幕信息，字幕内容以url形式
 */
export async function fetchSubtitle(aid: number, cid: number) {
  const url = `https://api.bilibili.com/x/v2/dm/view?aid=${aid}&oid=${cid}&type=1`
  return await fetch(url)
    .then((result) => {
      return result.json()
    })
    .then((result: ResultType<Subtitles>) => {
      result.data.subtitle.subtitles.forEach((element) => {
        element.subtitle_url = element.subtitle_url.replace(/^http:/, '')
      })
      return result.data.subtitle
    })
    .catch(() => null)
}

type SubtitleCache = Subtitles['subtitle'] | null

/**
 * subtitle缓存与更新subtitle
 */
export default function useSubtitle() {
  const subtitleCache = {
    current: new Promise<SubtitleCache>((resolve) => {
      onDocInteractive(() => {
        // window.vd挂载完成后至player请求之前立即先获取一次字幕
        const { aid, cid } = window.vd ?? {}
        aid && cid ? resolve(fetchSubtitle(aid, cid)) : resolve(null)
      })
    }),
  }

  // 动态更新
  function setSubtitle(aid?: number, cid?: number) {
    if (aid && cid) {
      subtitleCache.current = fetchSubtitle(aid, cid)
    } else {
      subtitleCache.current = Promise.resolve(null)
    }
  }
  return {
    subtitleCache,
    setSubtitle,
  }
}
