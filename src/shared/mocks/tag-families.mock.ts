import { TagFamiliesState } from '@app/entities/tag-families';
import { OptApiResponse, TagFamily } from '@shared/models';

export const tagFamiliesMock: Array<TagFamily> = [
  {
    id: 12,
    parentId: null,
    children: [
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 14,
            parentId: 13,
            children: [],
            tagId: 317,
            name: 'superior',
          },
          {
            id: 15,
            parentId: 13,
            children: [],
            tagId: 318,
            name: 'inferior',
          },
        ],
        tagId: null,
        name: 'Ectropion',
      },
      {
        id: 16,
        parentId: 12,
        children: [],
        tagId: 319,
        name: 'Lagoftalmos',
      },
    ],
    tagId: null,
    name: 'Párpado y anejos',
  },
  {
    id: 17,
    parentId: null,
    children: [
      {
        id: 35,
        parentId: 17,
        children: [],
        tagId: null,
        name: 'foria',
      },
      {
        id: 36,
        parentId: 17,
        children: [
          {
            id: 41,
            parentId: 36,
            children: [
              {
                id: 45,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipertropia',
              },
              {
                id: 46,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipotropia',
              },
            ],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 42,
            parentId: 36,
            children: [
              {
                id: 43,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'exotropia',
              },
              {
                id: 44,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'endotropia',
              },
            ],
            tagId: null,
            name: 'horizontal',
          },
        ],
        tagId: null,
        name: 'tropia',
      },
      {
        id: 37,
        parentId: 17,
        children: [
          {
            id: 38,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 39,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'horizontal',
          },
          {
            id: 40,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'mixta',
          },
        ],
        tagId: null,
        name: 'limitación',
      },
    ],
    tagId: null,
    name: 'MOE',
  },
  {
    id: 18,
    parentId: null,
    children: [
      {
        id: 23,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'pterigion',
      },
      {
        id: 24,
        parentId: 18,
        children: [
          {
            id: 31,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'nasal',
          },
          {
            id: 32,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'temporal',
          },
        ],
        tagId: null,
        name: 'pinguécula',
      },
      {
        id: 25,
        parentId: 18,
        children: [
          {
            id: 33,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'folicular',
          },
          {
            id: 34,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'alérgica',
          },
        ],
        tagId: null,
        name: 'conjuntivitis',
      },
      {
        id: 26,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'epiescleritis',
      },
      {
        id: 27,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'escleritis',
      },
      {
        id: 28,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'hiposfagma',
      },
      {
        id: 29,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'nevus',
      },
      {
        id: 30,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'conjuntivochalasia',
      },
    ],
    tagId: null,
    name: 'conjuntiva y esclera',
  },
  {
    id: 19,
    parentId: null,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del BUT',
      },
      {
        id: 21,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del menisco lagrimal',
      },
      {
        id: 22,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'shirmer disminuido',
      },
    ],
    tagId: null,
    name: 'pelicula lagrimal',
  },
];

export const tagFamiliesEntitiesMock: TagFamiliesState = {
  ids: [
    tagFamiliesMock[0].id,
    tagFamiliesMock[1].id,
    tagFamiliesMock[2].id,
    tagFamiliesMock[3].id,
  ],
  entities: {
    [tagFamiliesMock[0].id]: tagFamiliesMock[0],
    [tagFamiliesMock[1].id]: tagFamiliesMock[1],
    [tagFamiliesMock[2].id]: tagFamiliesMock[2],
    [tagFamiliesMock[3].id]: tagFamiliesMock[3],
  },
  loading: false,
  loaded: true,
  dirty: null,
  lastNodeEdition: null,
};

export const tagFamilyEntitiesMock: TagFamiliesState = {
  ids: [tagFamiliesMock[0].id],
  entities: {
    [tagFamiliesMock[0].id]: tagFamiliesMock[0],
  },
  loading: false,
  loaded: false,
  dirty: null,
  lastNodeEdition: null,
};

