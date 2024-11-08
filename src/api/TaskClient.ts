import { RestClient } from '../api/BaseClient'
import type { Task } from '../common/types/task'
import { TaskBuilder } from '../common/builders/task.builder'

export class TaskClient {
    private endpoint = '/task'

    async create(data: Task): Promise<Task | null> {
        const response = await RestClient.post<Task>(this.endpoint + '/create', data)
        if (response.ok()) {
            return await response.json()
        } else {
            return Promise.reject()
        }
    }

    async save(data: Task): Promise<Task | null> {
        const response = await RestClient.put<Task>(this.endpoint + '/' + data.id + '/save', data)
        if (response.ok()) {
            return await response.json()
        } else {
            return Promise.reject()
        }
    }

    async getAll(): Promise<Task[]> {
        return await (await RestClient.get<Task[]>(this.endpoint + '/all')).json()
    }

    async get(id: number): Promise<Task> {
        const res = await (await RestClient.get<Task>(this.endpoint + '?id=' + id)).json()
        return TaskBuilder.fromDto(res)
    }
}
