import { ref, watch } from '@vue/reactivity'
import { clearRequestHooks } from '@/utils/ajax'
import { stop as stopDmIntercept } from '@/utils/websocket/intercept'

function useUserStore() {
  const isLogin = ref(false)
  watch(isLogin, (newVal) => {
    if (!newVal) return
    // 清除所有请求钩子
    clearRequestHooks()
    // 移除弹幕 ws 拦截
    stopDmIntercept()
  })
  return {
    isLogin,
  }
}
const userStore = useUserStore()

export default userStore
