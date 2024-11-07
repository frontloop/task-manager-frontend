<template>
    <div class="surface">
        <p class="label">Name</p>
        <input v-model="modelValue.name" placeholder="edit me" class="name-input" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from 'src/common/types/task'

const name = ref('')

const props = defineProps<{
        modelValue: Task
    }>()
</script>

<style scoped>
.surface {
    position: absolute;
    top: 300px;
    left: 500px;
}

.label {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-bottom: 2px;
}

.name-input {
    width: 300px;
}
</style>