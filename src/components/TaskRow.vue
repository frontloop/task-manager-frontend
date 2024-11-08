<template>
    <div class="item">
        <h3>{{ task.name }}</h3>
        <p>
        <div>Done: {{ task.done }} </div>
        <div>Created: {{ displayDate(task.created) }}</div>
        <div>Priority: {{ task.priority }}</div>
        <button @click="editTask">edit</button>
        </p>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '@/common/types/task'
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore()

const props = defineProps<{ task: Task }>()

const editTask = () => {
    taskStore.task = taskStore.setEditTask(props.task)
    taskStore.taskEditorOpen = true
}

const displayDate = (created: string) => {
    const date = new Date(created).toLocaleDateString();
    const time = new Date(created).toLocaleTimeString();
    return date + ' um ' + time
}

</script>

<style>
.item {
    margin-top: 2rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #fff;
}

.item div {
    color: #fff;
}
</style>
