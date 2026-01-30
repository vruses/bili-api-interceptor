import { random } from 'lodash-es'
import { domainConfig } from '@/core/config'
import onRequest from '@/utils/ajax'

// player判断用户登录的另一种方式，用于首次获取何种质量的视频cdn
// biome-ignore lint: <修改document.cookie的唯一方法>
document.cookie = `DedeUserID=${random(2 ** 53)}`
const subdomain = location.host.split('.').shift()
if (subdomain && !domainConfig.blackList.includes(subdomain)) {
  // 注入共享钩子
  domainConfig.sharedHook.forEach((hook) => {
    onRequest(hook)
  })
  // 注入对应二级域名钩子
  const domainItem = domainConfig.children.find((item) => item.name === subdomain)
  if (domainItem) {
    domainItem.hook.forEach((hook) => {
      onRequest(hook)
    })
    // 执行对应二级域名动作
    domainItem.action?.forEach((action) => {
      action()
    })
  }
}

export default {}
