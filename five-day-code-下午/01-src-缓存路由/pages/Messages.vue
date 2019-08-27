<template>
 <div>
   <ul>
     <li v-for="(m,index) in messages" :key="index">
       <router-link replace :to="`/home/messages/detail/${m.id}`">{{m.title}}</router-link>
       ----<button @click="pushClick(m.id)">push查看</button>
       -----<button @click="replaceClick(m.id)">replace查看</button>
     </li>
   </ul>
   <hr>
   <button @click="$router.back()">返回</button>
   <hr>
   <router-view></router-view>
 </div>
</template>
<script>
export default {
  data () {
    return {
      // 空数组
      messages:[]
    }
  },
  mounted () {
    setTimeout(()=>{
      this.messages=[
        {id:1,title:'messages001'},
        {id:3,title:'messages003'},
        {id:5,title:'messages005'}
      ]
    },1000)
  },
  methods: {
    // push查看----编程式路由跳转
    pushClick(id){
      this.$router.push(`/home/messages/detail/${id}`)
    },
    // replace查看---编程式路由跳转
    replaceClick(id){
      this.$router.replace(`/home/messages/detail/${id}`)
    }
  }
}
</script>
<style scoped>
</style>