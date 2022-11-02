import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main.vue'
import About from '../pages/About.vue'
import Infrastructure from '../pages/Infrastructure.vue'
import Components from '../pages/Components.vue'
import Services from '../pages/Services.vue'
import Contacts from '../pages/Contacts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/infrastructure',
      name: 'Infrastructure',
      component: Infrastructure
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
