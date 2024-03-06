<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import ChatMessage from '@/components/ChatMessage.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import { insertMessage, fetchMessages, messages, subscribeToMessage } from '@/api/messages';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const { user } = storeToRefs(useUserStore())


const mes = ref('');

subscribeToMessage()

onMounted(async () => {
    await fetchMessages()
    scrollToBottom()
})

const messagesContainer = ref(null)

const deleteMessage = (id) => {
    messages.value = messages.value.filter((mes) => mes.id != id);
}


const scrollToBottom = () => {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
}

watchEffect(() => {
    if (messages.value.length) {
        scrollToBottom()
    }
})

function addMessage() {
    if(!mes.value.trim()) return
    insertMessage(mes.value.trim(), user.value.id)
    mes.value = ''
}
</script>

<template>
    <div class="flex flex-col h-full overflow-hidden">
        <AppNavbar></AppNavbar>
        <div class="p-4 overflow-y-scroll grow" ref="messagesContainer">
            <div v-for="(mes, i) in messages" :key="i">
                <ChatMessage :mes="mes" @delete="deleteMessage"/>
            </div>
        </div>

        <div class="flex p-4">
            <textarea v-model="mes" name="message" id="message" rows="1" class="text-black" @keydown.enter.exact="addMessage"></textarea>
            <button @click="addMessage" class="ml-3 bg-blue-500 rounded-md p-r">Envoyer</button>
        </div>
    </div>
</template>