import { MinimongoEntity } from './collection/minimongo-entity';
import { MinimongoCollection } from './collection/minimongo-collection';
import { MinimongoReference } from './reference/minimongo-reference';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MinimongoConfig, MINIMONGO_CONFIG } from './config/minimongo-config';

@NgModule()
export class MinimongoModule {
  static forRoot(config: MinimongoConfig): ModuleWithProviders {
    return {
      ngModule: MinimongoModule,
      providers: [
        MinimongoReference,
        { provide: MINIMONGO_CONFIG, useValue: config }
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
