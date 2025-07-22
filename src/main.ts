import runScript from "@/core";

// Prevent the player from retrieving the correct playback information
Object.defineProperty(window, "__playinfo__", {
  get: function () {
    return null;
  },
  configurable: true,
});

// player判断用户登录的另一种方式，用于首次获取何种质量的视频cdn
// @ts-ignore
document.cookie = "DedeUserID=3493281916783362";

runScript();
