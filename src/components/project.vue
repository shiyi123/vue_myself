<template>
<div class="project">
  <h4>项目介绍</h4>
  <h5>2015年11月-2016年6月</h5>
  <h5>参与好药师官网项目编写，好药师内部系统，通过jquery以及原生js，搭建官网框架</h5>
   <h5>pc端，前后端分离，静态页面与交互功能实现</h5>
   <h5>因公司需搬迁到武汉总部，无奈自主辞职</h5><br>
   <h5>2017年7月-至今</h5>
  <h5>参与清研讯科公司官网页面搭建以及选型</h5>
   <h5>pc端，前后端分离，angularjs实现定位系统功能</h5>
   <h5>openlayer方法调用，地图绘制功能，通过原生</h5>
   <h5>angular 2 搭建容量监控页面，实现容量监控</h5>
   <h5>通过php模板更改官网及相关网站</h5>
   <h5>相继完成了几个版本的迭代，顺利实现版本升级</h5>
    <h5>大型公司的定制功能完成，以及bug相关修复</h5>
 <Footers></Footers>
</div>
</template>

<script>
import Footers from '@/components/footer'
export default {
name:"project",
components:{
      Footers,
  },
  data() {
    return {
      active:1
    }
  }
}
</script>

<style scoped>
.project>h4{
  font-size: 16px;
    text-align: left
}
.project>h5{
  font-size: 14px;
  text-align: left
}
</style>
