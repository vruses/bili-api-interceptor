import { random } from 'lodash-es'
import toggleIntercept from '@/utils/websocket/intercept'
import '@/core'

// 修改ws连接成功后的发送的第一个数据包以在直播页获取弹幕
if (location.href.includes('live.bilibili.com')) {
  toggleIntercept()
}
// Prevent the player from retrieving the correct playback information
Object.defineProperty(window, '__playinfo__', {
  get: () => null,
  configurable: true,
})

// player判断用户登录的另一种方式，用于首次获取何种质量的视频cdn
// biome-ignore lint: <修改document.cookie的唯一方法>
document.cookie = `DedeUserID=${random(2 ** 53)}`
