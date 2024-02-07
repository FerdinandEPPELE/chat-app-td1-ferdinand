<script setup>
import AppInput from '@/components/AppInput.vue';
import { reactive } from 'vue';

const {email, username, password} = reactive({
    email: '',
    username: '',
    password: ''
})

</script>

<template>
    <div>
        <form class="flex flex-col gap-2 p-4 max-w-96 mx-auto">
            <label for="email" >Email</label>
            <AppInput v-model="email" type="email" id="email" />

            <label for="email">Username</label>
            <AppInput v-model="username" type="text" id="username" />

            <label for="email">Mot de passe</label>
            <AppInput v-model="password" type="password" id="password" />

            <button type="submit">Créer un compte</button>
        </form>
    </div>
</template>