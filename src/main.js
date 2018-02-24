// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

/*
*
* 执行npm publish时，将marquee模块导出即可,上面测试代码需注掉
*
*/

// import VueMarquee from './marquee.vue'
// export default VueMarquee
