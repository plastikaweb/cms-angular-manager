import { PagesState } from '@app/pages/store/reducers';

import { actionsEntitiesMock } from './actions.mock';
import { roomsEntitiesMock } from './rooms.mock';
import { tagFamiliesEntitiesMock } from './tag-families.mock';
import { tagsEntitiesMock } from './tags.mock';

export const pagesMockState: PagesState = {
  rooms: roomsEntitiesMock,
  actions: actionsEntitiesMock,
  tagFamilies: tagFamiliesEntitiesMock,
  tags: tagsEntitiesMock,
  global: { pendingEdition: false },
};
