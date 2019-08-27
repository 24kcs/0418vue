// 引入mutation对应的常量名的文件
import { REQESTING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'
// 包含了多个直接修改状态数据的方法的对象
export default {
  // 发请求的时候修改一次数据
  [REQESTING](state) {
    state.firstView = false
    state.loading = true
  },
  // 成功之后修改一次数据
  [REQ_SUCCESS](state,users) {
    state.loading = false
    state.users = users
  },
  // 失败之后修改一次数据
  [REQ_ERROR](state,error) {
    state.loading = false
    state.errorMsg = error
  }
}

