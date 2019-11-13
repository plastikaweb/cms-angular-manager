import { SelectOptionsUtils } from '@shared/utils';

export enum ActionsTypes {
  cirugia = 'cirugía',
  recepcion = 'recepción',
  pasiva = 'pasiva',
  documento = 'documento',
  prueba = 'prueba',
}

export const ActionsTypesOptions = SelectOptionsUtils.getOptionsFromEnum(
  ActionsTypes
);
