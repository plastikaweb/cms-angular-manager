import { ActionsState, getActionsAll } from '@app/entities/actions';
import { select, Store } from '@ngrx/store';
import { RoomTypesOptions } from '@shared/models';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { FieldConfig } from './field-config';

import { isNil } from 'lodash';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class RoomsFieldConfig implements FieldConfig {
  constructor(private store?: Store<ActionsState>) {}

  getFields(): Observable<Array<FormlyFieldConfig>> {
    return this.formatActionsList().pipe(
      map(options => this.getFormlySignature(options))
    );
  }

  private formatActionsList(): Observable<Array<any>> {
    return this.store.pipe(
      select(getActionsAll),
      filter(actions => !isNil(actions)),
      map(actions => {
        return actions.map(action => {
          const { id: value, name: label } = action;
          return { value, label };
        });
      })
    );
  }

  private getFormlySignature(options): Array<FormlyFieldConfig> {
    return [
      {
        fieldGroupClassName: 'd-flex flex-column flex-sm-row row mb-2',
        fieldGroup: [
          {
            className: 'col-sm-6 autofocus',
            key: 'name',
            type: 'input',
            templateOptions: {
              type: 'text',
              placeholder: 'Nombre de la sala',
              required: true,
              minLength: 3,
              maxLength: 50,
              hideError: false,
            },
            focus: true,
          },
          {
            className: 'col-sm-3',
            key: 'capacity',
            type: 'input',
            templateOptions: {
              type: 'number',
              placeholder: 'Capacidad',
              required: true,
              min: 1,
              hideError: false,
            },
          },
          {
            className: 'col-sm-3',
            key: 'type',
            type: 'ngx-input-select',
            templateOptions: {
              options: RoomTypesOptions,
              required: true,
              placeholder: 'Tipo de sala',
              multi: false,
              hideError: false,
            },
          },
        ],
      },
      {
        fieldGroupClassName: 'd-flex flex-row row mb-2',
        fieldGroup: [
          {
            className: 'col-12',
            key: 'actions',
            type: 'ngx-input-select',
            templateOptions: {
              options,
              required: false,
              placeholder: 'Acciones',
              multi: true,
              hideError: false,
            },
          },
        ],
      },
    ];
  }
}
