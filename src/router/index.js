import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/views/cinema') 
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movie'),
    children:[
      {
        path:'city',
        component:() => import('@/components/city')
      },
      {
        path:'nowplaying',
        component:() => import('@/components/nowplaying')
      },
      {
        path:'comingsoon',
        component:() => import('@/components/comingsoon')
      },
      {
        path:'search',
        component:() => import('@/components/search')
      },
      {
        //路由重定向
        path: '/movie',
        redirect: '/movie/nowplaying'
      }
    ]
  },
  {
    //路由重定向
    path: '/*',
    redirect: '/movie/'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
