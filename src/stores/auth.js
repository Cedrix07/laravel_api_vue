import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
   state: () => {
        return {
            user: null,
            errors: {},
        }
   },
   actions: {

         /*************** get authenticated User **********************/        
        async getUser(){
            if(localStorage.getItem('token')){
                const response = await fetch('/api/user', {
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                if(response.ok){
                    this.user = data;
                }
                console.log(data)
            }
        },
        /*************** Login or Register User **********************/
        async authenticate(apiRoute, formData){
            const response = await fetch(`/api/${apiRoute}`, {
                method: 'post',
                body: JSON.stringify(formData)
            })

            const data = await response.json();

            if(data.errors){
                this.errors = data.errors;
            }else{
                localStorage.setItem('token', data.token);
                this.user = data.user;
                // redirect to a route
                this.router.push({name: 'home'})
            }
        }
   } 
}); 