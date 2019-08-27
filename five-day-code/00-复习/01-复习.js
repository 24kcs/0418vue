/**
 * 自定义消息订阅
 * PubSub对象
 * 订阅消息
 * PubSub.subscribe(msg,subscriber)
 * 同步发布消息
 * PubSub.publishSync(msg,data)
 * 异步发布消息
 * PubSub.publish(msg,data)
 * 取消订阅
 * PubSub.unsubscribe(token)
 * msg---消息名字-----可以看成是(可以理解为)事件的名字
 * subscriber----回调函数
 * data----数据
 * token---唯一的标识
 * 设计了如何存储消息及对应的回调函数的容器对象
 * let subscribeContainer={'add':{'id-1':subscriber1,'id-2':subscriber2}}
 *  Object.values(subscribeContainer).find(subscribers=>subscribers.hasOwnProperty(token))
 * 
 * 自定义事件总线
 * EventBus对象
 * 事件绑定
 * EventBus.on(eventName,listener)
 * 分发事件
 * EventBus.emit(eventName,data)
 * 事件解绑
 * EventBus.off(eventName)
 * eventName----事件的名字---事件的类型
 * listener----监听---回调函数
 * data----数据
 * 
 * 事件总线是一个全局的对象,在任何的组件中都可以直接调用
 * 在Vue中组件之间传递参数:
 * 组件:包含了多个功能集合的一个对象,实际上就是一个.vue文件,里面有html,css,js
 * 组件之间的通信:
 * 1.props:父组件和子组件之间的通信---父传子
 * 2.自定义的事件:在父级组件中,@事件名字="回调函数",子级组件中,使用$emit()进行分发事件
 * 3.PubSub---不属于Vue,仅仅是插件,可以在Vue中使用,可以做到任意组件之间的通信
 * 4.事件总线,在Vue.原型上添加一个属性,该属性中存储的是Vue的实例对象,因为Vue的实例对象上有$on和$emit和$off方法,这些方法可以绑定事件和解绑事件和分发事件,那么一旦绑定到Vue的原型上,那么所有的子组件都可以直接调用其方法进行绑定和分发及解绑的操作
 * 为什么子组件可以调用事件总线(全局的事件总线)?
 * 因为,组件都是vm这个实例对象的子对象(有继承关系)
 * 5.插槽---slot组件(标签),可以占位,占位的地方使用的是<slot name="" /> 界面渲染完毕后,占位的地方就会被真正的标签进行替换,slot标签中如果有name属性,那么我们把这样的插槽叫：具名插槽(命名插槽)
 * 插槽:
 * 1)普通插槽,<slot>没有名字---使用?----vue项目的最后一天
 * 2)具名插槽,<slot name="">
 * 3)作用域插槽,------------vue项目的最后一天
 * 6.VueX-----今天讲-----重点内容
 * 
 * 在Vue中发送异步请求,获取数据,可以使用其相关的插件
 * Vue-Resource----vue1.x版本中使用的,安装,引入,声明使用插件,使用
 * axios-----vue2.x版本中使用,安装,引入,直接使用
 * 
 * 路由:就是个链接,可以跳转(本页中刷新),在页面中的指定的位置,渲染特定的路由组件中的内容
 * 前端的路由最终子页面中都变成了a标签,vue-router路由,本身并没有集成到vue中,而是一个插件,在vue中要想使用路由,要先安装,然后Vue.use(),最终需要子main.js文件中的new Vue()中注册路由器
 * router---路由器
 * this.$route---路由对象
 * this.$route.params.id------
 * 配置路由
 * routes:[
 *  {
 *    path:'路径',
 *    component:组件的名字
 *  }
 * ]
 * 路由组件会放在src目录中的pages目录中
 * src中的普通组件一般放在components目录中
 * static目录中一般放的都是静态的相关资源---css的文件
 * 路由传参:
 * path:'路径后面/:id',
 * props:route=>({id:route.params.id})
 * 在组件对象中可以使用this.$route.params.id获取------path:'路径/:id'的方式获取
 * 
 * 路由:
 * 声明式路由:直接使用标签的方式--->一般是<router-link>和<router-view>配合使用
 * 编程式路由:直接通过js代码的方式--->push()---有历史记录和replace()---没有历史记录
 * 配置路由的时候,可以干掉#------mode:'history'
 * 配置路由的时候,可以重新定向---redirect:'定向的路径'
 * path:'/'
 * redirect:'/about'
 * children:配置的是子路由
 * 缓存的路由:<keep-alive>
 * 路由组件之间传参,可以通过props
 * 
 * 
 * 
 * 
 * 
 */