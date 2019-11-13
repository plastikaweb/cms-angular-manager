import { ActionsEffects } from '@app/entities/actions/store/effects/actions.effects';
import { GlobalEntitiesEffects } from '@app/entities/global/store/effects/global-entities.effects';
import { RoomsEffects } from '@app/entities/rooms/store/effects/rooms.effects';
import { TagFamiliesEffects } from '@app/entities/tag-families/store/effects/tag-families.effects';
import { TagsEffects } from '@app/entities/tags/store/effects/tags.effects';

export const effects: any[] = [
  RoomsEffects,
  ActionsEffects,
  TagFamiliesEffects,
  TagsEffects,
  GlobalEntitiesEffects,
];
