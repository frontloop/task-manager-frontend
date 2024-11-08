import type { Task, TaskDto } from 'src/common/types/task'
export class TaskBuilder {
    static toDto = (data: Task): TaskDto => {
        return {
            id: data.id,
            name: data.name,
            done: data.done,
            created: data.created,
            priority: data.priority,
        }
    }

    static fromDto = (data: TaskDto): Task => {
        return {
            id: data.id ?? 0,
            name: data.name,
            done: data.done,
            created: data.created,
            priority: data.priority,
        }
    }
}
