import { historyList, mockUserInfo, web_key_urls } from "@/constants";
import { useWebKey } from "@/utils/web-key";
import ajaxHooker from "@/utils/ajax/ajax-hooker";
import type { FetchResponse, XhrResponse } from "@/utils/ajax/ajax-hooker";
import type { HistoryListRes, PlayerUserInfo } from "@/types/response";
import { encWbi } from "@/utils/wbi-sign";

const runScript = () => {
  const img_key = useWebKey(web_key_urls.img_key_url);
  const sub_key = useWebKey(web_key_urls.sub_key_url);

  ajaxHooker.hook((request) => {
    // 伪造登录响应数据
    if (request.url.includes("/x/web-interface/nav")) {
      if (request.type === "xhr") {
        request.response = (res: XhrResponse) => {
          res.responseText = JSON.stringify(mockUserInfo);
        };
      }
      // 移动端登录
      if (request.type === "fetch") {
        request.response = (res: FetchResponse) => {
          res.json = mockUserInfo;
        };
      }
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
        if (!res?.responseText) return;
        const playerResponse: PlayerUserInfo = JSON.parse(res.responseText);
        playerResponse.data.login_mid = Math.floor(Math.random() * 100000);
        playerResponse.data.level_info.current_level = 6;
        res.responseText = JSON.stringify(playerResponse);
      };
    }
    // 历史观看记录
    if (request.url.includes("/x/web-interface/history/cursor")) {
      request.response = (res: FetchResponse) => {
        if (!res?.json) return;
        const historyListRes: HistoryListRes = historyList;
        res.json = historyListRes;
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
      // 还原window.__playinfo__对象
      request.response = (res: XhrResponse) => {
        Object.defineProperty(window, "__playinfo__", {
          get: function () {
            return JSON.parse(res?.responseText ?? "{}");
          },
          configurable: true,
        });
      };
    }
  });
};
export default runScript;
