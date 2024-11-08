<template>
    <div class="list">
        <TaskRow v-for="task in taskList" :task="task"/>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TaskRow from './TaskRow.vue'
import type { Task } from '../common/types/task'
import { TaskClient } from '../api/TaskClient'

const taskList = ref<Task[]>()
  const taskClient: TaskClient = new TaskClient()

onMounted(() => {
  taskClient.getAll().then((messauftragList: Task[]) => {
    taskList.value = messauftragList
  })
})

</script>
  
<style>
  body {
      background-color: #12100e;
  }
</style>