import { Entity } from './entity';

export interface Task extends Entity {
    tag: string;
    score: number;
}