// reorder
// changed order on: id: 12 - id: 13 - id: 15 / id: 14
export const tagFamiliesReorderedInnerLevelMock: Array<TagFamily> = [
  {
    id: 12,
    parentId: null,
    children: [
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 15,
            parentId: 13,
            children: [],
            tagId: 318,
            name: 'inferior',
          },
          {
            id: 14,
            parentId: 13,
            children: [],
            tagId: 317,
            name: 'superior',
          },
        ],
        tagId: null,
        name: 'Ectropion',
      },
      {
        id: 16,
        parentId: 12,
        children: [],
        tagId: 319,
        name: 'Lagoftalmos',
      },
    ],
    tagId: null,
    name: 'Párpado y anejos',
  },
  {
    id: 17,
    parentId: null,
    children: [
      {
        id: 35,
        parentId: 17,
        children: [],
        tagId: null,
        name: 'foria',
      },
      {
        id: 36,
        parentId: 17,
        children: [
          {
            id: 41,
            parentId: 36,
            children: [
              {
                id: 45,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipertropia',
              },
              {
                id: 46,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipotropia',
              },
            ],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 42,
            parentId: 36,
            children: [
              {
                id: 43,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'exotropia',
              },
              {
                id: 44,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'endotropia',
              },
            ],
            tagId: null,
            name: 'horizontal',
          },
        ],
        tagId: null,
        name: 'tropia',
      },
      {
        id: 37,
        parentId: 17,
        children: [
          {
            id: 38,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 39,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'horizontal',
          },
          {
            id: 40,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'mixta',
          },
        ],
        tagId: null,
        name: 'limitación',
      },
    ],
    tagId: null,
    name: 'MOE',
  },
  {
    id: 18,
    parentId: null,
    children: [
      {
        id: 23,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'pterigion',
      },
      {
        id: 24,
        parentId: 18,
        children: [
          {
            id: 31,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'nasal',
          },
          {
            id: 32,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'temporal',
          },
        ],
        tagId: null,
        name: 'pinguécula',
      },
      {
        id: 25,
        parentId: 18,
        children: [
          {
            id: 33,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'folicular',
          },
          {
            id: 34,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'alérgica',
          },
        ],
        tagId: null,
        name: 'conjuntivitis',
      },
      {
        id: 26,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'epiescleritis',
      },
      {
        id: 27,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'escleritis',
      },
      {
        id: 28,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'hiposfagma',
      },
      {
        id: 29,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'nevus',
      },
      {
        id: 30,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'conjuntivochalasia',
      },
    ],
    tagId: null,
    name: 'conjuntiva y esclera',
  },
  {
    id: 19,
    parentId: null,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del BUT',
      },
      {
        id: 21,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del menisco lagrimal',
      },
      {
        id: 22,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'shirmer disminuido',
      },
    ],
    tagId: null,
    name: 'pelicula lagrimal',
  },
];

export const tagFamiliesEntitiesReorderedMock: TagFamiliesState = {
  ...tagFamiliesEntitiesMock,
  ids: [
    tagFamiliesMock[2].id,
    tagFamiliesMock[0].id,
    tagFamiliesMock[1].id,
    tagFamiliesMock[3].id,
  ],
  dirty: [...tagFamiliesMock],
};

export const tagFamiliesReorderedMock: Array<TagFamily> = [
  ...tagFamiliesEntitiesReorderedMock.ids,
].map(id => tagFamiliesEntitiesReorderedMock.entities[id]);

