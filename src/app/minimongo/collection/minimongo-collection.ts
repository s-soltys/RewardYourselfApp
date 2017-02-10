import { MinimongoEntity } from './minimongo-entity';

export interface MinimongoCollection<T extends MinimongoEntity> {
    find(selector?, options?): { fetch(success?, error?) };
    upsert(docs?, bases?, success?, error?);
    remove(id: string, success?);
}