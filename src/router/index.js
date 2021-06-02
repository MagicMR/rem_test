import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'showMessage',
      },
      {
        path: 'showMessage',
        name:'ShowMessage',
        component: ()=>import('../views/ShowMessage')
      },
      {
        path: 'contactPerson',
        name:'ContactPerson',
        component: ()=>import('../views/ContactPerson')
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: ()=>import('../views/Search')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ()=>import('../views/Chat')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
