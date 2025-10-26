export interface PlayerUserInfo {
  // 播放器里用到的用户数据,省去了其它没有用到的属性
  // 为0则未登录
  login_mid: number
  // 用户等级信息
  level_info: {
    current_level: number
  }
  subtitle: unknown
}

export interface Subtitles {
  closed: boolean
  dm_seg: {
    page_size: number
    total: number
  }
  flag: {
    rec_flag: number
    rec_text: string
    rec_switch: number
  }
  subtitle: {
    lan: string
    lan_doc: string
    subtitles: {
      id: number
      id_str: string
      lan: string
      lan_doc: string
      subtitle_url: string
      type: number
      ai_type: number
      ai_status: number
      role: number
      video_detext: boolean
      video_mouth_shape_change: boolean
      subtitle_height: null
    }[]
  }
}
