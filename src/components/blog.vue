<template>
<div class="blog"><iframe src="http://blog.sina.com.cn/s/blog_e995ebfb0102x384.html" style="height:530px;width:100%"></iframe>
<div style="margin-top:50px">以上为个人纯属爱好,编写的gulp博客</div>
<div>附上此demo的github地址:https://github.com/shiyi123/vue_myself.git</div>
     <Footers></Footers>
</div>
   
</template>

<script>
import Footers from '@/components/footer'
export default {
name:"blog",
 components:{
      Footers,
  },
  data() {
    return {
      active: 2
    }
  }
}
</script>

<style>
.blog{
  font-size:18px;
}
</style>
