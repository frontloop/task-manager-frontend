<script setup lang="ts">
import TaskList from './components/TaskList.vue'
import TaskEditor from './components/TaskEditor.vue'
import type { Task } from 'src/common/types/task'
import { ref } from 'vue'

const taskEditorOpen = ref<boolean>(true)
const editedTask = ref<Task>( {id: null, name: ''} )
</script>

<template>
      <TaskList />
      <div class="editor">
        <TaskEditor v-if="taskEditorOpen" :model-value="editedTask" />
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
