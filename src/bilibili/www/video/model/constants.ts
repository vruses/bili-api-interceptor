import { toResult } from '@/constants/utils'

/**
 * user's relation to current video uploader
 */
const relationToUploader = {
  relation: {
    mid: 0,
    attribute: 0,
    mtime: 0,
    tag: null,
    special: 0,
  },
  be_relation: {
    mid: 0,
    attribute: 0,
    mtime: 0,
    tag: null,
    special: 0,
  },
}
/**
 * result of user's relation to current video uploader
 */
export const relationResult = toResult(relationToUploader)
