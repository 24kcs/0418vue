<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchName: "" // 获取文本框中的输入内容
    };
  },
  methods: {
    // 搜索的方法中应该调用事件总线进行事件的分发
    search() {
      const searchName = this.searchName.trim();
      if (searchName) {
        // 分发的事件
        // this.$bus.$emit("search", searchName);
        this.$store.dispatch('search',searchName)
        this.searchName=''
      }
    }
  }
};
</script>
<style scoped>
</style>