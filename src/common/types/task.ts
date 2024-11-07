import type { Entity } from 'src/common/types/entity'

export interface Task extends Entity {
    name: string
}

export interface TaskDto {
    id?: number
    name: string
}
