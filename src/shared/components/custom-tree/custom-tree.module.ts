import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormContainerModule } from '../form-container/form-container.module';
import {
    CustomTreeNodeEditionComponent
} from './custom-tree-node-edition/custom-tree-node-edition.component';
import { CustomTreeComponent } from './custom-tree.component';

import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [CustomTreeComponent, CustomTreeNodeEditionComponent],
  imports: [CommonModule, FormContainerModule, TreeModule.forRoot()],
  exports: [CustomTreeComponent],
})
export class CustomTreeModule {}
