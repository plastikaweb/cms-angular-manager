import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeModule } from '@shared/components/badge/badge.module';
import { CardModule } from '@shared/components/card/card.module';
import {
    ConfirmationModalContentModule
} from '@shared/components/confirmation-modal-content/confirmation-modal-content.module';
import { CustomAccordionModule } from '@shared/components/custom-accordion/custom-accordion.module';
import { CustomTreeModule } from '@shared/components/custom-tree/custom-tree.module';
import { DropdownMenuModule } from '@shared/components/dropdown-menu/dropdown-menu.module';
import {
    EntityListViewFilterModule
} from '@shared/components/entity-list-view-filter/entity-list-view-filter.module';
import { FormContainerModule } from '@shared/components/form-container/form-container.module';
import {
    MainContentContainerModule
} from '@shared/components/main-content-container/main-content-container.module';
import { ModalWrapperModule } from '@shared/components/modal-wrapper/modal-wrapper.module';
import { VirtualScrollModule } from '@shared/components/virtual-scroll/virtual-scroll.module';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    CustomAccordionModule,
    MainContentContainerModule,
    CardModule,
    DropdownMenuModule,
    BadgeModule,
    ModalWrapperModule,
    ConfirmationModalContentModule,
    FormContainerModule,
    EntityListViewFilterModule,
    CustomTreeModule,
    VirtualScrollModule,
    PipesModule,
  ],
})
export class SharedModule {}
