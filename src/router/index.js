import Vue from "vue";
import Router from "vue-router";
import first from "../components/First";
import index from "../components/index";
import project from "../components/project";
import blog from "../components/blog";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "first",
      component: first
    },
    {
      path: "/index",
      name: "index",
      component: index,
      
    },
    {
      path: "/project",
      name: "project",
      component: project
    },
    {
      path: "/blog",
      name: "blog",
      component: blog
    }
  ]
});
