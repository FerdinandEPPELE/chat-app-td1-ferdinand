<script setup>
import { ref } from 'vue';
import ChatMessage from '@/components/ChatMessage.vue';
import AppNavbar from '@/components/AppNavbar.vue';

const mes = ref('');
const mess = ref([]);

const deleteMessage = (id) => {
    mess.value = mess.value.filter((mes) => mes.id != id);
}

function addMessage() {
    if (mes.value != '') {
        mess.value.push({
            id: mess.value.length,
            content: mes.value,
            date: new Date().toLocaleDateString(),
            user: {
                name: 'moi',
                avatar: 'https://media.licdn.com/dms/image/C4D03AQH0TuKfHrOpfQ/profile-displayphoto-shrink_400_400/0/1607679351861?e=2147483647&v=beta&t=a2zxWJKCOT4EasStDlHtACsP2DwoH5fFWX6uudlQpe4'
            }
        });
    }
    mes.value = '';
}
</script>

<template>
    <AppNavbar></AppNavbar>
    <div class="p-4">
        <div v-for="(mes, i) in mess" :key="i">
            <ChatMessage :mes="mes" @delete="deleteMessage"/>
        </div>
    </div>

    <div class="flex p-4">
        <textarea v-model="mes" name="message" id="message" rows="1" class="text-black"></textarea>
        <button @click="addMessage" class="ml-3 bg-blue-500 rounded-md p-r">Envoyer</button>
    </div>
</template>