import { TagsState } from '@app/entities/tags';
import { OptApiResponse, Tag, TagsApiResponse } from '@shared/models';

export const tagsMock: Array<Tag> = [
  {
    id: 1,
    name: 'Párpado y añejos - Ectropión - Superior',
    cultures: {
      es: {
        od: 'Lorem ipsum od es',
        oi: 'Lorem ipsum oi es',
        ao: 'Lorem ipsum ao es',
      },
      en: {
        od: 'Lorem ipsum od en',
        oi: 'Lorem ipsum od en',
        ao: 'Lorem ipsum od en',
      },
    },
  },
  {
    id: 2,
    name: 'MOE - Limitación - Vertical',
    cultures: {
      es: {
        od: 'Sed maximus od es',
        oi: 'Sed maximus oi es',
        ao: 'Sed maximus ao es',
      },
      en: {
        od: 'Sed maximus od en',
        oi: 'Sed maximus oi en',
        ao: 'Sed maximus ao en',
      },
    },
  },
  {
    id: 3,
    name: 'MOE - Limitación - Mixta',
    cultures: {
      es: {
        od: 'Nunc eget dapibus enim od es',
        oi: 'Nunc eget dapibus enim oi es',
        ao: 'Nunc eget dapibus enim ao es',
      },
      en: {
        od: 'Nunc eget dapibus enim od en',
        oi: 'Nunc eget dapibus enim oi en',
        ao: 'Nunc eget dapibus enim ao en',
      },
    },
  },
];

export const tagsEntitiesMock: TagsState = {
  ids: [tagsMock[0].id, tagsMock[1].id, tagsMock[2].id],
  entities: {
    [tagsMock[0].id]: tagsMock[0],
    [tagsMock[1].id]: tagsMock[1],
    [tagsMock[2].id]: tagsMock[2],
  },
  loading: false,
  initiallyLoaded: true,
  totalTags: 30,
  selectedTagId: 1,
  selectedTagFamily: { id: 1, name: 'tag family name' },
  batchSize: 30,
  pageNumber: 0,
  filterTerm: '',
  totalTagsByFilter: null,
  requestedFilters: { aaa: { total: 25, received: 12 } },
};

export const tagsApiResponseMock: OptApiResponse<TagsApiResponse> = {
  payload: {
    count: 30,
    tags: tagsMock,
  },
  success: true,
};

export const tagEntitiesMock: TagsState = {
  ids: [tagsMock[0].id],
  entities: {
    [tagsMock[0].id]: tagsMock[0],
  },
  loading: false,
  initiallyLoaded: true,
  totalTags: 0,
  selectedTagId: 1,
  selectedTagFamily: { id: 1, name: 'tag family name' },
  batchSize: 30,
  pageNumber: 0,
  filterTerm: '',
  totalTagsByFilter: null,
  requestedFilters: {},
};

export const tagApiResponseMock: OptApiResponse<Tag> = {
  payload: tagsMock[0],
  success: true,
};

export const updateTagPayload = {
  id: 1,
  cultures: {
    en: {
      od: 'right eye description',
      oi: 'left eye description',
      ao: 'both eyes description',
    },
  },
};

export const tagUpdateApiResponseMock: OptApiResponse<Tag> = {
  payload: {
    id: 1,
    name: 'Párpado y añejos - Ectropión - Superior',
    cultures: {
      es: {
        od: 'Lorem ipsum od es',
        oi: 'Lorem ipsum oi es',
        ao: 'Lorem ipsum ao es',
      },
      en: {
        od: 'right eye description',
        oi: 'left eye description',
        ao: 'both eyes description',
      },
    },
  },
  success: true,
};

export const updatedTagsEntitiesMock: TagsState = {
  ids: [tagUpdateApiResponseMock.payload.id, tagsMock[1].id, tagsMock[2].id],
  entities: {
    [tagUpdateApiResponseMock.payload.id]: tagUpdateApiResponseMock.payload,
    [tagsMock[1].id]: tagsMock[1],
    [tagsMock[2].id]: tagsMock[2],
  },
  loading: false,
  initiallyLoaded: true,
  totalTags: 30,
  selectedTagId: tagUpdateApiResponseMock.payload.id,
  selectedTagFamily: null,
  batchSize: 30,
  pageNumber: 0,
  filterTerm: '',
  totalTagsByFilter: null,
  requestedFilters: {},
};
