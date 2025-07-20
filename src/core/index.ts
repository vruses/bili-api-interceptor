import { mockUserInfo, web_key_urls } from "@/constants";
import { useWebKey } from "@/utils/web-key";
import ajaxHooker from "@/utils/ajax/ajax-hooker";
import type { XhrResponse } from "@/utils/ajax/ajax-hooker";
import { PlayerUserInfo } from "@/types/response";
import { encWbi } from "@/utils/wbi-sign";


const runApp = () => {
  const img_key = useWebKey(web_key_urls.img_key_url);
  const sub_key = useWebKey(web_key_urls.sub_key_url);

  ajaxHooker.hook((request) => {
    // 伪造登录响应数据
    if (request.url.includes("/x/web-interface/nav")) {
      // 取消原请求并伪造一个成功响应
      request.response = (res: XhrResponse) => {
        res.responseText = JSON.stringify(mockUserInfo);
      };
    }
    // 拦截获取视频评论、评论的评论列表请求，解除评论获取的数量限制
    if (
      request.url.includes("/x/v2/reply/wbi/main") ||
      request.url.includes("/x/v2/reply/reply")
    ) {
      request.credentials = "omit";
    }
    //播放器请求的用户信息，需要返回登录状态
    if (request.url.includes("/x/player/wbi/v2")) {
      request.response = (res: XhrResponse) => {
        try {
          if (!res.responseText) return;
          const playerResponse: PlayerUserInfo = JSON.parse(res.responseText);
          playerResponse.data.login_mid = Math.floor(Math.random() * 100000);
          res.responseText = JSON.stringify(playerResponse);
        } catch (error) {
          console.log(error);
        }
      };
    }
    // inject custom qsParams to fetch higher-quality CDN video
    if (request.url.includes("api.bilibili.com/x/player/wbi/playurl")) {
      // Remove w_rid & wts, set try_look=1 and qn=80, then re-WbiSign
      const qsParams = Object.fromEntries(
        new URLSearchParams(request.url.split(/\?|&w_rid/)[1]).entries()
      );
      Reflect.set(qsParams, "qn", 80); //qualityNumber->1080p
      Reflect.set(qsParams, "try_look", 1);
      const query = encWbi(qsParams, img_key, sub_key);
      request.url = "//api.bilibili.com/x/player/wbi/playurl?" + query;
    }
    if (request.url.includes("x/player/wbi/playurl")) {
      // request 1080p
      setTimeout(() => {
        const defaultQuality =
          JSON.parse(localStorage.bpx_player_profile).media.quality || 80;
        window.player && window.player.requestQuality(defaultQuality, null);
      }, 3000);
    }
  });
};
export default runApp;
