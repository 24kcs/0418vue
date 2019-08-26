<template>
  <div>
    <h1 v-if="!repUrl">正在加载中...</h1>
    <h1 v-else>
      most star is
      <a :href="repUrl">{{repName}}</a>
    </h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      repUrl: "", // 技术名字对应的链接地址
      repName: "" // 技术的名字
    };
  },
  async mounted() {
    try {
      // 发送请求,获取github上的一个技术名称,及相关链接
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
      const response = await axios.get(url);
      const result = response.data.items[0];
      // 更新data数据----预知---vuex
      this.repUrl = result.html_url;
      this.repName = result.name;
    } catch (error) {
      console.log("错误消息:" + error.message);
    }
  }
};
</script>
<style scoped>
</style>