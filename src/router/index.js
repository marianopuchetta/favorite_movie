import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import FavoriteMovie from '@/components/favoritemovie'

Vue.use(Router)
Vue.use(BootstrapVue)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'favoritemovie',
      component: FavoriteMovie
    }
  ]
})
