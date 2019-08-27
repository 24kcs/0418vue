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
export default {
  // data中的数据状态
  data () {
    return {
      count:0 // 属性 数据状态
    }
  },
  computed: {
    // get操作
    evenOrOdd(){
      return this.count%2===0?'偶数':'奇数'
    }
  },
  methods: {
    // 修改data中的状态数据
    // 加
    increment(){
      this.count++
    },
    // 减
    decrement(){
      this.count--
    },
    // 奇数+
    incrementIfOdd(){
      if(this.count%2!==0){
        this.count++
      }
    },
    // 异步的加
    incrementAsync(){
      setTimeout(()=>{
        this.count++
      },1000)
    }
  }
}
</script>
<style scoped>
</style>