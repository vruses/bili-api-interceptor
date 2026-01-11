/**
 * Ajax 请求拦截器
 * @author cxxjackie
 * @version 1.4.7
 */

/** xhr 请求相关属性 */
interface XhrRequest<DataType = unknown> {
  /** 请求类型 */
  type: 'xhr'
  /** 请求 URL */
  url: string
  /** 请求方法 */
  method: string
  /** 是否中止请求 */
  abort: boolean
  /** 请求头 */
  headers: Record<string, string>
  /** 请求数据 */
  data: DataType
  /** 响应拦截函数 */
  response: ((response: AjaxResponse<'xhr'>) => unknown) | null
  /** 是否异步 */
  async: boolean
  /** 响应类型 (XHR) */
  responseType: string
  /** 超时时间 (XHR) */
  timeout: number
  /** 是否携带凭证 (XHR) */
  withCredentials: boolean
}

/** fetch 请求体 */
interface FetchRequest<DataType = unknown> {
  /** 请求类型 */
  type: 'fetch'
  /** 请求 URL */
  url: string
  /** 请求方法 */
  method: string
  /** 是否中止请求 */
  abort: boolean
  /** 请求头 */
  headers: Record<string, string>
  /** 请求负载 */
  data: DataType
  /** 响应拦截函数 */
  response: ((response: AjaxResponse<'fetch'>) => unknown) | null
  /** 是否异步 */
  async: boolean
  /** 缓存模式 (Fetch) */
  cache: RequestCache
  /** 凭证模式 (Fetch) */
  credentials: RequestCredentials
  /** 完整性校验 (Fetch) */
  integrity: string
  /** 保持连接 (Fetch) */
  keepalive: boolean
  /** 请求模式 (Fetch) */
  mode: RequestMode
  /** 优先级 (Fetch) */
  priority: string
  /** 重定向模式 (Fetch) */
  redirect: RequestRedirect
  /** 来源 (Fetch) */
  referrer: string
  /** 来源策略 (Fetch) */
  referrerPolicy: ReferrerPolicy
  /** 中止信号 (Fetch) */
  signal: AbortSignal
}

/** xhr 响应相关属性 */
interface XhrResponse<DataType = unknown> {
  /** 最终 URL (可能经过重定向) */
  finalUrl: string
  /** HTTP 状态码 */
  /** 响应头 */
  responseHeaders: Record<string, string>
  /** 响应数据 (XHR) */
  response: DataType | Promise<DataType>
  /** 响应文本 (XHR) */
  responseText: string | Promise<string>
  /** 响应 XML (XHR) */
  responseXML: Document | null | Promise<Document | null>
}

/** fetch 响应体 */
interface FetchResponse<DataType = unknown> {
  /** 最终 URL (可能经过重定向) */
  finalUrl: string
  /** HTTP 状态码 */
  status: number
  /** 响应头 */
  responseHeaders: Record<string, string>
  /** ArrayBuffer 响应数据 (Fetch) */
  arrayBuffer: ArrayBuffer | Promise<ArrayBuffer>
  /** Blob 响应数据 (Fetch) */
  blob: Blob | Promise<Blob>
  /** FormData 响应数据 (Fetch) */
  formData: FormData | Promise<FormData>
  /** JSON 响应数据 (Fetch) */
  json: DataType | Promise<DataType>
  /** 文本响应数据 (Fetch) */
  text: string | Promise<string>
}

/** 通用 Ajax 请求对象 */
type BaseAjaxRequest = FetchRequest | XhrRequest

/** 通用 Ajax 响应对象 */
type BaseAjaxResponse = FetchResponse | XhrResponse

/** 请求对象泛型 */
type AjaxRequest<T extends 'xhr' | 'fetch', DataType> = T extends 'xhr' ? XhrRequest<DataType> : FetchRequest<DataType>

/** 响应对象泛型 */
type AjaxResponse<T extends 'xhr' | 'fetch', DataType> = T extends 'xhr'
  ? XhrResponse<DataType>
  : FetchResponse<DataType>

/**
 * 过滤器配置
 */
export interface FilterConfig {
  /** 请求类型 */
  type?: 'xhr' | 'fetch'
  /** URL 匹配 (字符串或正则) */
  url?: string | RegExp
  /** 请求方法 */
  method?: string
  /** 是否异步 */
  async?: boolean
}

/**
 * 钩子函数类型
 */
export type HookFunction = (request: BaseAjaxRequest) => unknown

/**
 * AjaxHooker 接口
 */
export interface AjaxHooker {
  /**
   * 添加请求拦截钩子
   * @param fn 钩子函数
   */
  hook(fn: HookFunction): void

  /**
   * 设置过滤器，只有符合条件请求才会被拦截
   * @param arr 过滤器配置数组
   */
  filter(arr: FilterConfig[]): void

  /**
   * 保护 hook，防止被覆盖
   */
  protect(): void

  /**
   * 取消拦截，恢复原始 XMLHttpRequest 和 fetch
   */
  unhook(): void
}

/**
 * AjaxHooker 实例
 */
declare const ajaxHooker: AjaxHooker

export default ajaxHooker

/** ajax-hooker 相关接口 */
export namespace Ajax {
  /** 请求体 */
  export type Request<T, DataType> = AjaxRequest<T, DataType>
  /** 响应体 */
  export type Response<T, DataType> = AjaxResponse<T, DataType>
  /**  */
  export type BaseRequest = BaseAjaxRequest
  export type BaseResponse = BaseAjaxResponse
}
