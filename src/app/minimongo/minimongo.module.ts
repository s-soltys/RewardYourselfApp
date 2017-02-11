import { MinimongoEntity } from './collection/minimongo-entity';
import { MinimongoCollection } from './collection/minimongo-collection';
import { MinimongoReference } from './reference/minimongo-reference';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MinimongoConfig } from './config/minimongo-config';

@NgModule()
export class MinimongoModule {
  static forRoot(config: MinimongoConfig): ModuleWithProviders {
    return {
      ngModule: MinimongoModule,
      providers: [
        MinimongoReference,
        { provide: MinimongoConfig, useValue: config }
      ]
    };
  }
}

export {
  MinimongoConfig,
  MinimongoReference,
  MinimongoCollection,
  MinimongoEntity
}
