<template>
    <div style="margin:0;padding:0"> 
    <van-swipe :autoplay="1000" :height="165">
    <van-swipe-item><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=581021037,1227266908&fm=27&gp=0.jpg"></van-swipe-item>
    <van-swipe-item><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=581021037,1227266908&fm=27&gp=0.jpg"></van-swipe-item>
    <van-swipe-item><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=967395617,3601302195&fm=27&gp=0.jpg"></van-swipe-item>
    </van-swipe>
    <van-notice-bar
    text="welcome to myself introdution   welcome to myself introdution      welcome to myself introdution     "
    left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
    />
    <van-panel title="工作年限" desc="3年" status="目前状态">
    </van-panel>
     <van-panel title="应聘职位" desc="web前端开发工程师" status="目前状态">
    </van-panel>
     <van-panel title="年龄" desc="26" status="目前状态">
    </van-panel>
     <van-panel title="是否婚配" desc="否" status="目前状态">
    </van-panel>
    <van-panel title="工作经历" desc="公司介绍" status="目前状态">
        <div>
        <span style="text-align:left!important">北京好药师医药有限公司:2015年11月3日-2016年6月</span><br>
        <span style="text-align:left!important">北京清研迅科科技有限公司:2016年7月15日-至今</span>
        </div>
    </van-panel>
     <van-panel title="职业技能" desc="技能介绍" status="目前状态">
        <div class="skill">
        	<van-icon name="certificate" /><span>精通HTML+CSS，解决不同浏览器的兼容性问题</span><br><br>
        	<van-icon name="certificate" /><span>精通flexbox布局，REM进行移动端布局和响应式设计</span><br><br>
        	<van-icon name="certificate" /><span>熟练运用JQuery和原生JS，实现常见动态效果和交互效果</span><br><br>
            <van-icon name="certificate" /><span>熟练运用angularjs开发项目</span><br><br>
            <van-icon name="certificate" /><span>熟练运用angular2开发项目</span><br><br>
        	<van-icon name="certificate" /><span>熟练运用Vue+vue-router+vuex+axios开发项目</span><br><br>
        	<van-icon name="certificate" /><span>熟练运用fetch，Ajax跨域（jsonp，服务器代理）和后台交互</span><br><br>
        	<van-icon name="certificate" /><span>熟练使用git，svn版本管理工具，webpack，gulp前端工程化开发工具</span><br><br>
        	<van-icon name="certificate" /><span>熟练使用第三方组件库PC（bootstrap，Andt，Element）web（MUI，Mint）插件方面echars，highchar，Swiper，iscorll等插件</span><br><br>
        	<van-icon name="certificate" /><span>了解MVC、MVVM思想，CommonJs、AMD、CMD 模块化开发规范</span><br><br>
        	<van-icon name="certificate" /><span>熟悉NODE.JS,MySql后台数据库以及php等后台编程语言，了解http协议</span><br>
            <br>
            <br>
            <br>
            <br>
        </div>
    </van-panel>
    
   <Footers></Footers>
    </div>
   
</template>

<script>
import Footers from '@/components/footer'
export default {
  name: "index",
  components:{
      Footers,
  },
   data() {
    return {
      active: 0
    }
  }
 
};
</script>

<style>
.van-cell{
   background-color: #000 
}
.van-cell__value{
    color:green!important
}
.van-panel__content{
    font-size:14px;
    background: #000;
    color:#B0C4DE;
   
}
.van-cell__title{
    color:#FFE4C4
}
.van-cell__label{
 color:#B0C4DE
}

.skill{
    text-align:left;
     margin-left: 28px
}


</style>
