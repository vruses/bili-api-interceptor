import ajaxHooker, { type AjaxRequest } from '@/utils/ajax/ajax-hooker'

/**
 * ajaxhooker回调
 */
export type RequestFn = (request: AjaxRequest) => unknown

/**
 * @example
 * 请求钩子管理类，中间维护一份 hooks 缓存并让 ajaxHooker.hook 只执行一次
 * 提供更方便的 api 如清空所有hook
 */
class RequestHooker {
  private static instance: RequestHooker | null = null
  private hooks: Set<RequestFn> = new Set()
  private isHooked = false

  private constructor() {}

  /**
   * 获取单例实例
   */
  static getInstance(): RequestHooker {
    if (!RequestHooker.instance) {
      RequestHooker.instance = new RequestHooker()
    }
    return RequestHooker.instance
  }

  /**
   * 添加请求钩子函数
   * @param fns 一个或多个请求处理函数
   */
  add(...fns: RequestFn[]): void {
    fns.forEach((fn) => {
      this.hooks.add(fn)
    })
    this.ensureHooked()
  }

  /**
   * 移除请求钩子函数
   * @param fn 要移除的函数
   */
  remove(fn: RequestFn): void {
    this.hooks.delete(fn)
  }

  /**
   * 清空所有钩子函数
   */
  clear(): void {
    this.hooks.clear()
  }

  /**
   * ajaxHooker.hook 只执行一次就行
   */
  private ensureHooked(): void {
    if (this.isHooked) return
    this.isHooked = true
    ajaxHooker.hook((request) => {
      this.hooks.forEach((hook) => {
        hook(request)
      })
    })
  }
}

/**
 * 用于简化xhr和fetch的hook
 * @example
 * //old usage
 *  ajaxHooker.hook((request)=>{
 *  fn1(request)
 *  fn2(request)
 *  .etc...
 * })
 * // new usage
 * onRequest(fn1, fn2, fn3)
 *
 * // 可以多次调用，不会重复 hook
 * onRequest(fn4, fn5)
 */
export default function onRequest(...args: RequestFn[]): void {
  RequestHooker.getInstance().add(...args)
}

/**
 * 移除指定的请求钩子函数
 */
export function offRequest(fn: RequestFn): void {
  RequestHooker.getInstance().remove(fn)
}

/**
 * 清空所有请求钩子函数
 */
export function clearRequestHooks(): void {
  RequestHooker.getInstance().clear()
}