export const tagFamiliesEntitiesReorderedInnerLevelMock: TagFamiliesState = {
  ids: [
    tagFamiliesReorderedInnerLevelMock[0].id,
    tagFamiliesReorderedInnerLevelMock[1].id,
    tagFamiliesReorderedInnerLevelMock[2].id,
    tagFamiliesReorderedInnerLevelMock[3].id,
  ],
  entities: {
    [tagFamiliesReorderedInnerLevelMock[0].id]:
      tagFamiliesReorderedInnerLevelMock[0],
    [tagFamiliesReorderedInnerLevelMock[1].id]:
      tagFamiliesReorderedInnerLevelMock[1],
    [tagFamiliesReorderedInnerLevelMock[2].id]:
      tagFamiliesReorderedInnerLevelMock[2],
    [tagFamiliesReorderedInnerLevelMock[3].id]:
      tagFamiliesReorderedInnerLevelMock[3],
  },
  loading: false,
  loaded: true,
  dirty: null,
  lastNodeEdition: null,
};

// add tagFamily
export const createTagFamilyMock: Partial<TagFamily> = {
  name: 'family',
  parentId: 22,
};

export const newTagFamilyInnerLevelMock: TagFamily = {
  name: 'family',
  parentId: 22,
  id: 99,
  children: null,
  tagId: null,
};

export const newTagFamilyFirstLevelMock: TagFamily = {
  id: 100,
  parentId: null,
  children: null,
  tagId: null,
  name: 'new family',
};
export const tagFamiliesAddOnFirstLevelMock: Array<TagFamily> = [
  {
    id: 12,
    parentId: null,
    children: [
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 14,
            parentId: 13,
            children: [],
            tagId: 317,
            name: 'superior',
          },
          {
            id: 15,
            parentId: 13,
            children: [],
            tagId: 318,
            name: 'inferior',
          },
        ],
        tagId: null,
        name: 'Ectropion',
      },
      {
        id: 16,
        parentId: 12,
        children: [],
        tagId: 319,
        name: 'Lagoftalmos',
      },
    ],
    tagId: null,
    name: 'Párpado y anejos',
  },
  {
    id: 17,
    parentId: null,
    children: [
      {
        id: 35,
        parentId: 17,
        children: [],
        tagId: null,
        name: 'foria',
      },
      {
        id: 36,
        parentId: 17,
        children: [
          {
            id: 41,
            parentId: 36,
            children: [
              {
                id: 45,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipertropia',
              },
              {
                id: 46,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipotropia',
              },
            ],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 42,
            parentId: 36,
            children: [
              {
                id: 43,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'exotropia',
              },
              {
                id: 44,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'endotropia',
              },
            ],
            tagId: null,
            name: 'horizontal',
          },
        ],
        tagId: null,
        name: 'tropia',
      },
      {
        id: 37,
        parentId: 17,
        children: [
          {
            id: 38,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 39,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'horizontal',
          },
          {
            id: 40,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'mixta',
          },
        ],
        tagId: null,
        name: 'limitación',
      },
    ],
    tagId: null,
    name: 'MOE',
  },
  {
    id: 18,
    parentId: null,
    children: [
      {
        id: 23,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'pterigion',
      },
      {
        id: 24,
        parentId: 18,
        children: [
          {
            id: 31,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'nasal',
          },
          {
            id: 32,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'temporal',
          },
        ],
        tagId: null,
        name: 'pinguécula',
      },
      {
        id: 25,
        parentId: 18,
        children: [
          {
            id: 33,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'folicular',
          },
          {
            id: 34,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'alérgica',
          },
        ],
        tagId: null,
        name: 'conjuntivitis',
      },
      {
        id: 26,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'epiescleritis',
      },
      {
        id: 27,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'escleritis',
      },
      {
        id: 28,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'hiposfagma',
      },
      {
        id: 29,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'nevus',
      },
      {
        id: 30,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'conjuntivochalasia',
      },
    ],
    tagId: null,
    name: 'conjuntiva y esclera',
  },
  {
    id: 19,
    parentId: null,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del BUT',
      },
      {
        id: 21,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del menisco lagrimal',
      },
      {
        id: 22,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'shirmer disminuido',
      },
    ],
    tagId: null,
    name: 'pelicula lagrimal',
  },
  {
    id: 100,
    parentId: null,
    children: null,
    tagId: null,
    name: 'new family',
  },
];

