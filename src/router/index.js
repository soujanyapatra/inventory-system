import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemCategory from '../components/ItemCategory.vue'
import ItemsView from '../components/ItemsView.vue'
import AddCategory from '../components/AddCategory.vue'
import AddItem from '../components/AddItem.vue'
import AllCategory from '../components/AllCategory.vue'
import AllItems from '../components/AllItems.vue'
import EditTask from '../components/EditTask.vue'
import EditItem from '../components/EditItem.vue'

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
    component: AllCategory
  },
  {
    path: '/addnewcategory',
    name: 'addnewcategory',
    component: AddCategory
  },
  {
    path: '/allitems',
    name: 'allitems',
    component: AllItems
  },
  {
    path: '/addnewitem',
    name: 'addnewitem',
    component: AddItem
  },
  {
    path: '/Edittask/:id',
    name: 'Edittask',
    component: EditTask
  },
  {
    path: '/Edititem/:id',
    name: 'Edititem',
    component: EditItem
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
