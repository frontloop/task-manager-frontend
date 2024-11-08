import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Task } from '@/common/types/task'
import { Priority } from '@/common/types/task'
import { TaskClient } from '@/api/TaskClient'

export const useTaskStore = defineStore('task', () => {
    const emptyTask = {id: -1, name: '', done: false, created: '', priority: Priority.NORMAL}
    const task = ref<Task>(emptyTask)
    const taskList = ref<Array<Task>>([])
    const taskEditorOpen = ref<boolean>(true)
    const taskClient: TaskClient = new TaskClient()

    async function get(id: number): Promise<Task | null> {
        try {
            const response = await taskClient.get(id)
            task.value = response
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

    const save = async () => {
        try {
            const response = await taskClient.save(task.value)
            if (!response || response == null) throw new Error('Task konnte nicht gespeichert werden')

            return true
        } catch (error) {
            return false
        }
    }

    const create = async () => {
        try {
            const response = await taskClient.create(task.value)
            if (!response || response == null) throw new Error('Task konnte nicht angelegt werden')
            
                return true
        } catch (error) {
            return false
        }
    }

    const setEditTask = (original: Task) => {
        return { id: original.id, name: original.name, done: original.done, created: original.created, priority: original.priority }
    }

    const resetEditedTask = () => {
        task.value = emptyTask
    }

    return {
        task,
        taskList,
        taskEditorOpen,
        create,
        save,
        getAll,
        resetEditedTask,
        setEditTask,
    }
})