export const tagFamiliesAddOnInnerLevelMock: Array<TagFamily> = [
  {
    id: 12,
    parentId: null,
    children: [
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 14,
            parentId: 13,
            children: [],
            tagId: 317,
            name: 'superior',
          },
          {
            id: 15,
            parentId: 13,
            children: [],
            tagId: 318,
            name: 'inferior',
          },
        ],
        tagId: null,
        name: 'Ectropion',
      },
      {
        id: 16,
        parentId: 12,
        children: [],
        tagId: 319,
        name: 'Lagoftalmos',
      },
    ],
    tagId: null,
    name: 'Párpado y anejos',
  },
  {
    id: 17,
    parentId: null,
    children: [
      {
        id: 35,
        parentId: 17,
        children: [],
        tagId: null,
        name: 'foria',
      },
      {
        id: 36,
        parentId: 17,
        children: [
          {
            id: 41,
            parentId: 36,
            children: [
              {
                id: 45,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipertropia',
              },
              {
                id: 46,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipotropia',
              },
            ],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 42,
            parentId: 36,
            children: [
              {
                id: 43,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'exotropia',
              },
              {
                id: 44,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'endotropia',
              },
            ],
            tagId: null,
            name: 'horizontal',
          },
        ],
        tagId: null,
        name: 'tropia',
      },
      {
        id: 37,
        parentId: 17,
        children: [
          {
            id: 38,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 39,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'horizontal',
          },
          {
            id: 40,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'mixta',
          },
        ],
        tagId: null,
        name: 'limitación',
      },
    ],
    tagId: null,
    name: 'MOE',
  },
  {
    id: 18,
    parentId: null,
    children: [
      {
        id: 23,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'pterigion',
      },
      {
        id: 24,
        parentId: 18,
        children: [
          {
            id: 31,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'nasal',
          },
          {
            id: 32,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'temporal',
          },
        ],
        tagId: null,
        name: 'pinguécula',
      },
      {
        id: 25,
        parentId: 18,
        children: [
          {
            id: 33,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'folicular',
          },
          {
            id: 34,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'alérgica',
          },
        ],
        tagId: null,
        name: 'conjuntivitis',
      },
      {
        id: 26,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'epiescleritis',
      },
      {
        id: 27,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'escleritis',
      },
      {
        id: 28,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'hiposfagma',
      },
      {
        id: 29,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'nevus',
      },
      {
        id: 30,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'conjuntivochalasia',
      },
    ],
    tagId: null,
    name: 'conjuntiva y esclera',
  },
  {
    id: 19,
    parentId: null,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del BUT',
      },
      {
        id: 21,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del menisco lagrimal',
      },
      {
        id: 22,
        parentId: 19,
        children: [
          {
            name: 'family',
            parentId: 22,
            id: 99,
            children: null,
            tagId: null,
          },
        ],
        tagId: null,
        name: 'shirmer disminuido',
      },
    ],
    tagId: null,
    name: 'pelicula lagrimal',
  },
];

export const updateTagFirstLevelFamilyMock: Partial<TagFamily> = {
  name: 'edit family',
  parentId: null,
  id: 12,
  tagId: null,
  children: [
    {
      id: 13,
      parentId: 12,
      children: [
        {
          id: 14,
          parentId: 13,
          children: [],
          tagId: 317,
          name: 'superior',
        },
        {
          id: 15,
          parentId: 13,
          children: [],
          tagId: 318,
          name: 'inferior',
        },
      ],
      tagId: null,
      name: 'Ectropion',
    },
    {
      id: 16,
      parentId: 12,
      children: [],
      tagId: 319,
      name: 'Lagoftalmos',
    },
  ],
};

