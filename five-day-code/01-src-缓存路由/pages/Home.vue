<template>
  <div>
    <h1>Home</h1>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="router-link-exact-active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link class="router-link-exact-active" to="/home/messages">Messages</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>