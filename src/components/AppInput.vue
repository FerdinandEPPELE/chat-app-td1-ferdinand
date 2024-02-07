<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])



</script>

<template>
    <input v-bind="$attrs" class="rounded-md">
</template>