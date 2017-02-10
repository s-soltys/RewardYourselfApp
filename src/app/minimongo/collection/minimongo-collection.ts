import { MinimongoEntity } from './minimongo-entity';

export interface MinimongoCollection<T extends MinimongoEntity> {
    find(selector?: any, options?: any): { fetch: Callback<T[]> };
    upsert(docs?: any, success?: Success<T>, error?: Error);
    remove(id: string, success?: () => void);
}

type Success<T> = (result: T) => void;
type Error = (error: any) => void;

interface Callback<T> {
    (success?: Success<T>, error?: Error);
}