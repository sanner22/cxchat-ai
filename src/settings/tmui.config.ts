// 在进阶指南中会讲到类型文件的使用。请注意右右侧文档栏目。
// 指定了类型后，在里面输入会有类型提示和校验。
// 所有配置参考：https://tmui.design/doc/advanced/tmui%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE.html#%E6%89%80%E6%9C%89%E9%85%8D%E7%BD%AE-%E5%AE%8C%E5%96%84%E4%B8%AD
export const config: Tmui.tmuiConfig = {
  autoDark: false,
  theme: {
    // 这里输入你定义的主题主色
  // 比如："primary": "#FF0000"
  // 名称如果与自带主题相同，将会覆盖。
    tnt: ['#009fe8', '#007fba'],
  },
  router: {
    useTmRouterBefore(arg) {
      console.log('tmui.config.route.useTmRouterBefore', arg)
    },
    useTmRouterAfter(arg) {
      console.log('tmui.config.route.useTmRouterAfter', arg)
    },
  },
}
