<script setup>
    import {reactive} from 'vue'
    import {storeToRefs} from 'pinia';
    import {useAuthStore} from '@/stores/auth';
  

    // Error state 
    const { errors } = storeToRefs(useAuthStore());
    //Auth store
    const { authenticate } = useAuthStore();

    const formData = reactive({
        email: '',
        password: '',
    });

    const submit = () => authenticate('login', formData);
    

</script>
<template>
    <main>
        <h1 class="title">Login to your account</h1>

        <form @submit.prevent="submit" class="w-1/2 mx-auto space-y-6">
            <div>
                <input type="text" placeholder="Email" v-model="formData.email">
                <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
            </div>
            <div>
                <input type="password" placeholder="Password" v-model="formData.password">
                <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>
            </div>
            <button class="primary-btn">Login</button>
        </form>
    </main>
</template>

