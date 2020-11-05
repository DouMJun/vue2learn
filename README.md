# 移动端电商模拟
---
- 跟着b站视频，coderwhy老师学习做的项目，[B站视频链接](https://www.bilibili.com/video/BV15741177Eh?p=174)
--- 
### 此处用于记录学习过程中遇到的问题、解决办法和思考
欢迎访问[我的博客](https://doumjun.github.io/vuepress.blog/)
---
2020.11.3
---
- `vm.$el`用于获取实例关联的DOM元素,当想获得自定义组件myComp中的数据和方法时，可以使用`this.$refs.[ref值].[data或方法名]`,但是想要使用DOM元素的方法和属性，如`offsetTop`，需要通过`$el`获得DOM元素,`this.$refs.myComp.$el.offsetTop`
---
2020.11.2
---
- 在`<keep-alive>`中将某些路由排除在外，不进行缓存,使用`exclude="路由名"`
---
2020.11.1
- 1. 使用better-scroll时出现页面尚未滚动到底部，但是已经无法继续向下滚动
  2. better-scroll获取滚动页面高度时，显示内容尚未加载完成，获得了错误的`scrollerHeight`,因而滚动页面大小小于要显示的页面大小。
  3. 在初次加载页面和每次改变页面内容时，使用`scroll.refresh()`重新获取`scrollerHeight`
   
- 使用`$bus`总线进行组件之间事件的发射和相应,声名方式：
  ```javascript
  //在main.js文件中
  Vue.prototype.$bus = new Vue()

  //发射事件
  this.$bus.$emit('eventName', value)

  //接收事件
  this.$bus.$on('eventName', () => {
    //somgthing...
  })
  ```


