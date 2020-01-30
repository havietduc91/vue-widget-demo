import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/to-do-list',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
