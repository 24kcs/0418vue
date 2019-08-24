/**
 * 
 * 自定义消息订阅
 * 消息订阅
 * var token=PubSub.subscribe(msg,subscriber)
 * 消息同步发布
 * PubSub.publish(msg,data)
 * 消息异步发布
 * PubSub.publishSync(msg,data)
 * 取消消息订阅
 * PubSub.unsubscribe(token);
 * 
 * token---标识
 * msg---消息名字
 * subscriber---回调函数
 * data---数据
 * 
 * 设计存储消息订阅的回调函数的对象容器
 * {
 * 'add':{id-1:subscriber1,id-2:subscriber2}
 * 'delete':{id-3:subscriber3}
 * }
 * 
 * 
 */

(function (window) {
  // 定义消息订阅对象
  const PubSub = {}
  // 存储消息对应的回调函数的容器对象
  let subscribeContainer = {}
  let id = 0 // 默认id是0---标识使用
  // 消息订阅
  PubSub.subscribe = function (msg, subscriber) {
    // 根据消息获取对应的回调函数的对象容器
    let subscribers = subscribeContainer[msg]
    // 判断该容器是否存在
    if (!subscribers) {
      // 不存在则创建该对象,并根据消息名字添加到容器中
      subscribers = {}
      subscribeContainer[msg] = subscribers
    }
    // 为新的订阅者添加一个唯一的标识id
    const token = 'id-' + ++id
    // 根据标识添加对应的回调函数
    subscribers[token] = subscriber
    // 返回指定的标识
    return token
  }
  // 同步发布消息
  PubSub.publish = function (msg, data) {
    // 根据消息名字获取对应的所有的回调函数,并遍历调用,传入数据
    const subscribers = subscribeContainer[msg]
    if (subscribers) {
      // 存在则转数组遍历调用
      Object.values(subscribers).forEach(subscriber => subscriber(data))
    }
  }
  // 异步发布消息
  PubSub.publishSync = function (msg, data) { 
    const subscribers=subscribeContainer[msg]
    if(subscribers){
      setTimeout(()=>{
        Object.values(subscribers).forEach(subscriber=>subscriber(data))
      })
    }
  }
  // 取消消息订阅
  PubSub.unsubscribe = function (token) {
    // 判断token是否存在
    if(token===undefined){
      // 不存在则清空所有
      subscribeContainer={}
    }else if(token.indexOf('id-')===0){
      // 说明标识是存在的,则取消对应的回调
      // 先找到大的容器进行查找,查找是否包含当前token标识的对象
      const subscribers=Object.values(subscribeContainer).find(subscribers=>subscribers.hasOwnProperty(token))
      // 如果存在则删除
      subscribers&&delete subscribers[token]
    }else{
      // 根据名字删除
      delete subscribeContainer[token]
    }
   }

  //暴露给对象
  window.PubSub = PubSub
})(window)