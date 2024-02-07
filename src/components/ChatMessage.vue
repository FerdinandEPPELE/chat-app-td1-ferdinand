<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'
defineProps({
    message: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete'])

</script>

<template>
        <div class="flex items-center">
            <img :src="message.user.avatar" alt="avatar" class="h-10 w-10 rounded-full mr-3">
            <div>{{ message.user.name }}</div>
            <div class="ml-2 text-xs opacity-50">{{ message.date }}</div>
            <button @click="emit('delete', message.id)"><TrashIcon class="w-5 h-5"></TrashIcon></button>
        </div>
        {{ message.content }}
</template>