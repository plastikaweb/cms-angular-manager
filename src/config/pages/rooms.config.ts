import { ActionsState } from '@app/entities/actions';
import { RoomsFieldConfig } from '@config/forms-builders';
import { Store } from '@ngrx/store';
import {
    ButtonsGroupConfig, EntityListViewFilter, PageConfig, RoomTypesOptions
} from '@shared/models';
import { ErrorUtils } from '@shared/utils';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Observable } from 'rxjs';

export class RoomsConfig implements PageConfig {
  constructor(private store: Store<ActionsState>) {}

  private getText() {
    return {
      header: '<i class="zmdi zmdi-seat"></i> Salas',
      listTitle: 'Listado de salas',
      createTitle: 'Crear nueva sala: ',
    };
  }

  private getButtons(view: 'list' | 'create'): ButtonsGroupConfig {
    switch (view) {
      case 'list':
        return {
          alwaysVisible: false,
          pristineVisible: false,
          layout: 'row',
          showIcon: true,
          showLabel: true,
        };
      case 'create':
        return {
          alwaysVisible: true,
          pristineVisible: false,
          layout: 'row',
          showIcon: true,
          showLabel: true,
        };
    }
    return ErrorUtils.unreachable(view);
  }

  private getFilter(): Array<EntityListViewFilter> {
    return [
      {
        field: 'name',
        name: 'nombre',
        inputType: 'text',
        exactValue: false,
      },
      {
        field: 'type',
        name: 'tipo',
        items: RoomTypesOptions,
        inputType: 'select',
        exactValue: true,
      },
    ];
  }

  private getFields(): Observable<Array<FormlyFieldConfig>> {
    return new RoomsFieldConfig(this.store).getFields();
  }

  getConfig() {
    return {
      text: this.getText(),
      buttons: {
        list: this.getButtons('list'),
        create: this.getButtons('create'),
      },
      filter: this.getFilter(),
      fields: this.getFields(),
    };
  }
}
