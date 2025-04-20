// ==UserScript==
// @name         哔哩免登录看评论+1080p视频+免弹窗
// @namespace    vruses
// @version      1.0
// @description  通过拦截一些特定 Bilibili 接口请求或响应，让你的体验能够像登录用户一样丝滑
// @author       layenh
// @match        *://*.bilibili.com/*
// @homepage     https://github.com/vruses/bili-api-interceptor
// @supportURL   https://github.com/vruses/bili-api-interceptor/issues
// @license      Mit
// @grant        none
// @require      https://update.greasyfork.org/scripts/533087/1572495/WbiSign.js
// @run-at       document-start
// @icon         data:image/jpeg;base64,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
// ==/UserScript==

// Prevent the player from retrieving the correct playback information
Object.defineProperty(window, "__playinfo__", {
  get: function () {
    return null;
  },
});
const mockUserInfo = {
  code: 0,
  message: "0",
  ttl: 1,
  data: {
    isLogin: true,
    email_verified: 1,
    face: "https://i0.hdslb.com/bfs/face/0c84b9f4ad546d3f20324809d45fc439a2a8ddab.jpg",
    face_nft: 0,
    face_nft_type: 0,
    level_info: {
      current_level: 6,
      current_min: 28800,
      current_exp: 29050,
      next_exp: "--",
    },
    mid: 3493281916783362,
    mobile_verified: 1,
    money: 10000000000000,
    moral: 70,
    official: {
      role: 0,
      title: "",
      desc: "",
      type: -1,
    },
    officialVerify: {
      type: -1,
      desc: "",
    },
    pendant: {
      pid: 0,
      name: "",
      image: "",
      expire: 0,
      image_enhance: "",
      image_enhance_frame: "",
      n_pid: 0,
    },
    scores: 0,
    uname: "bilibili",
    vipDueDate: 1674748800000,
    vipStatus: 0,
    vipType: 1,
    vip_pay_type: 0,
    vip_theme_type: 0,
    vip_label: {
      path: "",
      text: "",
      label_theme: "",
      text_color: "",
      bg_style: 0,
      bg_color: "",
      border_color: "",
      use_img_label: true,
      img_label_uri_hans: "",
      img_label_uri_hant: "",
      img_label_uri_hans_static:
        "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
      img_label_uri_hant_static:
        "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
    },
    vip_avatar_subscript: 0,
    vip_nickname_color: "",
    vip: {
      type: 1,
      status: 0,
      due_date: 1674748800000,
      vip_pay_type: 0,
      theme_type: 0,
      label: {
        path: "",
        text: "",
        label_theme: "",
        text_color: "",
        bg_style: 0,
        bg_color: "",
        border_color: "",
        use_img_label: true,
        img_label_uri_hans: "",
        img_label_uri_hant: "",
        img_label_uri_hans_static:
          "https://i0.hdslb.com/bfs/vip/d7b702ef65a976b20ed854cbd04cb9e27341bb79.png",
        img_label_uri_hant_static:
          "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/KJunwh19T5.png",
      },
      avatar_subscript: 0,
      nickname_color: "",
      role: 0,
      avatar_subscript_url: "",
      tv_vip_status: 0,
      tv_vip_pay_type: 0,
      tv_due_date: 0,
      avatar_icon: {
        icon_resource: {},
      },
    },
    wallet: {
      mid: 700756870,
      bcoin_balance: 0,
      coupon_balance: 0,
      coupon_due_time: 0,
    },
    has_shop: false,
    shop_url: "",
    answer_status: 0,
    is_senior_member: 1,
    wbi_img: {
      img_url:
        "https://i0.hdslb.com/bfs/wbi/7cd084941338484aae1ad9425b84077c.png",
      sub_url:
        "https://i0.hdslb.com/bfs/wbi/4932caff0ff746eab6f01bf08b70ac45.png",
    },
    is_jury: false,
    name_render: null,
  },
};
// Normally, getting data from localStorage is sufficient,
// I doubt anyone clears localStorage manually.
// GenWebTicket will be automatically triggered，
// but the more async requests, the less overall speed.
const web_key_urls = {
  img_key_url: localStorage.getItem("wbi_img_url") || "",
  sub_key_url: localStorage.getItem("wbi_sub_url") || "",
};
/**
 * @param {string}
 * */
