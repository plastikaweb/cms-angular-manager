import { SelectOptionsUtils } from '@shared/utils';

export enum RoomTypes {
  aparatos = 'aparatos',
  consulta = 'consulta',
  dilatar = 'dilatar',
  documento = 'documento',
  espera = 'espera',
  mesa = 'mesa',
  prueba = 'prueba',
  prueba_device = 'prueba device',
  quirofano = 'quirófano',
  recepcion = 'recepción',
}

export const RoomTypesOptions = SelectOptionsUtils.getOptionsFromEnum(
  RoomTypes
);
