import { MinimongoConfig, MINIMONGO_CONFIG } from './../config/minimongo-config';
import { MinimongoCollection } from './../collection/minimongo-collection';
import { Inject, Injectable } from '@angular/core';
const minimongo = require('minimongo');

@Injectable()
export class MinimongoReference {
    private db;

    constructor( @Inject(MINIMONGO_CONFIG) private config: MinimongoConfig) {
        this.db = new minimongo.LocalStorageDb({ namespace: config.namespace });
    }

    get database() {
        return this.db;
    }

    getCollection<T>(collectionName: string): MinimongoCollection<T> {
        if (!this.db.collections[collectionName]) {
            this.db.addCollection(collectionName);
        }

        return this.db.collections[collectionName] as MinimongoCollection<T>;
    }

}