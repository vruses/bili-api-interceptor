type LifecycleHooks = 'loading' | 'interactive' | 'complete'
// document lifecycle回调
type Fn = (...args: unknown[]) => unknown

/**
 * 用于管理document多个在不同生命周期执行的钩子
 */
export class Lifecycle<T extends Fn> {
  private lifecycleMap: { [K in string]: T[] } = {
    loading: [],
    interactive: [],
    complete: [],
  }
  private initialized = false

  private initListener() {
    if (this.initialized) return
    this.initialized = true

    document.addEventListener('readystatechange', () => {
      const state = document.readyState
      const callbacks = this.lifecycleMap[state]
      if (callbacks?.length) {
        callbacks.forEach((fn) => {
          try {
            fn()
          } catch (err) {
            console.error('[lifecycle]', err)
          }
        })
        this.lifecycleMap[state] = [] // 只需要触发一次，直接清空已触发的回调
      }
    })
  }

  /**
   * 注册生命周期函数
   * @param state document的readystate
   * @param  fn 对应生命周期的hook函数
   */
  public register(state: LifecycleHooks, fn: T) {
    this.initListener()
    if (
      document.readyState === state || // 已经到此阶段
      (state === 'interactive' && document.readyState === 'complete')
    ) {
      // interactive 已经过但未 complete 时也立即触发
      fn()
    } else {
      this.lifecycleMap[state].push(fn)
    }
  }
}

const lifecycle = new Lifecycle()

export const onDocLoading = (fn: Fn) => lifecycle.register('loading', fn)
export const onDocInteractive = (fn: Fn) => lifecycle.register('interactive', fn)
export const onDocComplete = (fn: Fn) => lifecycle.register('complete', fn)
