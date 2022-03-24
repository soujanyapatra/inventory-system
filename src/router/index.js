import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/HomeView.vue'
import ItemCategory from '../layouts/ItemCategory.vue'
import ItemsView from '../layouts/ItemsView.vue'
import addc from '../views/add-new-category/add.vue'
import add from '../views/add-new-item/add.vue'
import allc from '../views/all-category/all.vue'
import all from '../views/all-item/all.vue'
import editc from '../views/edit-category/edit.vue'
import edit from '../views/edit-item/edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/itemcategory',
    name: 'itemcategory',
    component: ItemCategory
  },
  {
    path: '/items',
    name: 'items',
    component: ItemsView
  },
  {
    path: '/allcategory',
    name: 'allcategory',
    component: allc
  },
  {
    path: '/addnewcategory',
    name: 'addnewcategory',
    component: addc
  },
  {
    path: '/allitems',
    name: 'allitems',
    component: all
  },
  {
    path: '/addnewitem',
    name: 'addnewitem',
    component: add
  },
  {
    path: '/editcategory/:id',
    name: 'Edittask',
    component: editc
  },
  {
    path: '/edititem/:id',
    name: 'Edititem',
    component: edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
