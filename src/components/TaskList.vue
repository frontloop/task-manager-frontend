<template>
    <div class="list">
        <TaskRow v-for="task in taskList" :task="task"/>
    </div>
  </template>

<script setup lang="ts">
import TaskRow from './TaskRow.vue'
import type { Task } from '../common/types/task'

const props = defineProps<{
        taskList?: Task[]
    }>()

</script>
  
<style>
  body {
      background-color: #12100e;
  }
</style>