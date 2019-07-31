import Vue from 'vue';
import App from './App.vue';
import { router } from './routing.config';
import './assets/styles.css';
import * as directives from './directives/Scrollable';

Vue.config.productionTip = false;

Vue.directive('infinite-scroll', directives.InfiniteScroll);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
