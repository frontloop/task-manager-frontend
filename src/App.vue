<script setup lang="ts">
import TaskList from './components/TaskList.vue'
import TaskEditor from './components/TaskEditor.vue'
import { Priority, type Task } from './common/types/task'
import { ref, onMounted } from 'vue'

import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore()

const taskEdit = ref<Task>( {id: -1, name: '', done: false, created: '', priority: Priority.NORMAL} )

onMounted(() => {
  taskStore.getAll()
})

</script>

<template>
      <TaskList />
      <div v-if="taskStore.taskEditorOpen" class="editor">
        <TaskEditor :model-value="taskEdit" @ontasksaved="taskStore.getAll(), taskStore.taskEditorOpen = false" />
      </div>
</template>

<style scoped>
.editor {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 34, 32, 0.9);
}
</style>
