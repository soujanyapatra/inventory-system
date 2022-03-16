import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemCategory from '../layouts/ItemCategory.vue'
import ItemsView from '../layouts/ItemsView.vue'
import AddCategory from '../components/add-new-category/AddCategory.vue'
import AddItem from '../components/add-new-item/AddItem.vue'
import AllCategory from '../components/all-category/AllCategory.vue'
import AllItems from '../components/all-item/AllItems.vue'
import EditTask from '../components/edit-category/EditCategory.vue'
import EditItem from '../components/edit-item/EditItem.vue'

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
    path: '/editcategory/:id',
    name: 'Edittask',
    component: EditTask
  },
  {
    path: '/edititem/:id',
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
