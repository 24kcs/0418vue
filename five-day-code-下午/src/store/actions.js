import axios from 'axios'
import { REQESTING, REQ_SUCCESS, REQ_ERROR } from './mutation-types'
// 包含了多个间接修改状态数据的方法的对象
export default {
  // 绑定事件
  async search({ commit }, searchName) {
    const url = `https://api.github.com/search/users`;
    try {

      // 发送请求,修改一次数据
      commit(REQESTING)
      const response = await axios.get(url, {
        // 配置参数
        params: {
          q: searchName
        }
      });
      const users = response.data.items.map(item => ({
        login: item.login,
        avatar_url: item.avatar_url,
        html_url: item.html_url
      }));
      // 更新数据---修改一次
      commit(REQ_SUCCESS, users)
    } catch (e) {
      // 修改一次数据
      commit(REQ_ERROR,e.message)
    }

  }
}