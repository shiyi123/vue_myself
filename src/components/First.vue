<template>
 <div id="bgo">
   <div class="loading" @click="loading()" >loading...</div>
   <!-- <router-link :to="{name:'index'}">loading...</router-link> -->
 </div>
</template>

<script>
 export default {
   name:"first",
   data () {
     return {

     }
   },
   methods: {
     loading:function(){
        this.$router.push("/index")
     }
   }
 }
</script>

<style>
#bgo{
     width: 100%;
    height: 100%;
    position: fixed;
    background: url(../assets/bg.jpg) no-repeat center;
    background-size: 100% 100%;
    top: 0;
    margin: 0;
    padding: 0;
}
.loading{
    position: absolute;
    bottom: 30px;
    left: 2.8rem;
    height:1rem;
    width: 2rem;
    font-size :18px;
}
 
</style>
