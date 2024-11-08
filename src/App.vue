<script setup lang="ts">
import TaskList from './components/TaskList.vue'
import TaskEditor from './components/TaskEditor.vue'
import { Priority, type Task } from './common/types/task'
import { TaskClient } from './api/TaskClient'
import { ref, onMounted } from 'vue'

const taskClient: TaskClient = new TaskClient()

const taskEditorOpen = ref<boolean>(true)
const taskEdit = ref<Task>( {id: -1, name: '', done: false, created: '', priority: Priority.NORMAL} )
const taskList = ref<Task[]>()

onMounted(() => {
  loadTaskList();
})

const loadTaskList = () => {
  taskClient.getAll().then((list: Task[]) => {
    taskList.value = list
  })
}
</script>

<template>
      <TaskList :task-list="taskList"/>
      <container v-if="taskEditorOpen" class="editor">
        <TaskEditor :model-value="taskEdit" @ontasksaved="loadTaskList(), taskEditorOpen = false" />
      </container>
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