export const updateTagInnerLevelFamilyMock: Partial<TagFamily> = {
  name: 'edit family',
  parentId: 17,
  id: 36,
  tagId: null,
  children: [
    {
      id: 41,
      parentId: 36,
      children: [
        {
          id: 45,
          parentId: 41,
          children: [],
          tagId: null,
          name: 'hipertropia',
        },
        {
          id: 46,
          parentId: 41,
          children: [],
          tagId: null,
          name: 'hipotropia',
        },
      ],
      tagId: null,
      name: 'vertical',
    },
    {
      id: 42,
      parentId: 36,
      children: [
        {
          id: 43,
          parentId: 42,
          children: [],
          tagId: null,
          name: 'exotropia',
        },
        {
          id: 44,
          parentId: 42,
          children: [],
          tagId: null,
          name: 'endotropia',
        },
      ],
      tagId: null,
      name: 'horizontal',
    },
  ],
};

export const tagFamiliesUpdateOnFirstLevelMock: Array<TagFamily> = [
  {
    id: 12,
    parentId: null,
    children: [
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 14,
            parentId: 13,
            children: [],
            tagId: 317,
            name: 'superior',
          },
          {
            id: 15,
            parentId: 13,
            children: [],
            tagId: 318,
            name: 'inferior',
          },
        ],
        tagId: null,
        name: 'Ectropion',
      },
      {
        id: 16,
        parentId: 12,
        children: [],
        tagId: 319,
        name: 'Lagoftalmos',
      },
    ],
    tagId: null,
    name: 'edit family',
  },
  {
    id: 17,
    parentId: null,
    children: [
      {
        id: 35,
        parentId: 17,
        children: [],
        tagId: null,
        name: 'foria',
      },
      {
        id: 36,
        parentId: 17,
        children: [
          {
            id: 41,
            parentId: 36,
            children: [
              {
                id: 45,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipertropia',
              },
              {
                id: 46,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipotropia',
              },
            ],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 42,
            parentId: 36,
            children: [
              {
                id: 43,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'exotropia',
              },
              {
                id: 44,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'endotropia',
              },
            ],
            tagId: null,
            name: 'horizontal',
          },
        ],
        tagId: null,
        name: 'tropia',
      },
      {
        id: 37,
        parentId: 17,
        children: [
          {
            id: 38,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 39,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'horizontal',
          },
          {
            id: 40,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'mixta',
          },
        ],
        tagId: null,
        name: 'limitación',
      },
    ],
    tagId: null,
    name: 'MOE',
  },
  {
    id: 18,
    parentId: null,
    children: [
      {
        id: 23,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'pterigion',
      },
      {
        id: 24,
        parentId: 18,
        children: [
          {
            id: 31,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'nasal',
          },
          {
            id: 32,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'temporal',
          },
        ],
        tagId: null,
        name: 'pinguécula',
      },
      {
        id: 25,
        parentId: 18,
        children: [
          {
            id: 33,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'folicular',
          },
          {
            id: 34,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'alérgica',
          },
        ],
        tagId: null,
        name: 'conjuntivitis',
      },
      {
        id: 26,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'epiescleritis',
      },
      {
        id: 27,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'escleritis',
      },
      {
        id: 28,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'hiposfagma',
      },
      {
        id: 29,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'nevus',
      },
      {
        id: 30,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'conjuntivochalasia',
      },
    ],
    tagId: null,
    name: 'conjuntiva y esclera',
  },
  {
    id: 19,
    parentId: null,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del BUT',
      },
      {
        id: 21,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del menisco lagrimal',
      },
      {
        id: 22,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'shirmer disminuido',
      },
    ],
    tagId: null,
    name: 'pelicula lagrimal',
  },
];

