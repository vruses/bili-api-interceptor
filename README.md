# 📺 Bilibili 免登录与高分辨率视频

## ⏱页面组件加载时机

#### SSR 渲染

以视频页为例，服务端渲染时会根据用户 cookie 注入 `window.__playinfo__`，其中包含初始的视频 `CDN` 地址，未登录用户只能获取最高480p的视频（只有360p只是因为前端限制）。

#### 播放器模块加载

- 首先加载核心模块 `core.[hash].js`（基于 `NanoPlayer`）。
- `core` 会被挂载在`window.nano`身上，挂载完毕后被脚本调用 `nano.createPlayer(primarySetting, theme)` 创建播放器实例，挂载到`window.player`。
- `primarySetting`包含从`window.__playinfo__`读取的视频CDN。
- 已登录和未登录情况下`core`都会从`window.__playinfo__`身上获取`CDN`地址然后首先加载`several video segments`保证用户体验。
- 随后`core`会对<u>`/x/player/wbi/v2`</u>发起请求,除了包含一些视频信息，还包含`user`的一些信息，比如`ip,level,mid`(也就是uid，未登录返回null，这条响应信息会控制player widget的方法调用逻辑及以何种方式渲染，如图)。
- `core`在最后会加载`npd.[nanoId].[hash].js`，`video.[hash].js`。前者是一些控件用于组装`player`，不仅包括ui，它们身上都挂载了一些方法，比如`切换画质(setQuality)`，`跳转视频进度(seeking)`等；后者用于在`player`组装完成后`load header`,以及评论区的`lazy load`。

![Image](https://github.com/user-attachments/assets/e29a17ba-2c3b-418d-9d84-00304f871cad)

#### 播放器行为

- 未登录时，`core`会读取 `localStorage.bpx_player_profile` 来获取默认分辨率，是否开启弹幕，是否试看高分辨率等状态，clear此item能刷新试看次数。未登录状态能试用高分辨率，说明未登录就能一直试用高分辨率。

- 点击试看会请求`/x/player/wbi/playurl`接口，这两个参数不可少`qn=80`，`try_look=1`，下表qn对应分辨率：

  | QualityNumber | Resolution  |
  | :------------ | :---------- |
  | 120           | 超清 4K     |
  | 112           | 高清 1080P+ |
  | 80            | 高清 1080P  |
  | 64            | 高清 720P   |
  | 32            | 清晰 480P   |
  | 16            | 流畅 360P   |

#### 其它模块加载

- `video.[hash].js`被`core`调用后，它会对`/x/web-interface/nav`发起请求。请求结果包含用户的一些详细信息。
- `bili-header.umd.js`被加载，用于生成页面顶部的`header`部分，`nav`接口返回的数据用于右上角个人中心的信息加载。
- `bili-comment.[hash].js`被加载，当向下滑动被调用用于懒加载评论区数据，评论区是否被遮罩取决于`nav`返回的信息中是否为登录用户。
- 当向下滑动请求视频评论区列表时，`web.min.js`被加载用于请求`/x/v2/reply/wbi/main`获取评论列表，实测当`cookie`中包含`buvid3`时只会加载三条评论，不包含`buvid3`时正常加载评论但缺少`ip`属地信息。展开评论会请求`x/v2/reply/reply`。

![Image](https://github.com/user-attachments/assets/1d2d681f-718e-4d26-8eb8-653c2b2ca5cf)

------

## 💡 思路

- 自请求`playurl`，拿到响应替换`window.__playinfo__`之前，阻塞`core`创建`player`。但是注意到当设置`__playinfo__`为`null`，`core`会发出`playurl`请求，可以在此时拦截它，获取响应结果时切换成1080p分辨率。

- 拦截`playurl`请求，添加参数`try_look=1`，改`qn=80`，去掉`w_rid，wts`并根据参数重新生成。

- 拦截`nav`接口响应，伪造登录格式`json`达到伪登录目的，弹窗，评论区遮罩一次性解决。

- 拦截`main`和`reply`请求，去除`cookie`获取所有评论数据。

![Image](https://github.com/user-attachments/assets/38339ffe-9a3d-4cdb-b577-589a351816f0)

------

## 📝 待完善

- 如何使`player`拿到`playurl`时请求最高分辨率或者常用分辨率，以及鼠标悬浮视频页右侧视频列表时控制台会报错。
- 由于无法准确的记录用户的登录状态，比如登录再退出，无法确定脚本是否应该执行，最好在登录情况下禁用此脚本。
- 如果还有其它常用，未登录也可用的接口也会考虑加进来。