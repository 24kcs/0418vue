/**
 * 
 * 
 * TodoList案例
 * 添加操作
 * 删除操作
 * 显示操作---v-for遍历
 * 切换操作---(在子级组件中不是直接修改父级组件中的数据)
 * 全选和全不选的操作
 * 以上操作全部是在父级组件中-------实际上是在对应的子级组件中触发了父级组件中的相关方法
 * 
 * 组件中间通信
 * 1.props----可以是数组,也可以是对象,父子组件之间的通信
 * 2.自定义事件---父子组件之间通信
 *  @事件名字="回调函数",需要配合$emit()方法触发,
 * 3.PubSub消息订阅的方式----任意组件之间和组件之间通信
 *  .subscribe(消息名字,回调函数)-------订阅消息
 *  .publish(消息名字,数据)---同步发布消息
 *  .publishSync(消息名字,数据)---异步发布消息
 *  .unsubscribe(token)----取消消息订阅
 * 4.事件总线----任意组件之间通信(之前使用的是父子组件之间通信)----
 *  首先把new Vue()对象挂载到Vue.prototype.$bus的属性上
 *  任意的组件都可以使用$bus中的相关的方法绑定事件,$on(),任意的组件都可以使用$bus中的相关方法触发事件$emit()
 *  $off()解绑事件
 * 5.把TodoFooter组件中的标签抽取出来了,在当前的组件中,使用slot标签配合name属性占位的方式,可以使用抽取出去的标签,slot插槽,可以进行组件之间通信
 * slot使用了name属性;此时这个插槽我们叫命名插槽(具名插槽)
 * 
 * 自定义事件总线
 * 
 *   // 如果vm的实例对象被销毁了,那么消息订阅就取消
 * beforeDestroy () {
 *   // 取消订阅
 *   PubSub.unsubscribe(this.token)
 *   // 事件解绑
 *   this.$bus.$off()
 * },
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */