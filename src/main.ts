import runScript from "@/core";
import toggleIntercept from "@/utils/websocket/intercept";
import { random } from "lodash-es";

// 修改ws连接成功后的发送的第一个数据包以在直播页获取弹幕
if (location.href.includes("live.bilibili.com")) {
  toggleIntercept();
}
// Prevent the player from retrieving the correct playback information
Object.defineProperty(window, "__playinfo__", {
  get: function () {
    return null;
  },
  configurable: true,
});

// player判断用户登录的另一种方式，用于首次获取何种质量的视频cdn
// @ts-ignore
document.cookie = `DedeUserID=${random(2 ** 53)}`;

runScript();
