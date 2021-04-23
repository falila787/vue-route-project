import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/house.vue'
import Dashboard from '../views/Dashboard/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/404.vue')
},
{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [{
        path: 'user',
        name: 'dashboard-user',
        component: () =>
            import ('../views/Dashboard/users.vue'),
        children: [{
            path: ':id',
            name: 'dashboard-single-user',
            component: () =>
                import ('../views/Dashboard/SingleUser.vue')
        }]
    }]
},
{
    path: '/house',
    name: 'house',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/house.vue')
},
{
    path: '/user/:id',
    name: 'users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/user1.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