export const tagFamiliesUpdateOnInnerLevelMock: Array<TagFamily> = [
  {
    id: 12,
    parentId: null,
    children: [
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 14,
            parentId: 13,
            children: [],
            tagId: 317,
            name: 'superior',
          },
          {
            id: 15,
            parentId: 13,
            children: [],
            tagId: 318,
            name: 'inferior',
          },
        ],
        tagId: null,
        name: 'Ectropion',
      },
      {
        id: 16,
        parentId: 12,
        children: [],
        tagId: 319,
        name: 'Lagoftalmos',
      },
    ],
    tagId: null,
    name: 'Párpado y anejos',
  },
  {
    id: 17,
    parentId: null,
    children: [
      {
        id: 35,
        parentId: 17,
        children: [],
        tagId: null,
        name: 'foria',
      },
      {
        id: 36,
        parentId: 17,
        children: [
          {
            id: 41,
            parentId: 36,
            children: [
              {
                id: 45,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipertropia',
              },
              {
                id: 46,
                parentId: 41,
                children: [],
                tagId: null,
                name: 'hipotropia',
              },
            ],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 42,
            parentId: 36,
            children: [
              {
                id: 43,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'exotropia',
              },
              {
                id: 44,
                parentId: 42,
                children: [],
                tagId: null,
                name: 'endotropia',
              },
            ],
            tagId: null,
            name: 'horizontal',
          },
        ],
        tagId: null,
        name: 'edit family',
      },
      {
        id: 37,
        parentId: 17,
        children: [
          {
            id: 38,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'vertical',
          },
          {
            id: 39,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'horizontal',
          },
          {
            id: 40,
            parentId: 37,
            children: [],
            tagId: null,
            name: 'mixta',
          },
        ],
        tagId: null,
        name: 'limitación',
      },
    ],
    tagId: null,
    name: 'MOE',
  },
  {
    id: 18,
    parentId: null,
    children: [
      {
        id: 23,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'pterigion',
      },
      {
        id: 24,
        parentId: 18,
        children: [
          {
            id: 31,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'nasal',
          },
          {
            id: 32,
            parentId: 24,
            children: [],
            tagId: null,
            name: 'temporal',
          },
        ],
        tagId: null,
        name: 'pinguécula',
      },
      {
        id: 25,
        parentId: 18,
        children: [
          {
            id: 33,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'folicular',
          },
          {
            id: 34,
            parentId: 25,
            children: [],
            tagId: null,
            name: 'alérgica',
          },
        ],
        tagId: null,
        name: 'conjuntivitis',
      },
      {
        id: 26,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'epiescleritis',
      },
      {
        id: 27,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'escleritis',
      },
      {
        id: 28,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'hiposfagma',
      },
      {
        id: 29,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'nevus',
      },
      {
        id: 30,
        parentId: 18,
        children: [],
        tagId: null,
        name: 'conjuntivochalasia',
      },
    ],
    tagId: null,
    name: 'conjuntiva y esclera',
  },
  {
    id: 19,
    parentId: null,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del BUT',
      },
      {
        id: 21,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'disminución del menisco lagrimal',
      },
      {
        id: 22,
        parentId: 19,
        children: [],
        tagId: null,
        name: 'shirmer disminuido',
      },
    ],
    tagId: null,
    name: 'pelicula lagrimal',
  },
];

export const tagFamilyCreateApiResponseMock: OptApiResponse<TagFamily> = {
  payload: {
    name: 'family',
    id: 101,
    parentId: 22,
    tagId: null,
    children: null,
  },
  success: true,
};

export const tagFamiliesApiResponseMock: OptApiResponse<Array<TagFamily>> = {
  payload: tagFamiliesReorderedInnerLevelMock,
  success: true,
};

export function customTreeMoveTagFamilyMock(hasParent = true) {
  const node = {
    id: 1,
    hasParent,
    currentPosition: 0,
    newPosition: 1,
  };
  const parent = {
    id: 2,
    parentId: null,
    children: null,
    tagId: 1,
    name: 'parent family',
  };
  return {
    parent: hasParent ? parent : null,
    node,
    tree: null,
  };
}
