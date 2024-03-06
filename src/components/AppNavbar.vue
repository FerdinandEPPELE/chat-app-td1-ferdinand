<script setup>

import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

const { user } =  storeToRefs(useUserStore())

const router = useRouter()

const logout = async () => {
    await supabase.auth.signOut()

    router.push({name: 'login'})
}

</script>

<template>
    <header class="flex items-center justify-between p-3 bg-slate-600">
        <div v-if="user">username : {{ user.username }}</div>
        <button class="ml-auto" @click="logout">Se déconnecter</button>
    </header>
</template>