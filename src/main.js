// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NoticeBar } from 'vant';
import { Panel } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Panel);
Vue.use(NoticeBar);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button);

import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
