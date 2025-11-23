# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/vruses/bili-api-interceptor/compare/v2.0.0...v2.0.1) (2025-11-23)


### Bug Fixes

* 修复进入 up 主动态无限刷新的 bug ([890bfa5](https://github.com/vruses/bili-api-interceptor/commit/890bfa56602a5bb67df70bf76edf1c4ad5f47e0b)), closes [#1](https://github.com/vruses/bili-api-interceptor/issues/1)
* display follower's number ([079511a](https://github.com/vruses/bili-api-interceptor/commit/079511aa0489075c57d71fe9bb2315fad100cb34))
* fix subtitle type ([c04be7e](https://github.com/vruses/bili-api-interceptor/commit/c04be7e784478ccf043599cf41aea6cf7b7bb265))

## [2.0.0](https://github.com/vruses/bili-api-interceptor/compare/v1.2.6...v2.0.0) (2025-10-25)


### ⚠ BREAKING CHANGES

* write hooks for search, navigation, history, and video
* code structure

### Features

* support subtitles on initial and subsequent video loads ([f146c85](https://github.com/vruses/bili-api-interceptor/commit/f146c85923875745761bfe6a9027934b62c637f9))


### Bug Fixes

* correct conditional checks in useNav and useHistory hooks ([f4e3b2c](https://github.com/vruses/bili-api-interceptor/commit/f4e3b2c3b5cb086f755c776489f291d993c3b3e6))
* resolve type inference issue in ajax hooker ([cf134b9](https://github.com/vruses/bili-api-interceptor/commit/cf134b9ed3ab838ae7d18e40a1b8d928cb8bae5f))


* code structure ([873de61](https://github.com/vruses/bili-api-interceptor/commit/873de61a79a8f0be01ab8fd5859d0080aefd87f6))
* write hooks for search, navigation, history, and video ([efdd81c](https://github.com/vruses/bili-api-interceptor/commit/efdd81c22f54357bc111b27f4b7d4dc6616404bb))

### [1.2.6](https://github.com/vruses/bili-api-interceptor/compare/v1.2.5...v1.2.6) (2025-10-19)


### Bug Fixes

* trigger github release ([898bbe2](https://github.com/vruses/bili-api-interceptor/commit/898bbe2e4ad98eacf67a99d21b28889e0854ec54))

### [1.2.5](https://github.com/vruses/bili-api-interceptor/compare/v1.2.4...v1.2.5) (2025-10-19)


### Features

* 首次视频加载字幕 ([268c5a2](https://github.com/vruses/bili-api-interceptor/commit/268c5a2283d135b1b5071a890284c3e8d551560b))

### 1.2.4 (2025-10-17)


### ⚠ BREAKING CHANGES

* add CI and release workflows

### Features

* 纠正b站搜索页热搜接口损坏，获取不到数据的问题 ([6f4a317](https://github.com/vruses/bili-api-interceptor/commit/6f4a317d7e9dbd76840684e913dcef8426d0fcfa))
* 实现伪登录状态下的直播弹幕获取 ([ccea114](https://github.com/vruses/bili-api-interceptor/commit/ccea114da5d87d2d940c0d8cd6c6b967b95e49af))
* 首次获取视频CDN时，直接使用记忆分辨率而无需手动调整 ([4c6fba0](https://github.com/vruses/bili-api-interceptor/commit/4c6fba00a6c1704303bf0276e079411128bf12fa))
* 移除不必要的响应信息，还原全局的playinfo ([4750404](https://github.com/vruses/bili-api-interceptor/commit/4750404dcfc2393ef75af4def7f66660d689c1fd))
* add ajaxHooker with request and response handling ([002792f](https://github.com/vruses/bili-api-interceptor/commit/002792f79328ee0ba846286709ad9f5bd17370ec))
* add types ([8f70f57](https://github.com/vruses/bili-api-interceptor/commit/8f70f5736118444d0b1f01e3e28b9e88b212e7fa))
* script main logic ([ec638d1](https://github.com/vruses/bili-api-interceptor/commit/ec638d189d0c1adbe3970cded9827bfe8db76652))
* update credentials property to AjaxRequest interface for authentication handling ([0c7296b](https://github.com/vruses/bili-api-interceptor/commit/0c7296b9a856ce599a65dae4fd216969f923f7d0))
* Wbi signature utility in ts ([b627ce6](https://github.com/vruses/bili-api-interceptor/commit/b627ce672ca800e82735389d37cf042ae01d79d7))


### Bug Fixes

* 修复历史播放页循环刷新的问题，修复移动页未能登录的问题 ([5c0a8d2](https://github.com/vruses/bili-api-interceptor/commit/5c0a8d22e8f3bab7225b57d32ecdc0038c257f62))
* 修复fetch请求携带错误credentials的bug ([c7efc2c](https://github.com/vruses/bili-api-interceptor/commit/c7efc2c4f5df5ca892c7cc0787ea05a8f1a8519e))


* add CI and release workflows ([7906d7c](https://github.com/vruses/bili-api-interceptor/commit/7906d7c18f19f2b20516530c2e5258f11771486e))
