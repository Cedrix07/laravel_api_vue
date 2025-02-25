<script setup>
import { usePostsStore } from '@/stores/posts';
import { reactive } from 'vue';

// Access create Post methiod in store/posts
const { createPost } = usePostsStore();

const formData = reactive({
    title: '',
    body: ''
});

const submit = () => {
    createPost(formData);
}

</script>

<template>
    <h1 class="title">Create post</h1>
    <form @submit.prevent="submit" class="w-1/2 mx-auto space-y-6">
        <div>
            <input type="text" placeholder="Post Title" v-model="formData.title">
        </div>
        <div>
            <textarea row="6" placeholder="Post Body" v-model="formData.body"></textarea>
        </div>
        <button class="primary-btn">Create</button>
    </form>
</template>