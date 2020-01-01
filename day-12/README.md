# 父组件向子组件传递消息
  `props`属性将数据从父组件传递到子组件。

## 传递方式
* 父组件绑定传递的数据到子组件的props属性
  ```json
  <subComponent v-bind:data="parentData"></subComponent>
  ```
  
* 子组件props接收父组件传递的数
  ```json
  Vue.component('medium-post-component', {
    template: `<div>...</div>`,
    props: ['parentData'],
  });
  ```