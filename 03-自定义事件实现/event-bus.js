/**
 * 
 * 自定义实现事件总线
 * 事件总线的对象
 * 
 * 绑定
 * on(eventName,listener)
 * 分发
 * emit(eventName,data)
 * 解绑
 * off(eventName)
 * 
 * eventName---事件类型----事件的名字
 * listener---事件的监听函数---回调函数
 * data----数据---分发事件的时候传入的数据
 *  
 * 设计存储事件类型及对应回调函数的容器
 * {'add':[listener1,listener2],'delete':[listener3]}
 * 
 * 
 * 
 * 
 * 
 */
(function (window) {
  // 定义一个事件总线对象
  const EventBus = {}
  // 定义一个对象,用来存储事件名字及对应的回调函数
  let listenerContainer = {}
  // 绑定事件的方法
  // on('add',f1) on('add',f2)
  //{'add':[listener1,listener2],'delete':[listener3]}
  // {'add':[]}
  EventBus.on = function (eventName, listener) {
    // 根据事件的名字,获取大容器中这个事件对应的那个回调函数的数组容器
    let listeners = listenerContainer[eventName]
    if (!listeners) {
      listeners = []
      listenerContainer[eventName] = listeners
    }
    // 回调函数存储到数组中
    listeners.push(listener)
  }


  // 分发事件的方法
  // {'add':[listener1,listener2],'delete':[listener3]}
  // EventBus.emit('add','您好')
  EventBus.emit = function (eventName, data) {
    // 先根据事件的名字获取对应的回调函数的数组容器
    let listeners = listenerContainer[eventName]
    if (listeners && listeners.length > 0) {
      // 存储回调函数的这个数组存在
      listeners.forEach(listener => {
        listener(data)
      })
    }

  }
  // 解绑事件的方法
  EventBus.off = function (eventName) {
    // 判断eventName是否存在
    if (eventName === undefined) {
      // {'add':[listener1,listener2],'delete':[listener3]}
      // 解绑所有的事件
      listenerContainer = {}
    } else {
      delete listenerContainer[eventName]
      // 或者
      // listenerContainer[eventName] = []
    }
  }
  // 向外暴露对象
  window.EventBus = EventBus
})(window)


// 绑定
//  EventBus.on('add',function(data){
//    console.log('add事件触发了',data)
//  })  
//  EventBus.on('add',function(data){
//   console.log('add事件触发了',data)
// }) 
// EventBus.on('delete', function () { })
//  // 分发的操作
//  EventBus.emit('add',data)
//  // 解绑
//  EventBus.off('add')