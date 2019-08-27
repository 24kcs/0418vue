<template>
  <div>
    <h1>次数:{{count}},奇数or偶数:{{evenOrOdd}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数+</button>
    <button @click="incrementAsync">异步+</button>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapState(['count']), //count:()=>{return this.$store.state.count}
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    
    // increment() {
    //   this.$store.commit("INCREMENT");
    // },
    // // 减
    // decrement() {
    //   this.$store.commit("DECREMENT");
    // },
    ...mapMutations({
      increment:'INCREMENT',
      decrement:'DECREMENT'
    }),
    ...mapActions(['incrementIfOdd','incrementAsync'])
    // 奇数+
    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // // 异步的加
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // }
  }
};
</script>
<style scoped>
</style>