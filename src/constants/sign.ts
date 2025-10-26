import { useWebKey } from '@/utils/web-key'

// Normally, getting data from localStorage is sufficient,
// I doubt anyone clears localStorage manually.
// GenWebTicket will be automatically triggered，
// but the more async requests, the less overall speed.
const web_key_urls = {
  img_key_url: localStorage.getItem('wbi_img_url') ?? '',
  sub_key_url: localStorage.getItem('wbi_sub_url') ?? '',
}

export const img_key = useWebKey(web_key_urls.img_key_url)
export const sub_key = useWebKey(web_key_urls.img_key_url)
