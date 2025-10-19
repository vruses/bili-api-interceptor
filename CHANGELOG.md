# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
