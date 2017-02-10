import { MinimongoEntity } from './../../minimongo/minimongo.module';

export interface Task extends MinimongoEntity {
    tag: string;
    score: number;
}
