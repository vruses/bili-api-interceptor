import { mockUserInfo, web_key_urls } from "@/constants";
import { useWebKey } from "@/utils/web-key";

// Prevent the player from retrieving the correct playback information
Object.defineProperty(window, "__playinfo__", {
  get: function () {
    return null;
  },
});
console.log(mockUserInfo);
const img_key = useWebKey(web_key_urls.img_key_url);
const sub_key = useWebKey(web_key_urls.sub_key_url);
console.log(img_key, sub_key);

