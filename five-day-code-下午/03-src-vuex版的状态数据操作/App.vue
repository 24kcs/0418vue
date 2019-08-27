<template>
  <div>
    <h1>次数:{{$store.state.count}},奇数or偶数:{{$store.getters.evenOrOdd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数+</button>
    <button @click="incrementAsync">异步+</button>
  </div>
</template>
<script>
export default {
  methods: {
    // 修改data中的状态数据
    // 加
    increment() {
      this.$store.commit("INCREMENT");
      // this.$store.dispatch("increment");
    },
    // 减
    decrement() {
      this.$store.commit("DECREMENT");
    },
    // 奇数+
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    // 异步的加
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    }
  }
};
</script>
<style scoped>
</style>