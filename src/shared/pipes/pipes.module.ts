import { NgModule } from '@angular/core';

import { FilterEntitiesPipe } from './filter-entities/filter-entities.pipe';
import { GetKeysPipe } from './get-keys/get-keys.pipe';
import { ObjectToArrayPipe } from './object-to-array/object-to-array.pipe';

@NgModule({
  declarations: [FilterEntitiesPipe, ObjectToArrayPipe, GetKeysPipe],
  exports: [FilterEntitiesPipe, ObjectToArrayPipe, GetKeysPipe],
})
export class PipesModule {}
