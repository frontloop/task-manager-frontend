import { RestClient } from '../api/BaseClient'
import type { Task, TaskDto } from '../common/types/task'
import { TaskBuilder } from '../common/builders/task.builder'

export class TaskClient {
    private endpoint = '/task'

    async create(data: TaskDto): Promise<Task | null> {
        const response = await RestClient.post<TaskDto>(this.endpoint + '/create', data)
        if (response.ok()) {
            const res = await response.json()
            return TaskBuilder.fromDto(res)
        } else {
            return Promise.reject()
        }
    }

    async save(id: Number, data: TaskDto): Promise<Task | null> {
        const response = await RestClient.put<TaskDto>(this.endpoint + '/' + id + '/save', data)
        const json = await response.json()
        return TaskBuilder.fromDto(json)
    }

    async getAll(): Promise<Task[]> {
        return await (await RestClient.get<Task[]>(this.endpoint + '/all')).json()
    }

    async get(id: number): Promise<Task> {
        const res = await (await RestClient.get<TaskDto>(this.endpoint + '?id=' + id)).json()
        return TaskBuilder.fromDto(res)
    }
}
