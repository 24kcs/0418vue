/**
 * 
 * PubSub是一个对象
 * 
 * 订阅消息
 * var token=PubSub.subscribe(msg,subscriber)
 * 发布消息的方法---同步
 * PubSub.publish(msg,data)
 * 发布消息的方法---异步
 * PubSub.publishSync(msg,data)
 * 取消订阅
 * PubSub.unsubscribe(token)  token----消息名字,token---唯一的标识,token没传入参数,就直接全部取消
 * 
 * msg----消息的名字
 * subscriber----回调函数
 * data----数据
 * token---唯一的标识
 * 
 * 设计一个容器用来存储消息及对应的回调函数的
 * 'id-1'
 * {'add':{'id-1':subscriber,'id-2':subscriber2},'delete':{'id-3':subscriber3}}
 * 
 * 
 * 消息订阅
 * 
 * 
 * 
 * 
 * 
 * 
 */



(function (window) {
  // 定义了消息订阅的对象
  const PubSub = {}
  // 定义一个对象容器,用来存储消息名字及对应的回调函数(消息名字:{标识:回调函数})
  let subscriberContainer = {}
  // id值---唯一的,不停的加
  let id = 0

  // 订阅消息
  // var token=PubSub.subscribe('add',f1)
  // PubSub.subscribe('add',f2)
  //{'add':{'id-1':subscriber,'id-2':subscriber2},'delete':{'id-3':subscriber3}}
  // {'add':{}}
  PubSub.subscribe = function (msg, subscriber) {
    // 根据消息名字,获取大的容器中对应的消息名字对应的回调函数的容器对象
    let subscribers = subscriberContainer[msg]
    // 判断当前的回调函数容器对象是否存在
    if (!subscribers) {
      subscribers = {}
      subscriberContainer[msg] = subscribers
    }
    // 创建标识
    const token = 'id-' + ++id
    subscribers[token] = subscriber
    // 返回标识
    return token
  }
  // 发布消息---异步
  // PubSub.publish('add',data)
  // {'add':{'id-1':subscriber,'id-2':subscriber2},'delete':{'id-3':subscriber3}}
  PubSub.publish = function (msg, data) {
    // 根据消息名字获取对应的回调函数的容器对象
    let subscribers = subscriberContainer[msg]
    setTimeout(() => {
      if (subscribers) {
        // 回调函数的容器是存在,
        Object.values(subscribers).forEach(subscriber => {
          subscriber(data)
        })
      }
    }, 1000);
  }
  // 发布消息---同步
  PubSub.publishSync = function (msg, data) {
    // 根据消息名字获取对应的回调函数的容器对象
    let subscribers = subscriberContainer[msg]
    if (subscribers) {
      // 回调函数的容器是存在,
      Object.values(subscribers).forEach(subscriber => {
        subscriber(data)
      })
    }

  }
  // 取消订阅
  //{'add':{'id-1':subscriber,'id-2':subscriber2},'delete':{'id-3':subscriber3}}
  // [{'id-1':subscriber,'id-2':subscriber2},{'id-3':subscriber3}]
  // PubSub.unsubscribe('id-1')
  PubSub.unsubscribe = function (token) {
    // 如果token没值
    if (token === undefined) {
      subscriberContainer = {}
      // 传入的是标识
    } else if (token.indexOf('id-') !== -1) {
      const subscriber = Object.values(subscriberContainer).find(subscribers => subscribers.hasOwnProperty(token))
      subscriber && delete subscriber[token]
    } else {
      // 传入的是名字
      subscriberContainer[token] = {}
    }
  }


  // 向外暴露
  window.PubSub = PubSub
})(window)