const getWebKey = function (str) {
  return str.slice(str.lastIndexOf("/") + 1, str.lastIndexOf("."));
};
const img_key = getWebKey(web_key_urls.img_key_url);
const sub_key = getWebKey(web_key_urls.sub_key_url);
(function () {
  "use strict";
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (...args) {
    this._interceptUrl = args[1];
    // inject custom qsParams to fetch higher-quality CDN video
    if (this._interceptUrl.includes("api.bilibili.com/x/player/wbi/playurl")) {
      // Remove w_rid & wts, set try_look=1 and qn=80, then re-WbiSign
      const qsParams = Object.fromEntries(
        new URLSearchParams(args[1].split(/\?|&w_rid/)[1]).entries()
      );
      Reflect.set(qsParams, "qn", 80); //qualityNumber->1080p
      Reflect.set(qsParams, "try_look", 1);
      const query = new WbiSign().encWbi(qsParams, img_key, sub_key);
      args[1] = "//api.bilibili.com/x/player/wbi/playurl?" + query;
    }
    return originalOpen.apply(this, args);
  };

  XMLHttpRequest.prototype.send = function (body) {
    const xhr = this;

    const customOnReadyStateChange = function () {
      if (xhr.readyState === 4) {
        if (
          xhr._interceptUrl.includes("api.bilibili.com/x/web-interface/nav")
        ) {
          const resJson = JSON.parse(xhr.responseText);
          const wbi_img = resJson.data.wbi_img;
          Object.defineProperty(xhr, "responseText", {
            get: function () {
              if (resJson?.data?.isLogin === false) {
                // replace true wbi_key
                mockUserInfo.data.wbi_img = wbi_img;
                return JSON.stringify(mockUserInfo);
              }
              return JSON.stringify(resJson);
            },
          });
        } else if (
          xhr._interceptUrl.includes("api.bilibili.com/x/player/wbi/v2")
        ) {
          const resJson = JSON.parse(xhr.responseText);
          resJson.data.login_mid = Math.floor(Math.random() * 100000);
          Object.defineProperty(xhr, "responseText", {
            get: function () {
              return JSON.stringify(resJson);
            },
          });
        } else if (
          xhr._interceptUrl.includes("api.bilibili.com/x/player/wbi/playurl")
        ) {
          // request 1080p
          setTimeout(() => {
            const defaultQuality =
              JSON.parse(localStorage.bpx_player_profile).media.quality || 80;
            window.player && window.player.requestQuality(defaultQuality, null);
          }, 1000);
        }
      }

      if (xhr._originalOnReadyStateChange) {
        xhr._originalOnReadyStateChange.apply(this, arguments);
      }
    };

    if (!xhr._isHooked) {
      xhr._originalOnReadyStateChange = xhr.onreadystatechange;
      xhr.onreadystatechange = customOnReadyStateChange;
      xhr._isHooked = true;
    }

    return originalSend.apply(this, arguments);
  };
})();
//解除未登录用户查看评论数量限制
(function () {
  "use strict";
  const originalFetch = window.fetch;

  window.fetch = function (input, init = {}) {
    let url = "";

    // 处理 input 可能是字符串或 Request 对象
    if (typeof input === "string") {
      url = input;
    } else if (input instanceof Request) {
      url = input.url;
    }

    // 拦截获取视频评论、评论的评论列表请求
    if (
      url.includes("x/v2/reply/wbi/main") ||
      url.includes("x/v2/reply/reply")
    ) {
      init = Object.assign({}, init, { credentials: "omit" });
    }

    return originalFetch.call(this, input, init);
  };
})();
