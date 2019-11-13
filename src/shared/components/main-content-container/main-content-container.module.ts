import { NgModule } from '@angular/core';
import { CardModule } from '@shared/components/card/card.module';

import { MainContentContainerComponent } from './main-content-container.component';

@NgModule({
  declarations: [MainContentContainerComponent],
  imports: [CardModule],
  exports: [MainContentContainerComponent],
})
export class MainContentContainerModule {}
