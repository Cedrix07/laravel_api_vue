<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useAuthStore} from '@/stores/auth';
import {onMounted} from 'vue';

const authStore = useAuthStore();

</script>

<template>
  <header>
      <nav>
        <RouterLink :to="{name: 'home'}" class="nav-link">Home</RouterLink>
        
        <!-- Authenticated nav list -->
        <div v-if="authStore.user" class="flex items-center space-x-6">
          <p class="text-sm text-slate-300">Welcome back, {{ authStore.user.name }}</p>
          <RouterLink :to="{name: 'create'}" class="nav-link">New post</RouterLink>
          <form @submit.prevent="authStore.logout">
            <button class="nav-link">Logout</button>
          </form>
        </div>

        <!-- Guest nav list -->
        <div v-else class="space-x-6">
          <RouterLink :to="{name: 'register'}" class="nav-link">Register</RouterLink>
          <RouterLink :to="{name: 'login'}" class="nav-link">Login</RouterLink>
        </div>
      
      </nav>
    </header>

  <RouterView />
</template>

