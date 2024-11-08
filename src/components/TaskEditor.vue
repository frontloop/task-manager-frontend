<template>
    <div class="surface">
        <p class="label">Name</p>
        <input v-model="modelValue.name" placeholder="edit me" class="name-input" />
        <p><button @click="save">save</button></p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Priority, type Task } from '@/common/types/task'
import { TaskClient } from '@/api/TaskClient'
import { useTaskStore } from '@/stores/task';

const store = useTaskStore()

const name = ref('')

const props = defineProps<{
        modelValue: Task
    }>()

    const emit = defineEmits(['ontasksaved'])

const taskClient: TaskClient = new TaskClient()

const save = async () => {
    await taskClient.create({name: props.modelValue.name, done: false, priority: Priority.NORMAL})
    emit('ontasksaved')
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