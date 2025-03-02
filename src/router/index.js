import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import { useAuthStore } from '@/stores/auth'
import CreateView from '@/views/Posts/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { guest: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guest: true}
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
      meta: { auth: true}
    },
  ],
})

//Guard routes redirect 
router.beforeEach(async (to, from)=>{
  const authStore = useAuthStore();
  await authStore.getUser()

  // if user is authenticated, and tries to access guest route
  if(authStore.user && to.meta.guest){
    return {name: "home"}
  }

   // if user is not authenticated, and tries to access authenticated route
  if(!authStore.user && to.meta.auth){
    return {name: "login"}
  }

});
export default router
