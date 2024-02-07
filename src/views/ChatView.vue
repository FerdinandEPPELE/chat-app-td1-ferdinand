<script setup>
import {ref} from 'vue';
import ChatMessage from '@/components/ChatMessage.vue';
const messageContent = ref('');
const messages = ref([]);

const deleteMessage = (id) => {
    messages.value = messages.value.filter((message) => message.id != id);
}

const addMessage = () => {
    messages.value.push({
        id: messages.value.length,
        content: messageContent.value,
        date: new Date().toLocaleDateString(),
        user: {
            name: 'Neuille',
            avatar: 'https://i.pravatar.cc/150?img=55'
        }
        })
    messageContent.value = ''
}
</script>

<template>
    <div class="pl-4">
        <div v-for="(message, index) in messages" :key="index" class="mb-3">
            <ChatMessage :message="message" @delete="deleteMessage"></ChatMessage>
        </div>
    </div>

    <div class="flex p-4">
        <textarea v-model="messageContent" name="message" id="message" rows="1" class="text-black"></textarea>
        <button @click="addMessage" class="rounded-md bg-black p-3 ml-3">Envoyer</button>
    </div>
    
</template>