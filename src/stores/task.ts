import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Task } from '@/common/types/task'
import { Priority } from '@/common/types/task'
import { TaskClient } from '@/api/TaskClient'
import { TaskBuilder } from '@/common/builders/task.builder'

export const useTaskStore = defineStore('task', () => {
    const task = ref<Task>()
    const taskList = ref<Array<Task>>([])
    const taskClient: TaskClient = new TaskClient()

    async function get(id: number): Promise<Task | null> {
        try {
            const response = await taskClient.get(id)
            task.value = TaskBuilder.create(response)
            return task.value
        } catch (e) {
            return null
        }
    }

    async function getAll() {
        taskClient.getAll().then((list: Task[]) => {
            taskList.value = list
          })
    }

    const save = async (id: Number, taskToSave: Task) => {
        try {
            const dto = TaskBuilder.toDto(taskToSave)
            const response = await taskClient.save(id, dto)
            if (!response || response == null) throw new Error('Task konnte nicht gespeichert werden')

            task.value = TaskBuilder.create(response)

            return true
        } catch (error) {
            return false
        }
    }

    const create = async (taskToSave: Task) => {
        try {
            const dto = TaskBuilder.toDto(taskToSave)
            const response = await taskClient.create(taskToSave)
            if (!response || response == null) throw new Error('Task konnte nicht angelegt werden')

            task.value = TaskBuilder.create(response)
            
                return true
        } catch (error) {
            return false
        }
    }


    return {
        task,
        taskList,
    }
})
