<template>
  <ul>
    <li>id:{{id}}</li>
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    id:Number
  },
  data() {
    return {
      messageDetail: [
        { id: 1, title: "message001", content: "message content001" },
        { id: 3, title: "message003", content: "message content003" },
        { id: 5, title: "message005", content: "message content005" }
      ],
      detail: {}
    };
  },
  mounted() {
    this.showDetail(this.$route);
  },
  watch: {
    $route(val) {
      this.showDetail(val);
    }
    
  },
  methods: {
    showDetail(val) {
      const id = val.params.id * 1; // 此时是字符串类型
      this.detail = this.messageDetail.find(m => m.id === id);
    }
  }
};
</script>
<style scoped>
</style>