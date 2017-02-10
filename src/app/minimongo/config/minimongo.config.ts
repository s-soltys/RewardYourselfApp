import { OpaqueToken } from '@angular/core';

export const MINIMONGO_CONFIG = new OpaqueToken('minimongo.config');

export interface MinimongoConfig {
    readonly namespace: string;
    readonly collections: string[];
}