# 项目介绍
使用 ESM 实现业务组件（物料）动态加载，适合业务比较复杂的系统使用

# Sub Project Description
## ui-library（组件库）
- 组件库、业务组件库（物料库）都可
- 使用lerna进行项目管理
- 使用vite进行对Vue组件进行打包

## biz-project（业务项目）
- 常规Vue3业务项目
- 使用defineAsyncComponent动态加载esm组件

![](https://raw.githubusercontent.com/zhentaoo/esm-async-load-example/master/doc/sss.png)