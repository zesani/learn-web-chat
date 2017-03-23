import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Chat from '@/page/Chat'
import VueFire from 'vuefire'

// explicit installation required in module environments
Vue.use(VueFire)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
