<script setup>
import { supabase } from '@/supabase';
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

onMounted(async () => {
    supabase.auth.onAuthStateChange((event, session) => {
        useUserStore().fetchUserProfile(session?.user?.id)
    })
})
</script>

<template>
    <div class="bg-gray-800 h-full text-white">
        <RouterView></RouterView>
        </div>
</template>

<style scoped></style>
