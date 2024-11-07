import type { Task, TaskDto } from 'src/common/types/task'
export class TaskBuilder {
    static toDto = (data: Task): TaskDto => {
        return {
            id: data.id,
            name: data.name,
        }
    }

    static fromDto = (data: TaskDto): Task => {
        return {
            id: data.id ?? 0,
            name: data.name,
        }
    }

    static create = (raw: Partial<Task> = {}): Task => {
        return {
            ...raw,
            id: raw.id ?? 0,
            name: raw.name ?? '',
        }
    }
}
