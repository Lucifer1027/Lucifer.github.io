import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/views/HomePage'
import ProjectsPage from '../components/views/ProjectsPage'
import NotesPage from '../components/views/NotesPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesPage
  }
]

const router = new VueRouter({
  routes: routes   // routers简写
})

export default router;