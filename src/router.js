import vue from 'vue'
import VueRouter from 'vue-router'
import category from './theme/category.vue'

vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/', component: category
  }]
})

export default router
