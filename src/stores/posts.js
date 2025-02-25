import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
    state: ()=>{
        return {
            errors: {}
        }
    },

    actions: {
        /**** Creating a post **************/
        async createPost(formData){
            const response = await fetch('/api/posts', {
                method: 'post',
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    // Accept: "application/json", it is already setup in vite config
                    // "Content-Type": "application/json" it is already setup in vite config
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            console.log(data);
        }
    }


});