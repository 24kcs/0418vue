<template>
  <div>
    <mt-button type="default" style="width:100%" @click="showTest">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  methods: {
    showTest() {
      Toast({
        message: "提示",
        position: "bottom",
        duration: 2000
      });
    }
  }
};
</script>
<style scoped>
</style>