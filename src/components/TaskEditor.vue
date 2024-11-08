<template>
    <div class="surface">
        <p class="label">Name</p>
        <input v-model="taskStore.task.name" placeholder="edit me" class="name-input" />
        <div>Done: <input type="checkbox" v-model="taskStore.task.done"></div>
        <div>
            Priority: 
            <input type="radio" name="priority" id="priority_low" value="LOW" style="accent-color: green;" v-model="taskStore.task.priority">
            <label for="one">Low</label>
            <input type="radio" name="priority" id="priority_normal" value="NORMAL" style="accent-color: blue;" v-model="taskStore.task.priority">
            <label for="one">Normal</label>
            <input type="radio" name="priority" id="priority_urgent" value="URGENT" style="accent-color: red;" v-model="taskStore.task.priority">
            <label for="one">Urgent</label>
        </div>
        <p>
            <button @click="save">save</button>
            <button @click="cancel">cancel</button>
        </p>
    </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore()

const emit = defineEmits(['ontasksaved'])

const save = async () => {
    if (taskStore.task.id > -1) {
        await taskStore.save();
    } else {
        await taskStore.create()
    }
    emit('ontasksaved')
}

const cancel = () => {
    taskStore.resetEditedTask()
    taskStore.taskEditorOpen = false
}
</script>

<style scoped>
.surface {
    position: absolute;
    top: 300px;
    left: 500px;
}

.surface div {
    color: white;
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