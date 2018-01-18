import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 0.8,
  error: 'loading.png',
  loading: 'loading.png',
  attempt: 1
  // preLoad: 0.5,
  // preLoad: 1.3,
  // error: 'hamburger.svg',
  // loading: 'hamburger.svg',
  // attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  // listenEvents: [ 'scroll' ]
})
