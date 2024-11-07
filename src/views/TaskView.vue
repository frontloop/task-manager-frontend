<template>
    <div class="list">
        <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
  </WelcomeItem>
    </div>
  </template>

<script setup lang="ts">
import type { Kontakt } from 'src/common/types/kontakt'
import { ref } from 'vue'

defineProps<{
  task: Task[]
}>()
</script>
  
  <style>
    
  </style>