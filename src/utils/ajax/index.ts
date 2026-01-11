import ajaxHooker, { type Ajax } from '@/utils/ajax/ajax-hooker'

/** ajaxhooker 回调 */
type RequestFn = (request: Ajax.BaseRequest) => unknown
/** 应用层请求 hook, 返回请求相关对象 */
type RequestFn2 = () => {
  request: Ajax.BaseRequest
  response: (res: any) => void
  urls: string[]
}

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
 * 将应用层的 hook 转化为 ajaxhooker 格式
 * @example
 * // 可以多次调用，不会重复 hook
 * onRequest(fn4, fn5)
 */
export default function onRequest(...fns: RequestFn2[]): void {
  const hookAdapterList = fns.map((fn) => {
    return (ajaxRequest: Ajax.BaseRequest) => {
      const { request, response, urls } = fn()
      // url 匹配是否 hook
      const shouldHook = urls.some((url) => {
        return ajaxRequest.url.includes(url)
      })
      if (!shouldHook) return
      // 将更改的属性浅克隆到最终的请求对象身上
      Object.assign(ajaxRequest, request)
      // 替换响应 hook
      ajaxRequest.response = response
    }
  })
  RequestHooker.getInstance().add(...hookAdapterList)
}

/**
 * 初始化带类型的请求响应对象
 * @template T - 请求类型，支持 `'xhr'` 或 `'fetch'`
 * @template P - 请求参数类型，默认为 `unknown`
 * @template Q - 响应数据类型，默认为 `unknown`
 */
export const useHttpData = <T extends 'xhr' | 'fetch', P = unknown, Q = unknown>() => {
  return {
    /** 请求体 */
    request: {} as Ajax.Request<T, P>,
    /** 响应回调，在请求完成后执行*/
    response: {} as (res: Ajax.Response<T, Q>) => void,
  }
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
