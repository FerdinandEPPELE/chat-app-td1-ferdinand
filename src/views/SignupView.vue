<script setup>
    import appInput from '@/components/AppInput.vue';
    import router from '@/router';
    import { ref } from 'vue';
    import { supabase } from '@/supabase';

    
    const email = ref('')
    const username = ref('')
    const password = ref('')

    const signup = async() => {
        const {error} = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            option: {
                data: {username: username.value}
            }
        })

        if (error) {
            alert(error)
        } else {
            router.push({name: 'chat'})
        }
    }
    
</script>

<template>
    <div>
        <form @submit.prevent="signup" class="flex flex-col gap-2 p-4 mx-auto max-w-96">
            <label for="email">Email</label>
            <appInput v-model="email" type="email" id="email" autocomplete="email" required/>
            <label for="username">Nom d'utilisateur</label>
            <appInput v-model="username" type="text" id="username" autocomplete="username" required/>
            <label for="password">Mot de passe</label>
            <appInput v-model="password" type="password" id="password" autocomplete="new-password" required/>
            <button type="submit">Créer un compte</button>
        </form>
    </div>
</template>