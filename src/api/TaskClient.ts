import { RestClient } from 'src/api/BaseClient'
import type { Task, TaskDto } from 'src/common/types/task'
import { TaskBuilder } from 'src/common/builders/task.builder'

export class TaskClient {
    private endpoint = '/task'

    async create(data: TaskDto): Promise<Task | null> {
        const response = await RestClient.post<TaskDto>(this.endpoint, data)
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

    async get(id: number): Promise<Task> {
        const res = await (await RestClient.get<TaskDto>(this.endpoint + '?id=' + id)).json()
        return TaskBuilder.fromDto(res)
    }
}
