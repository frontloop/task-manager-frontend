<template>
    <div class="item">
        <h3>{{ task.name }}</h3>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '../common/types/task'
    const props = defineProps<{
        task: Task
    }>()
</script>

<style>
.item {
    margin-top: 2rem;
    display: flex;
    position: relative;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #fff;
}
</style>
