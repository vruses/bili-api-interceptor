/**
 * 使用 XOR 加密解密字幕 URI 的 Path 部分
 *
 * 一个完整的字幕 URI = Domain + Path + AuthKey
 *
 * 通过对 Path 部分进行加密，以保证与前端解密兼容
 * @see https://s1.hdslb.com/bfs/static/player/main/core.cac4d56e.js
 */
function useSubtitleCrypt() {
  const keyCandidates = [
    ['nP](wOFRvU.+<fjS{jn-!$D|Dz&",zT`', '=CFxYRn{.y|uVyO$uh&sikph?N.ilF/`'],
    ['Bn"q~|albg@]Go~ACgyDvKnd+)_D}^&J?', "Cu~L!xs~f^&r@'vh=q]q{eeng*sEg^kp#J"],
  ]
  function xorDecrypt(cipherText: string, key: string) {
    let plainText = ''
    for (let index = 0; index < cipherText.length; index++) {
      const cipherCharCode = cipherText.charCodeAt(index)
      const keyCharCode = key.charCodeAt(index % key.length)
      plainText += String.fromCharCode(cipherCharCode ^ keyCharCode)
    }
    return plainText
  }

  function xorEncrypt(plainText: string, key: string) {
    let result = ''
    for (let i = 0; i < plainText.length; i++) {
      result += String.fromCharCode(plainText.charCodeAt(i) ^ key.charCodeAt(i % key.length))
    }
    return result
  }
  /**
   * 解密字幕数据
   * @param encodedPath - 加密后的 Path 部分
   * @returns 解密后的字幕 URI Path，如果失败返回 null
   */
  function decryptSubtitle(encodedPath: string) {
    for (const keyPair of keyCandidates) {
      const expectedPrefix = keyPair[0]
      const keySeed = keyPair[1]

      const fullKey = keySeed + 'bilibili'
      const decryptedText = xorDecrypt(decodeURIComponent(encodedPath), fullKey)
      if (decryptedText.startsWith(expectedPrefix)) return decryptedText.split(expectedPrefix)[1]
    }
    return null
  }

  /**
   * 加密字幕 URI 的 Path 部分
   *
   * @param plainText - 原始字幕 Path 明文
   * @returns 加密后的字幕 Path，可用于拼接完整 URI
   */
  function encryptSubtitle(plainText: string) {
    // 任意一个 keyPair 都可以
    const keyPair = keyCandidates[0]
    const expectedPrefix = keyPair[0]
    const keySeed = keyPair[1]
    const fullKey = keySeed + 'bilibili'
    return encodeURIComponent(xorEncrypt(expectedPrefix + plainText, fullKey))
  }

  return {
    /** 解密字幕 */
    decryptSubtitle,
    /** 加密字幕 */
    encryptSubtitle,
  }
}

const { decryptSubtitle, encryptSubtitle } = useSubtitleCrypt()
/**
 * 字幕 URL 加密适配
 *
 * @param url - 原始字幕完整 URL
 * @returns 新的字幕 URL
 */
function getEncryptSubtitle(url: string) {
  const domain = '//subtitle.bilibili.com'
  // 如果 URL 不包含协议，添加 http: 前缀，需要支持 http(s)://www.xxx.com 和 //www.xxx.com 两种格式
  const fullUrl = url.startsWith('http') || url.startsWith('https') ? url : 'http:' + url
  const parsed = new URL(fullUrl)
  const path = parsed.pathname
  const authKey = parsed.searchParams.get('auth_key')
  return `${domain}/${encryptSubtitle(path)}?auth_key=${authKey}`
}

export { decryptSubtitle, encryptSubtitle, getEncryptSubtitle }
