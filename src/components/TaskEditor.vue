<template>
    <div class="surface">
        <p class="label">Name</p>
        <input v-model="modelValue.name" placeholder="edit me" class="name-input" />
        <p><button @click="save">save</button></p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '../common/types/task'
import { TaskClient } from '../api/TaskClient'

const name = ref('')

const props = defineProps<{
        modelValue: Task
    }>()

const taskClient: TaskClient = new TaskClient()

const save = () => {
    taskClient.create({name: props.modelValue.name})
}
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