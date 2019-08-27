<template>
  <div>
    <h1>About</h1>
    <input type="text" v-model="msg"/>
  </div>
</template>
<script>
export default {
  props:{
    msg:String
  }
}
</script>
<style scoped>
</style>