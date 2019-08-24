/**
 * 自定义事件总线
 * 绑定事件监听
 * EventBus.on(eventName,listener)
 * 分发事件
 * EventBus.emit(eventName,data)
 * 解绑事件
 * EventBus.off(eventName)
 * 
 * eventName---事件类型(事件名字)
 * data---数据
 * listener--回调函数
 * 设计存储所有的事件及监听函数的容器,每个事件都有可能有多个回调函数
 * {'add':[listener1,listener2],'delete':[listener3]}
 * 
 */
(function (window) {
  // 定义事件总线对象
  const EventBus = {}
  // 定义存储事件及对应回调函数的对象 
  let listenerContainer = {}
  // 绑定事件监听
  EventBus.on = function (eventName, listener) {
    // 根据事件名字找对应的回调函数的容器
    let listeners = listenerContainer[eventName]
    // 判断回调函数的数组是否存在
    if (!listeners) {
      // 如果不存在则进行添加
      listeners = []
      // 把事件名字及对应的回调函数添加到容器中
      listenerContainer[eventName] = listeners
    }
    // 无论是否存在都要把当前传入进来的回调函数添加到数组中
    listeners.push(listener)
  }
  // 分发事件
  EventBus.emit = function (eventName, data) {
    // 根据事件名字获取对应的回调函数的数组容器
    let listeners = listenerContainer[eventName]
    // 判断是否存在则进行调用
    if (listeners && listeners.length > 0) {
      // 循环遍历并调用
      listeners.forEach(listener => {
        // 调用的同时传入数据
        listener(data)
      })
    }
  }
  // 解绑事件
  EventBus.off = function (eventName) {
    // 判断有没有该事件的名字
    if (eventName === undefined) {
      // 没有则清空全部事件
      listenerContainer = {}
    } else {
      // 存在则清除对应的回调数组容器
      delete listenerContainer[eventName]
      // 或者
      listenerContainer[eventName] = []
    }
  }


  // 暴露事件总线对象
  window.EventBus = EventBus
})(window)