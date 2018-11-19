<template>
<div>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="shop" to="/index" >首页</van-tabbar-item>
    <van-tabbar-item icon="chat" to="./project" >项目介绍</van-tabbar-item>
    <van-tabbar-item icon="records" to="./blog">博客</van-tabbar-item>
    </van-tabbar>
  </div>
     
</template>

<script>
export default {
  name:'footers',
 data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
