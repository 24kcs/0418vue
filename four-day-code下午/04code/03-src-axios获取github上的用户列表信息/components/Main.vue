<template>
  <h2 v-if="firstView">请输入搜索内容</h2>
  <h2 v-else-if="loading">正在加载中...</h2>
  <h2 v-else-if="errorMsg">请求失败:{{errorMsg}}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
// 引入axios
import axios from "axios";
export default {
  data() {
    return {
      firstView: true, // 第一次显示的提示信息
      loading: false, // 请求的时候显示提示信息
      errorMsg: "", // 错误的信息
      users: [] // 用来保存获取的用户对象
    };
  },
  mounted() {
    // 绑定事件
    this.$bus.$on("search", async searchName => {
      const url = `https://api.github.com/search/users`;
      // 先更新一次data中的数据,干掉第一次的提示信息,并且显示的应该是loading
      this.firstView = false;
      this.loading = true;
      try {
        // 发送请求
        const response = await axios.get(url, {
          // 配置参数
          params: {
            q: searchName
          }
        });
        // 信息在当前的这个变量中====坑====================
        const users = response.data.items.map(item => ({
          login: item.login,
          avatar_url: item.avatar_url,
          html_url: item.html_url
        }));

        // 再次更新data中的数据
        this.loading = false;
        this.users = users;
      } catch (error) {
        // 更新data中的数据
        this.loading = false;
        this.errorMsg = error.message;
      }
      // 明天就知道了====================天坑=========================
    });
  }
};
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>