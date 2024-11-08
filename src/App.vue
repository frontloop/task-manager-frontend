<script setup lang="ts">
import TaskList from './components/TaskList.vue'
import TaskEditor from './components/TaskEditor.vue'
import type { Task } from './common/types/task'
import { ref } from 'vue'

const taskEditorOpen = ref<boolean>(true)
const taskEdit = ref<Task>( {id: -1, name: ''} )
</script>

<template>
      <TaskList />
      <div class="editor">
        <TaskEditor v-if="taskEditorOpen" :model-value="taskEdit" />
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
