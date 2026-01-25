import type { RequestFn } from '@/utils/ajax'
import SPACE from './model/constants'

/**
 * @description 空间个人信息
 */
export const useMyInfo: RequestFn<'fetch'> = (request) => {
  if (!request.url.includes('x/space/v2/myinfo')) return

  request.response = (res) => {
    res.json = SPACE.USER_INFO
  }
}
