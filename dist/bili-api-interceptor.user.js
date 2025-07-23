// ==UserScript==
// @name         哔哩免登录看评论+1080p视频+免弹窗
// @namespace    vruses
// @version      1.2.2
// @author       <vurses@qq.com>
// @description  通过拦截一些特定 Bilibili 接口请求或响应，让你的体验能够像登录用户一样丝滑
// @license      MIT
// @icon         data:image/jpeg;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAAF6wAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAABAA0ABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAADwAAAA8AAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEAYIDBAAABfNtZGF0EgAKChgd+/vYICGg0IAy2gtEgACiiihQtIDqrkvPF1l+b90DLzEPNo7jbm8MUMGGUuKslo1owZD1WKBRgQ/2f406AlN00FgeyTrTTgl2N3L2WtrdDuFrTP1h/Nj/y8vB30i3CyIM1dTrmSCUOgVaFhBiXR2FxcZJOI9yBw/GBIZZ5KdPQafrWOAFWYuhbVmQSBwGnqsRBA76x+yeYrO4V2yLQ6OnFqpyZ9mIuhOlS/TePUfELDQ55lN1pmnFx58An5dtTY6L9N7ew5/j4LZnle2loske4Sld/QT6tT09zRcfCjsLSgX6J17LA4EpWo7Fd8ZA7+4FTZ5kICFXPMkitgbgMmPX9FksaV4I3oRT0gc5P/OQAwTb80beqnROrknzLfvadRXOc3jL5XXFt9xrGs5SyYmSqsvJJhGYhn+DeFM2qs1eh5iryQJVkIxmgRBn5HL/3CQfVPjCEw8x9jIduTsWlhUXXGOZFxIN6dFW1x+gLex+dFcUxA62vGuVLSqynO5qUrRIWlDowhE0CvocZsAm6m+bESQ9lx2myX665hAXO8FQtYXXVjUtmFyR5cB56kzFS50iigWSMzYFpqQUDI0ubvn891dbuwf0Env9w7tMiWbT7rBdkLNb/X/l6Q/zMzOlpTSyKn0GklbBr5yismlx5IWFn/p5+idowJyI7yk14X/Q3sq9ypkVrkTerhgjYf7gIAcdSsmJOHvwquxc222exmrpl5CubUT+tVh3S+j3XptKG+gdgXXGeTiwcpqq3aydRD3IEz1Fer514wFvs1iu2s4A1Bjb9vNBf3p/zvsyoAQGhwWunOZGJcEV2BgOZXb9HQsqUP/S0UV4yeWxZOLmO8OExFk+QTe1ieKha5J9+G9xX1uX3k5GgLchVEKjSVR9KVYftuY4ipGHFxlTtwN9igRt/kNJnmXUBXSC/zONSU18J2o8cVBETIGNpzwzetj9XG0Y0sXhjmUz95zo1h6Gqm91lIyYau6f8zEBRucpsiY4rESvn8QtCGUuzd2MmqVpSjI6vmS6DBqp8Te6lwdT40tTJiYI7AVcdZIMuAMW60/UqXwnwv490LrLg1lrrgK0LSkMjlTCEIVr3dO14WtF1aUEKFKklL7PPVouB+IGsMRE958I4TITUbZ4s2CYKn9C+JDog+MszzWF9NZ0ZYIjFgML2a1ma8IlGPXEWOGbEbWt/DU6NOwVQZ3GFXQs8zvF2QE+2+mZEuB6XFvg5STbTRaWSNkZDZAK79Hk5UH/t2/9BhJr3q2IuYFqDw6To2Clf0rA3dSg4ebYAi4JKnJrz/NTJ/eWI35B+Z312mZuGr+EwS7pvQyJiIa2rWdmfeFoSKcxtLe/eHH2ZBq6Ye/+3/dDhsBEMg1JZrwEGvTs3hf0qNZKdaaLpEdRx2gmyPgtnesn4BfNXD0oko7NbxtjsRtk6nQAKCl/Np5DPLz2FHs52M+JlBPd12AES58muiDS6lWRNq4f9nnvFL2ShZQCc9HooGBfCpOFcpugDer0/kyHJJTfja8rOJobIu/BTUd17QOqEnnULMa2GZlo/KYjzPAvVtle9AZC3DCU4Z1JHIXIR8TWrTe9a7HA8tccL+0V1oFZQUHbygW2oVqLnVGxJOoROhQJ8/OMD/R/j8gOceE+M29bxFRFhYMwsPUrm79cj/sOQ6hhVCEClGfK+Of3ILxjlwfwN2O5UF28QIYG4DDFIpaH2jvSv4EDgQnbCvV8Fi9DTk5BW47JBaZv40VBrBoGEoZnJA0VokU2hnT6cuGhW8PuDc+AWNocs29yOBfvxmP/BVx35a85olXPGeQWzAgPub5F2OPrv5FNP4nbeuDC/rMdhtRDL+5q7EPBy6mHCLeqq7huUV9QIwmELMLKLo2btWstDirvPzfxSCPhacfJjTi4aXc8/e5sR//+KJusEYHymIEhSKEiPqT+WnBTgB1m747UE1HuldvkPt8ap87oSEALbQhf1wiaLRYDSxxXFt/bh/Ozu02nZN2Sk3eJ20LA9w3cUZpk
// @homepage     https://github.com/vruses/bili-api-interceptor
// @supportURL   https://github.com/vruses/bili-api-interceptor/issues
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  const historyList = {
    code: 0,
    message: "0",
    ttl: 1,
    data: {
      cursor: {
        max: 1,
        view_at: 0,
        business: "archive",
        ps: 20
      },
      tab: [
        {
          type: "archive",
          name: "视频"
        },
        {
          type: "live",
          name: "直播"
        },
        {
          type: "article",
          name: "专栏"
        }
      ],
      list: []
    }
  };
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
        next_exp: "--"
      },
      mid: 3493281916783362,
      mobile_verified: 1,
      money: 9999.99,
      moral: 70,
      official: {
        role: 0,
        title: "",
        desc: "",
        type: -1
      },
      officialVerify: {
        type: -1,
        desc: ""
      },
      pendant: {
        pid: 0,
        name: "",
        image: "",
        expire: 0,
        image_enhance: "",
        image_enhance_frame: "",
        n_pid: 0
      },
      scores: 0,
      uname: "bilibili",
      vipDueDate: 16747488e5,
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
        img_label_uri_hans_static: "",
        img_label_uri_hant_static: ""
      },
      vip_avatar_subscript: 0,
      vip_nickname_color: "",
      vip: {
        type: 1,
        status: 0,
        due_date: 16747488e5,
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
          img_label_uri_hans_static: "",
          img_label_uri_hant_static: ""
        },
        avatar_subscript: 0,
        nickname_color: "",
        role: 0,
        avatar_subscript_url: "",
        tv_vip_status: 0,
        tv_vip_pay_type: 0,
        tv_due_date: 0,
        avatar_icon: {
          icon_resource: {}
        }
      },
      wallet: {
        mid: 700756870,
        bcoin_balance: 0,
        coupon_balance: 0,
        coupon_due_time: 0
      },
      has_shop: false,
      shop_url: "",
      answer_status: 0,
      is_senior_member: 1,
      wbi_img: {
        img_url: "",
        sub_url: ""
      },
      is_jury: false,
      name_render: null
    }
  };
  const web_key_urls = {
    img_key_url: localStorage.getItem("wbi_img_url") ?? "",
    sub_key_url: localStorage.getItem("wbi_sub_url") ?? ""
  };
  const useWebKey = (key_url) => {
    return key_url.slice(key_url.lastIndexOf("/") + 1, key_url.lastIndexOf("."));
  };
  // @license      GNU LGPL-3.0
  var ajaxHooker = function() {
    const version = "1.4.7";
    const hookInst = {
      hookFns: [],
      filters: []
    };
    const win = window.unsafeWindow || document.defaultView || window;
    let winAh = win.__ajaxHooker;
    const resProto = win.Response.prototype;
    const xhrResponses = ["response", "responseText", "responseXML"];
    const fetchResponses = ["arrayBuffer", "blob", "formData", "json", "text"];
    const xhrExtraProps = ["responseType", "timeout", "withCredentials"];
    const fetchExtraProps = [
      "cache",
      "credentials",
      "integrity",
      "keepalive",
      "mode",
      "priority",
      "redirect",
      "referrer",
      "referrerPolicy",
      "signal"
    ];
    const xhrAsyncEvents = ["readystatechange", "load", "loadend"];
    const getType = {}.toString.call.bind({}.toString);
    const getDescriptor = Object.getOwnPropertyDescriptor.bind(Object);
    const emptyFn = () => {
    };
    const errorFn = (e) => console.error(e);
    function isThenable(obj) {
      return obj && ["object", "function"].includes(typeof obj) && typeof obj.then === "function";
    }
    function catchError(fn, ...args) {
      try {
        const result = fn(...args);
        if (isThenable(result)) return result.then(null, errorFn);
        return result;
      } catch (err) {
        console.error(err);
      }
    }
    function defineProp(obj, prop, getter, setter) {
      Object.defineProperty(obj, prop, {
        configurable: true,
        enumerable: true,
        get: getter,
        set: setter
      });
    }
    function readonly(obj, prop, value = obj[prop]) {
      defineProp(obj, prop, () => value, emptyFn);
    }
    function writable(obj, prop, value = obj[prop]) {
      Object.defineProperty(obj, prop, {
        configurable: true,
        enumerable: true,
        writable: true,
        value
      });
    }
    function parseHeaders(obj) {
      const headers = {};
      switch (getType(obj)) {
        case "[object String]":
          for (const line of obj.trim().split(/[\r\n]+/)) {
            const [header, value] = line.split(new RegExp("(?<=^[^:]+)\\s*:\\s*"));
            if (!value) continue;
            const lheader = header.toLowerCase();
            headers[lheader] = lheader in headers ? `${headers[lheader]}, ${value}` : value;
          }
          break;
        case "[object Headers]":
          for (const [key, val] of obj) {
            headers[key] = val;
          }
          break;
        case "[object Object]":
          return { ...obj };
      }
      return headers;
    }
    function stopImmediatePropagation() {
      this.ajaxHooker_isStopped = true;
    }
    class SyncThenable {
      then(fn) {
        fn && fn();
        return new SyncThenable();
      }
    }
    class AHRequest {
      constructor(request) {
        this.request = request;
        this.requestClone = { ...this.request };
      }
      _recoverRequestKey(key) {
        if (key in this.requestClone) this.request[key] = this.requestClone[key];
        else delete this.request[key];
      }
      shouldFilter(filters) {
        const { type, url, method, async } = this.request;
        return filters.length && !filters.find((obj) => {
          switch (true) {
            case (obj.type && obj.type !== type):
            case (getType(obj.url) === "[object String]" && !url.includes(obj.url)):
            case (getType(obj.url) === "[object RegExp]" && !obj.url.test(url)):
            case (obj.method && obj.method.toUpperCase() !== method.toUpperCase()):
            case ("async" in obj && obj.async !== async):
              return false;
          }
          return true;
        });
      }
      waitForRequestKeys() {
        if (!this.request.async) {
          win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
            if (this.shouldFilter(filters)) return;
            hookFns.forEach((fn) => {
              if (getType(fn) === "[object Function]")
                catchError(fn, this.request);
            });
            for (const key in this.request) {
              if (isThenable(this.request[key])) this._recoverRequestKey(key);
            }
          });
          return new SyncThenable();
        }
        const promises = [];
        const ignoreKeys = /* @__PURE__ */ new Set(["type", "async", "response"]);
        win.__ajaxHooker.hookInsts.forEach(({ hookFns, filters }) => {
          if (this.shouldFilter(filters)) return;
          promises.push(
            Promise.all(hookFns.map((fn) => catchError(fn, this.request))).then(
              () => {
                const requestKeys = [];
                for (const key in this.request)
                  !ignoreKeys.has(key) && requestKeys.push(key);
                return Promise.all(
                  requestKeys.map(
                    (key) => Promise.resolve(this.request[key]).then(
                      (val) => this.request[key] = val,
                      () => this._recoverRequestKey(key)
                    )
                  )
                );
              }
            )
          );
        });
        return Promise.all(promises);
      }
      waitForResponseKeys(response) {
        const responseKeys = this.request.type === "xhr" ? xhrResponses : fetchResponses;
        if (!this.request.async) {
          if (getType(this.request.response) === "[object Function]") {
            catchError(this.request.response, response);
            responseKeys.forEach((key) => {
              if ("get" in getDescriptor(response, key) || isThenable(response[key])) {
                delete response[key];
              }
            });
          }
          return new SyncThenable();
        }
        return Promise.resolve(catchError(this.request.response, response)).then(
          () => Promise.all(
            responseKeys.map((key) => {
              const descriptor = getDescriptor(response, key);
              if (descriptor && "value" in descriptor) {
                return Promise.resolve(descriptor.value).then(
                  (val) => response[key] = val,
                  () => delete response[key]
                );
              } else {
                delete response[key];
              }
            })
          )
        );
      }
    }
    const proxyHandler = {
      get(target, prop) {
        const descriptor = getDescriptor(target, prop);
        if (descriptor && !descriptor.configurable && !descriptor.writable && !descriptor.get)
          return target[prop];
        const ah = target.__ajaxHooker;
        if (ah && ah.proxyProps) {
          if (prop in ah.proxyProps) {
            const pDescriptor = ah.proxyProps[prop];
            if ("get" in pDescriptor) return pDescriptor.get();
            if (typeof pDescriptor.value === "function")
              return pDescriptor.value.bind(ah);
            return pDescriptor.value;
          }
          if (typeof target[prop] === "function")
            return target[prop].bind(target);
        }
        return target[prop];
      },
      set(target, prop, value) {
        const descriptor = getDescriptor(target, prop);
        if (descriptor && !descriptor.configurable && !descriptor.writable && !descriptor.set)
          return true;
        const ah = target.__ajaxHooker;
        if (ah && ah.proxyProps && prop in ah.proxyProps) {
          const pDescriptor = ah.proxyProps[prop];
          pDescriptor.set ? pDescriptor.set(value) : pDescriptor.value = value;
        } else {
          target[prop] = value;
        }
        return true;
      }
    };
    class XhrHooker {
      constructor(xhr) {
        const ah = this;
        Object.assign(ah, {
          originalXhr: xhr,
          proxyXhr: new Proxy(xhr, proxyHandler),
          resThenable: new SyncThenable(),
          proxyProps: {},
          proxyEvents: {}
        });
        xhr.addEventListener("readystatechange", (e) => {
          if (ah.proxyXhr.readyState === 4 && ah.request && typeof ah.request.response === "function") {
            const response = {
              finalUrl: ah.proxyXhr.responseURL,
              status: ah.proxyXhr.status,
              responseHeaders: parseHeaders(ah.proxyXhr.getAllResponseHeaders())
            };
            const tempValues = {};
            for (const key of xhrResponses) {
              try {
                tempValues[key] = ah.originalXhr[key];
              } catch (err) {
              }
              defineProp(
                response,
                key,
                () => {
                  return response[key] = tempValues[key];
                },
                (val) => {
                  delete response[key];
                  response[key] = val;
                }
              );
            }
            ah.resThenable = new AHRequest(ah.request).waitForResponseKeys(response).then(() => {
              for (const key of xhrResponses) {
                ah.proxyProps[key] = {
                  get: () => {
                    if (!(key in response)) response[key] = tempValues[key];
                    return response[key];
                  }
                };
              }
            });
          }
          ah.dispatchEvent(e);
        });
        xhr.addEventListener("load", (e) => ah.dispatchEvent(e));
        xhr.addEventListener("loadend", (e) => ah.dispatchEvent(e));
        for (const evt of xhrAsyncEvents) {
          const onEvt = "on" + evt;
          ah.proxyProps[onEvt] = {
            get: () => ah.proxyEvents[onEvt] || null,
            set: (val) => ah.addEvent(onEvt, val)
          };
        }
        for (const method of [
          "setRequestHeader",
          "addEventListener",
          "removeEventListener",
          "open",
          "send"
        ]) {
          ah.proxyProps[method] = { value: ah[method] };
        }
      }
      toJSON() {
      }
      // Converting circular structure to JSON
      addEvent(type, event) {
        if (type.startsWith("on")) {
          this.proxyEvents[type] = typeof event === "function" ? event : null;
        } else {
          if (typeof event === "object" && event !== null)
            event = event.handleEvent;
          if (typeof event !== "function") return;
          this.proxyEvents[type] = this.proxyEvents[type] || /* @__PURE__ */ new Set();
          this.proxyEvents[type].add(event);
        }
      }
      removeEvent(type, event) {
        if (type.startsWith("on")) {
          this.proxyEvents[type] = null;
        } else {
          if (typeof event === "object" && event !== null)
            event = event.handleEvent;
          this.proxyEvents[type] && this.proxyEvents[type].delete(event);
        }
      }
      dispatchEvent(e) {
        e.stopImmediatePropagation = stopImmediatePropagation;
        defineProp(e, "target", () => this.proxyXhr);
        defineProp(e, "currentTarget", () => this.proxyXhr);
        defineProp(e, "srcElement", () => this.proxyXhr);
        this.proxyEvents[e.type] && this.proxyEvents[e.type].forEach((fn) => {
          this.resThenable.then(
            () => !e.ajaxHooker_isStopped && fn.call(this.proxyXhr, e)
          );
        });
        if (e.ajaxHooker_isStopped) return;
        const onEvent = this.proxyEvents["on" + e.type];
        onEvent && this.resThenable.then(onEvent.bind(this.proxyXhr, e));
      }
      setRequestHeader(header, value) {
        this.originalXhr.setRequestHeader(header, value);
        if (!this.request) return;
        const headers = this.request.headers;
        headers[header] = header in headers ? `${headers[header]}, ${value}` : value;
      }
      addEventListener(...args) {
        if (xhrAsyncEvents.includes(args[0])) {
          this.addEvent(args[0], args[1]);
        } else {
          this.originalXhr.addEventListener(...args);
        }
      }
      removeEventListener(...args) {
        if (xhrAsyncEvents.includes(args[0])) {
          this.removeEvent(args[0], args[1]);
        } else {
          this.originalXhr.removeEventListener(...args);
        }
      }
      open(method, url, async = true, ...args) {
        this.request = {
          type: "xhr",
          url: url.toString(),
          method: method.toUpperCase(),
          abort: false,
          headers: {},
          data: null,
          response: null,
          async: !!async
        };
        this.openArgs = args;
        this.resThenable = new SyncThenable();
        [
          "responseURL",
          "readyState",
          "status",
          "statusText",
          ...xhrResponses
        ].forEach((key) => {
          delete this.proxyProps[key];
        });
        return this.originalXhr.open(method, url, async, ...args);
      }
      send(data) {
        const ah = this;
        const xhr = ah.originalXhr;
        const request = ah.request;
        if (!request) return xhr.send(data);
        request.data = data;
        new AHRequest(request).waitForRequestKeys().then(() => {
          if (request.abort) {
            if (typeof request.response === "function") {
              Object.assign(ah.proxyProps, {
                responseURL: { value: request.url },
                readyState: { value: 4 },
                status: { value: 200 },
                statusText: { value: "OK" }
              });
              xhrAsyncEvents.forEach((evt) => xhr.dispatchEvent(new Event(evt)));
            }
          } else {
            xhr.open(request.method, request.url, request.async, ...ah.openArgs);
            for (const header in request.headers) {
              xhr.setRequestHeader(header, request.headers[header]);
            }
            for (const prop of xhrExtraProps) {
              if (prop in request) xhr[prop] = request[prop];
            }
            xhr.send(request.data);
          }
        });
      }
    }
    function fakeXHR() {
      const xhr = new winAh.realXHR();
      if ("__ajaxHooker" in xhr)
        console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
      xhr.__ajaxHooker = new XhrHooker(xhr);
      return xhr.__ajaxHooker.proxyXhr;
    }
    fakeXHR.prototype = win.XMLHttpRequest.prototype;
    Object.keys(win.XMLHttpRequest).forEach(
      (key) => fakeXHR[key] = win.XMLHttpRequest[key]
    );
    function fakeFetch(url, options = {}) {
      if (!url) return winAh.realFetch.call(win, url, options);
      return new Promise(async (resolve, reject) => {
        const init = {};
        if (getType(url) === "[object Request]") {
          init.method = url.method;
          init.headers = url.headers;
          if (url.body) init.body = await url.arrayBuffer();
          for (const prop of fetchExtraProps) init[prop] = url[prop];
          url = url.url;
        }
        url = url.toString();
        Object.assign(init, options);
        init.method = init.method || "GET";
        init.headers = init.headers || {};
        const request = {
          type: "fetch",
          url,
          method: init.method.toUpperCase(),
          abort: false,
          headers: parseHeaders(init.headers),
          data: init.body,
          response: null,
          async: true
        };
        const req = new AHRequest(request);
        await req.waitForRequestKeys();
        if (request.abort) {
          if (typeof request.response === "function") {
            const response = {
              finalUrl: request.url,
              status: 200,
              responseHeaders: {}
            };
            await req.waitForResponseKeys(response);
            const key = fetchResponses.find((k) => k in response);
            let val = response[key];
            if (key === "json" && typeof val === "object") {
              val = catchError(JSON.stringify.bind(JSON), val);
            }
            const res = new Response(val, {
              status: 200,
              statusText: "OK"
            });
            defineProp(res, "type", () => "basic");
            defineProp(res, "url", () => request.url);
            resolve(res);
          } else {
            reject(new DOMException("aborted", "AbortError"));
          }
          return;
        }
        init.method = request.method;
        init.headers = request.headers;
        init.body = request.data;
        for (const prop of fetchExtraProps) {
          if (prop in request) init[prop] = request[prop];
        }
        winAh.realFetch.call(win, request.url, init).then((res) => {
          if (typeof request.response === "function") {
            const response = {
              finalUrl: res.url,
              status: res.status,
              responseHeaders: parseHeaders(res.headers)
            };
            fetchResponses.forEach(
              (key) => res[key] = function() {
                if (key in response) return Promise.resolve(response[key]);
                return resProto[key].call(this).then((val) => {
                  response[key] = val;
                  return req.waitForResponseKeys(response).then(() => key in response ? response[key] : val);
                });
              }
            );
          }
          resolve(res);
        }, reject);
      });
    }
    function fakeFetchClone() {
      const descriptors = Object.getOwnPropertyDescriptors(this);
      const res = winAh.realFetchClone.call(this);
      Object.defineProperties(res, descriptors);
      return res;
    }
    winAh = win.__ajaxHooker = winAh || {
      version,
      fakeXHR,
      fakeFetch,
      fakeFetchClone,
      realXHR: win.XMLHttpRequest,
      realFetch: win.fetch,
      realFetchClone: resProto.clone,
      hookInsts: /* @__PURE__ */ new Set()
    };
    if (winAh.version !== version)
      console.warn("检测到不同版本的ajaxHooker，可能发生冲突！");
    win.XMLHttpRequest = winAh.fakeXHR;
    win.fetch = winAh.fakeFetch;
    resProto.clone = winAh.fakeFetchClone;
    winAh.hookInsts.add(hookInst);
    class AHFunction extends Function {
      call(thisArg, ...args) {
        if (thisArg && thisArg.__ajaxHooker && thisArg.__ajaxHooker.proxyXhr === thisArg) {
          thisArg = thisArg.__ajaxHooker.originalXhr;
        }
        return Reflect.apply(this, thisArg, args);
      }
      apply(thisArg, args) {
        if (thisArg && thisArg.__ajaxHooker && thisArg.__ajaxHooker.proxyXhr === thisArg) {
          thisArg = thisArg.__ajaxHooker.originalXhr;
        }
        return Reflect.apply(this, thisArg, args || []);
      }
    }
    function hookSecsdk(csrf) {
      Object.setPrototypeOf(
        csrf.nativeXMLHttpRequestSetRequestHeader,
        AHFunction.prototype
      );
      Object.setPrototypeOf(csrf.nativeXMLHttpRequestOpen, AHFunction.prototype);
      Object.setPrototypeOf(csrf.nativeXMLHttpRequestSend, AHFunction.prototype);
    }
    if (win.secsdk) {
      if (win.secsdk.csrf && win.secsdk.csrf.nativeXMLHttpRequestOpen)
        hookSecsdk(win.secsdk.csrf);
    } else {
      defineProp(win, "secsdk", emptyFn, (secsdk) => {
        delete win.secsdk;
        win.secsdk = secsdk;
        defineProp(secsdk, "csrf", emptyFn, (csrf) => {
          delete secsdk.csrf;
          secsdk.csrf = csrf;
          if (csrf.nativeXMLHttpRequestOpen) hookSecsdk(csrf);
        });
      });
    }
    return {
      hook: (fn) => hookInst.hookFns.push(fn),
      filter: (arr) => {
        if (Array.isArray(arr)) hookInst.filters = arr;
      },
      protect: () => {
        readonly(win, "XMLHttpRequest", winAh.fakeXHR);
        readonly(win, "fetch", winAh.fakeFetch);
        readonly(resProto, "clone", winAh.fakeFetchClone);
      },
      unhook: () => {
        winAh.hookInsts.delete(hookInst);
        if (!winAh.hookInsts.size) {
          writable(win, "XMLHttpRequest", winAh.realXHR);
          writable(win, "fetch", winAh.realFetch);
          writable(resProto, "clone", winAh.realFetchClone);
          delete win.__ajaxHooker;
        }
      }
    };
  }();
  const c = new Int32Array(4);
  const _h = class _h {
    constructor() {
      __publicField(this, "_dataLength", 0);
      __publicField(this, "_bufferLength", 0);
      __publicField(this, "_state", new Int32Array(4));
      __publicField(this, "_buffer", new ArrayBuffer(68));
      __publicField(this, "_buffer8");
      __publicField(this, "_buffer32");
      this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
    }
    static hashStr(i, a = false) {
      return this.onePassHasher.start().appendStr(i).end(a);
    }
    static hashAsciiStr(i, a = false) {
      return this.onePassHasher.start().appendAsciiStr(i).end(a);
    }
    static _hex(i) {
      const a = _h.hexChars, t = _h.hexOut;
      let e, s, r, n;
      for (n = 0; n < 4; n += 1)
        for (s = n * 8, e = i[n], r = 0; r < 8; r += 2)
          t[s + 1 + r] = a.charAt(e & 15), e >>>= 4, t[s + 0 + r] = a.charAt(e & 15), e >>>= 4;
      return t.join("");
    }
    static _md5cycle(i, a) {
      let t = i[0], e = i[1], s = i[2], r = i[3];
      t += (e & s | ~e & r) + a[0] - 680876936 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[1] - 389564586 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[3] - 1044525330 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[4] - 176418897 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[5] + 1200080426 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[7] - 45705983 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[8] + 1770035416 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[9] - 1958414417 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[10] - 42063 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[11] - 1990404162 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & s | ~e & r) + a[12] + 1804603682 | 0, t = (t << 7 | t >>> 25) + e | 0, r += (t & e | ~t & s) + a[13] - 40341101 | 0, r = (r << 12 | r >>> 20) + t | 0, s += (r & t | ~r & e) + a[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + r | 0, e += (s & r | ~s & t) + a[15] + 1236535329 | 0, e = (e << 22 | e >>> 10) + s | 0, t += (e & r | s & ~r) + a[1] - 165796510 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[6] - 1069501632 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[0] - 373897302 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[5] - 701558691 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[10] + 38016083 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[4] - 405537848 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[9] + 568446438 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[14] - 1019803690 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[8] + 1163531501 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e & r | s & ~r) + a[13] - 1444681467 | 0, t = (t << 5 | t >>> 27) + e | 0, r += (t & s | e & ~s) + a[2] - 51403784 | 0, r = (r << 9 | r >>> 23) + t | 0, s += (r & e | t & ~e) + a[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + r | 0, e += (s & t | r & ~t) + a[12] - 1926607734 | 0, e = (e << 20 | e >>> 12) + s | 0, t += (e ^ s ^ r) + a[5] - 378558 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[8] - 2022574463 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[14] - 35309556 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[1] - 1530992060 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[4] + 1272893353 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[10] - 1094730640 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[13] + 681279174 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[0] - 358537222 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[6] + 76029189 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (e ^ s ^ r) + a[9] - 640364487 | 0, t = (t << 4 | t >>> 28) + e | 0, r += (t ^ e ^ s) + a[12] - 421815835 | 0, r = (r << 11 | r >>> 21) + t | 0, s += (r ^ t ^ e) + a[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + r | 0, e += (s ^ r ^ t) + a[2] - 995338651 | 0, e = (e << 23 | e >>> 9) + s | 0, t += (s ^ (e | ~r)) + a[0] - 198630844 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[7] + 1126891415 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[5] - 57434055 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[12] + 1700485571 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[3] - 1894986606 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[1] - 2054922799 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[8] + 1873313359 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[15] - 30611744 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[13] + 1309151649 | 0, e = (e << 21 | e >>> 11) + s | 0, t += (s ^ (e | ~r)) + a[4] - 145523070 | 0, t = (t << 6 | t >>> 26) + e | 0, r += (e ^ (t | ~s)) + a[11] - 1120210379 | 0, r = (r << 10 | r >>> 22) + t | 0, s += (t ^ (r | ~e)) + a[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + r | 0, e += (r ^ (s | ~t)) + a[9] - 343485551 | 0, e = (e << 21 | e >>> 11) + s | 0, i[0] = t + i[0] | 0, i[1] = e + i[1] | 0, i[2] = s + i[2] | 0, i[3] = r + i[3] | 0;
    }
    /**
     * Initialise buffer to be hashed
     */
    start() {
      return this._dataLength = 0, this._bufferLength = 0, this._state.set(_h.stateIdentity), this;
    }
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    /**
     * Append a UTF-8 string to the hash buffer
     * @param str String to append
     */
    appendStr(i) {
      const a = this._buffer8, t = this._buffer32;
      let e = this._bufferLength, s, r;
      for (r = 0; r < i.length; r += 1) {
        if (s = i.charCodeAt(r), s < 128)
          a[e++] = s;
        else if (s < 2048)
          a[e++] = (s >>> 6) + 192, a[e++] = s & 63 | 128;
        else if (s < 55296 || s > 56319)
          a[e++] = (s >>> 12) + 224, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
        else {
          if (s = (s - 55296) * 1024 + (i.charCodeAt(++r) - 56320) + 65536, s > 1114111)
            throw new Error(
              "Unicode standard supports code points up to U+10FFFF"
            );
          a[e++] = (s >>> 18) + 240, a[e++] = s >>> 12 & 63 | 128, a[e++] = s >>> 6 & 63 | 128, a[e++] = s & 63 | 128;
        }
        e >= 64 && (this._dataLength += 64, _h._md5cycle(this._state, t), e -= 64, t[0] = t[16]);
      }
      return this._bufferLength = e, this;
    }
    /**
     * Append an ASCII string to the hash buffer
     * @param str String to append
     */
    appendAsciiStr(i) {
      const a = this._buffer8, t = this._buffer32;
      let e = this._bufferLength, s, r = 0;
      for (; ; ) {
        for (s = Math.min(i.length - r, 64 - e); s--; )
          a[e++] = i.charCodeAt(r++);
        if (e < 64)
          break;
        this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
      }
      return this._bufferLength = e, this;
    }
    /**
     * Append a byte array to the hash buffer
     * @param input array to append
     */
    appendByteArray(i) {
      const a = this._buffer8, t = this._buffer32;
      let e = this._bufferLength, s, r = 0;
      for (; ; ) {
        for (s = Math.min(i.length - r, 64 - e); s--; )
          a[e++] = i[r++];
        if (e < 64)
          break;
        this._dataLength += 64, _h._md5cycle(this._state, t), e = 0;
      }
      return this._bufferLength = e, this;
    }
    /**
     * Get the state of the hash buffer
     */
    getState() {
      const i = this._state;
      return {
        buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
        buflen: this._bufferLength,
        length: this._dataLength,
        state: [i[0], i[1], i[2], i[3]]
      };
    }
    /**
     * Override the current state of the hash buffer
     * @param state New hash buffer state
     */
    setState(i) {
      const a = i.buffer, t = i.state, e = this._state;
      let s;
      for (this._dataLength = i.length, this._bufferLength = i.buflen, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], s = 0; s < a.length; s += 1)
        this._buffer8[s] = a.charCodeAt(s);
    }
    /**
     * Hash the current state of the hash buffer and return the result
     * @param raw Whether to return the value as an `Int32Array`
     */
    end(i = false) {
      const a = this._bufferLength, t = this._buffer8, e = this._buffer32, s = (a >> 2) + 1;
      this._dataLength += a;
      const r = this._dataLength * 8;
      if (t[a] = 128, t[a + 1] = t[a + 2] = t[a + 3] = 0, e.set(_h.buffer32Identity.subarray(s), s), a > 55 && (_h._md5cycle(this._state, e), e.set(_h.buffer32Identity)), r <= 4294967295)
        e[14] = r;
      else {
        const n = r.toString(16).match(/(.*?)(.{0,8})$/);
        if (n === null) return i ? c : "";
        const o = parseInt(n[2], 16), _ = parseInt(n[1], 16) || 0;
        e[14] = o, e[15] = _;
      }
      return _h._md5cycle(this._state, e), i ? this._state : _h._hex(this._state);
    }
  };
  // Private Static Variables
  __publicField(_h, "stateIdentity", new Int32Array([
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ]));
  __publicField(_h, "buffer32Identity", new Int32Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]));
  __publicField(_h, "hexChars", "0123456789abcdef");
  __publicField(_h, "hexOut", []);
  // Permanent instance is to use for one-call hashing
  __publicField(_h, "onePassHasher", new _h());
  let h = _h;
  if (h.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
    throw new Error("Md5 self test failed.");
  const mixinKeyEncTab = [
    46,
    47,
    18,
    2,
    53,
    8,
    23,
    32,
    15,
    50,
    10,
    31,
    58,
    3,
    45,
    35,
    27,
    43,
    5,
    49,
    33,
    9,
    42,
    19,
    29,
    28,
    14,
    39,
    12,
    38,
    41,
    13,
    37,
    48,
    7,
    16,
    24,
    55,
    40,
    61,
    26,
    17,
    0,
    1,
    60,
    51,
    30,
    4,
    22,
    25,
    54,
    21,
    56,
    59,
    6,
    63,
    57,
    62,
    11,
    36,
    20,
    34,
    44,
    52
  ];
  const getMixinKey = (orig) => mixinKeyEncTab.map((n) => orig[n]).join("").slice(0, 32);
  const encWbi = (params, img_key, sub_key) => {
    const mixin_key = getMixinKey(img_key + sub_key), curr_time = Math.round(Date.now() / 1e3), chr_filter = /[!'()*]/g;
    Object.assign(params, { wts: curr_time });
    const query = Object.keys(params).sort().map((key) => {
      const value = params[key].toString().replace(chr_filter, "");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");
    const wbi_sign = h.hashStr(query + mixin_key);
    return query + "&w_rid=" + wbi_sign;
  };
  const runScript = () => {
    const img_key = useWebKey(web_key_urls.img_key_url);
    const sub_key = useWebKey(web_key_urls.sub_key_url);
    ajaxHooker.hook((request) => {
      if (request.url.includes("/x/web-interface/nav")) {
        if (request.type === "xhr") {
          request.response = (res) => {
            res.responseText = JSON.stringify(mockUserInfo);
          };
        }
        if (request.type === "fetch") {
          request.response = (res) => {
            res.json = mockUserInfo;
          };
        }
      }
      if (request.url.includes("/x/v2/reply/wbi/main") || request.url.includes("/x/v2/reply/reply")) {
        request.credentials = "omit";
      }
      if (request.url.includes("/x/player/wbi/v2")) {
        request.response = (res) => {
          if (!(res == null ? void 0 : res.responseText)) return;
          const playerResponse = JSON.parse(res.responseText);
          playerResponse.data.login_mid = Math.floor(Math.random() * 1e5);
          playerResponse.data.level_info.current_level = 6;
          res.responseText = JSON.stringify(playerResponse);
        };
      }
      if (request.url.includes("/x/web-interface/history/cursor")) {
        request.response = (res) => {
          if (!(res == null ? void 0 : res.json)) return;
          const historyListRes = historyList;
          res.json = historyListRes;
        };
      }
      if (request.url.includes("api.bilibili.com/x/player/wbi/playurl")) {
        const qsParams = Object.fromEntries(
          new URLSearchParams(request.url.split(/\?|&w_rid/)[1]).entries()
        );
        Reflect.set(qsParams, "qn", 80);
        Reflect.set(qsParams, "try_look", 1);
        const query = encWbi(qsParams, img_key, sub_key);
        request.url = "//api.bilibili.com/x/player/wbi/playurl?" + query;
        request.response = (res) => {
          Object.defineProperty(window, "__playinfo__", {
            get: function() {
              return JSON.parse((res == null ? void 0 : res.responseText) ?? "{}");
            },
            configurable: true
          });
        };
      }
    });
  };
  Object.defineProperty(window, "__playinfo__", {
    get: function() {
      return null;
    },
    configurable: true
  });
  document.cookie = "DedeUserID=3493281916783362";
  runScript();

})();