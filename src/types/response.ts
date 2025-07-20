export interface PlayerUserInfo {
  code: number;
  message: string;
  ttl: number;
  // 播放器里用到的用户数据,省去了其它没有用到的属性
  data: {
    // 为0则未登录
    login_mid: number;
    // 用户等级信息
    level_info: {
      current_level: number;
    };
  };
}
