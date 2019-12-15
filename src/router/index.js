import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import FavoriteMovie from '@/components/favoritemovie'
import Terms from '@/components/terms.vue'

Vue.use(Router)
Vue.use(BootstrapVue)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'favoritemovie',
      component: FavoriteMovie
    },
    {
      path: '/favoritemovie',
      name: 'favoritemovie',
      component: FavoriteMovie
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    }
  ]
})
