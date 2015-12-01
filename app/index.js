var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
Vue.use(require('vue-resource'));

var router = new VueRouter({
  hashbang: false,
  history: true
});

var initComponents = require('vue-desktop').initComponents;
initComponents(Vue);

import { default as routes } from './route';
router.map(routes);

router.start(Vue.extend({
  components: {
    app: require('./app.vue')
  }
}), 'body');