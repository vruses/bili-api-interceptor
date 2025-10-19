export {}
declare global {
  interface Window {
    player?: unknown // Use a more specific type if you know it
    __INITIAL_STATE__?: unknown
    /**
     * 视频页首次加载的视频信息，后续切换视频不再变更
     * 从__INITIAL_STATE__读取
     */
    vd?: { aid: number; cid: number }
  }
}
