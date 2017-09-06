
import Vue from 'vue';
import App from './App';
import router from './router';
import store  from './store';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

import '@/assets/css/font-awesome.min.css';
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
