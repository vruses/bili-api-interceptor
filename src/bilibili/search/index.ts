import ajaxHooker from '@/utils/ajax/ajax-hooker'

ajaxHooker.hook((request) => {
  // 纠正b站搜索页的热搜接口拼接损坏的问题
  if (request.url.includes('/api.bilibili.comx/web-interface/search')) {
    request.url = request.url.replace(/\.com(?!\/)/, '.com/')
  }
})
export default {}
