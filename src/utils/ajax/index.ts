import ajaxHooker, { AjaxRequest } from "@/utils/ajax/ajax-hooker"

/**
 * ajaxhooker回调
 */
export type RequestFn = (request: AjaxRequest) => unknown

/**
 * 用于简化xhr和fetch的hook
 * @example
 * //原来
 * ajaxHooker.hook((request)=>{
 *  fn1(request)
 *  fn2(request)
 *  .etc...
 * })
 * //现在
 * onRequest(fn1,fn2,fn3,....)
 *
 */
export default function onRequest(...args: RequestFn[]) {
  ajaxHooker.hook((request) => {
    args.forEach((hook) => {
      hook(request)
    })
  })
}