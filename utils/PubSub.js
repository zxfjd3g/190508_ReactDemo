/* 
定义一个用来进行消息订阅和发布的对象模块: PubSub
*/

(function (window) {
  const PubSub = {}

  /* 
    {
      add: {
        token1: callback1, 
        token2: callback2
      },
      update: {
        token3: callback3
      }
    }
  */
  let callbacksObj = {} // {token1: callback1, token2: callback2}
  let id = 0 // 用于生成token的标记
  // 1. 订阅消息
  PubSub.subscribe = function (msgName, callback) {

    // 确定token
    const token = 'token_' + ++id
    // 取出当前消息对应的callbacks
    const callbacks = callbacksObj[msgName]
    if (!callbacks) {
      callbacksObj[msgName] = {
        [token]: callback
      }
    } else {
      callbacks[token] = callback
    }
    // 返回token
    return token
  }


  // 2. 发布异步的消息
  PubSub.publish = function (msgName, data) {
    // 取出当前消息对应的callbacks
    const callbacks = callbacksObj[msgName]
    // 如果有值
    if (callbacks) {
      // 启动定时器, 异步执行所有的回调函数
      setTimeout(() => {
        Object.values(callbacks).forEach(callback => {
          callback(data)
        })
      }, 0)
    }
  }

  // 3. 发布同步的消息
  PubSub.publishSync = function (msgName, data) {
    // 取出当前消息对应的callbacks
    const callbacks = callbacksObj[msgName]
    // 如果有值
    if (callbacks) {
      // 立即同步执行所有的回调函数
      Object.values(callbacks).forEach(callback => {
        callback(data)
      })
    }
  }

  // 4.  取消消息订阅
  PubSub.unsubscribe = function (flag) {
    // 如果flag没有指定或者为null, 取消所有
    if (flag===undefined || flag===null) {
      callbacksObj = {}
    } else if (flag.indexOf('token_')===0) { // flag是token
      // 找到flag对应的callbacks
      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))
      // 如果存在, 删除对应的属性
      if (callbacks) {
        delete callbacks[flag]
      }
    } else {
      delete callbacksObj[flag]
    }
  }

  window.PubSub = PubSub
})(window)