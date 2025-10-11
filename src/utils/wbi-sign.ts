import { Md5 } from 'ts-md5'

/**
 * Utility for generating Wbi signature used in Bilibili API requests.
 * refer: https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/misc/sign/wbi.md
 */

const mixinKeyEncTab = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41,
  13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34,
  44, 52,
]

// 对 imgKey 和 subKey 进行字符顺序打乱编码
function getMixinKey(orig: string) {
  return mixinKeyEncTab
    .map((n) => orig[n])
    .join('')
    .slice(0, 32)
}

// 为请求参数进行 wbi 签名
export function encWbi(
  params: Record<string, string>, // The parameters of a bili request
  img_key: string, // A disguised field used as part of the signature generation.
  sub_key: string
) {
  const mixin_key = getMixinKey(img_key + sub_key)
  const curr_time = Math.round(Date.now() / 1000)
  const chr_filter = /[!'()*]/g

  Object.assign(params, { wts: curr_time }) // 添加 wts 字段
  // 按照 key 重排参数
  const query = Object.keys(params)
    .sort()
    .map((key) => {
      // 过滤 value 中的 "!'()*" 字符
      const value = params[key].toString().replace(chr_filter, '')
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .join('&')

  const wbi_sign = Md5.hashStr(query + mixin_key) // 计算 w_rid

  // A URL query string including the original parameters
  // plus `wts` (timestamp) and `w_rid` (signature).
  return `${query}&w_rid=${wbi_sign}`
}
