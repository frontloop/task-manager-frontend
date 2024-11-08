<template>
    <div class="list">
        <TaskRow v-for="task in taskStore.taskList" :task="task" />
    </div>
  </template>

<script setup lang="ts">
import TaskRow from './TaskRow.vue'
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore()

</script>
  
<style>
  body {
      background-color: #12100e;
  }
</style>