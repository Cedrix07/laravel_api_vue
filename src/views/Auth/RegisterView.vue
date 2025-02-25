<script setup>
    import {reactive} from 'vue'
    import {storeToRefs} from 'pinia';
    import {useAuthStore} from '@/stores/auth';
    import {onMounted} from 'vue';

    // Error state 
    const { errors } = storeToRefs(useAuthStore());
    //Auth store
    const { authenticate } = useAuthStore();

    const formData = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const submit = () => authenticate('register', formData);

     // Reset error state
     onMounted(() => errors.value = {})
</script>
<template>
    <main>
        <h1 class="title">Register a new account</h1>

        <form @submit.prevent="submit" class="w-1/2 mx-auto space-y-6">
            <div>
                <input type="text" placeholder="Name" v-model="formData.name">
                <p v-if="errors.name" class="error">{{ errors.name[0] }}</p>
            </div>
            <div>
                <input type="text" placeholder="Email" v-model="formData.email">
                <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
            </div>
            <div>
                <input type="password" placeholder="Password" v-model="formData.password">
                <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>
            </div>
            <div>
                <input type="password" placeholder="Confirm password.." v-model="formData.password_confirmation">
            </div>
            <button class="primary-btn">Register</button>
        </form>
    </main>
</template>

