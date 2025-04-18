// ==UserScript==
// @name         哔哩哔哩免登录看评论看视频免弹窗
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  拦截指定 Bilibili 接口并返回固定对象
// @author       layenh
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
// Todo:改回wbi
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
(function () {
  "use strict";
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (
    method,
    url,
    async,
    user,
    password
  ) {
    this._interceptUrl = url;
    return originalOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function (body) {
    const xhr = this;

    const customOnReadyStateChange = function () {
      if (xhr.readyState === 4) {
        if (
          xhr._interceptUrl.includes("api.bilibili.com/x/web-interface/nav")
        ) {
          const resJson = JSON.parse(xhr.responseText);
          Object.defineProperty(xhr, "responseText", {
            get: function () {
              if (parsed?.data?.isLogin === false) {
                return JSON.stringify(mockUserInfo);
              }
              return JSON.stringify(resJson);
            },
          });
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
