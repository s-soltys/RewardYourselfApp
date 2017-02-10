import { MinimongoConfig, MINIMONGO_CONFIG } from './../config/minimongo.config';
import { MinimongoCollection } from './../collection/minimongo-collection';
import { Inject, Injectable } from '@angular/core';
const minimongo = require('minimongo');

@Injectable()
export class MinimongoReference {
    private db;

    constructor(@Inject(MINIMONGO_CONFIG) private config: MinimongoConfig){
        this.db = new minimongo.LocalStorageDb({ namespace: config.namespace });

        config.collections.forEach(name => {
            if (!this.db.collections[name]) {
                this.db.addCollection(name);
            }
        });
    }

    get database() {
        return this.db;
    }

    getCollection<T>(collectionName: string): MinimongoCollection<T> {
        return this.db[collectionName] as MinimongoCollection<T>;
    }
    
}