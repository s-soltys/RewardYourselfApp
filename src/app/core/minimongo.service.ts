import { Injectable } from '@angular/core';
const minimongo = require('minimongo');

@Injectable()
export class MinimongoService {
    private readonly collectionNames = ['tasks'];
    private db;

    constructor(){
        this.db = new minimongo.LocalStorageDb({ namespace: 'mm' });

        this.collectionNames.forEach(name => {
            if (!this.db.collections[name]) {
                this.db.addCollection(name);
            }
        });
    }

    get database() {
        return this.db;
    }
    
    get tasks(): MinimongoCollection {
        return this.db.tasks;
    }
}

interface MinimongoCollection {
    find(selector?, options?): { fetch(success?, error?) };
    upsert(docs?, bases?, success?, error?);
}