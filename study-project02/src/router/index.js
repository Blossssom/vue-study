import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'bindingString',
    component: () =>
      import(
        /* webpackChunkName: "binding" */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'bindingHtml',
    component: () =>
      import(
        /* webpackChunkName: "binding" */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'bindingInput',
    component: () =>
      import(
        /* webpackChunkName: "binding" */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'bindingSelect',
    component: () =>
      import(
        /* webpackChunkName: "binding" */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'bindingCheckBox',
    component: () =>
      import(
        /* webpackChunkName: "binding" */ '../views/1_databinding/DataBindingCheckBoxView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router