<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'

defineProps({
    mes: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete'])
</script>

<template>
    <div class="flex items-center">
        <img :src="mes.user.avatar" alt="avatar" class="mr-3 rounded-full h-9 w-9">
        <div>{{ mes.user.name }}</div>
        <div class="ml-2 text-xs opacity-50">{{ mes.date }}</div>
        <button class="ml-2" @click="emit('delete', mes.id)"><TrashIcon class="w-5 h-5"/></button>
    </div>
    {{ mes.content }}
</template>0