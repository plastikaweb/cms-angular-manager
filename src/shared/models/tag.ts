export interface Tag {
  id: number;
  name: string;
  cultures?: TagCultures;
}

export interface TagCultures {
  [field: string]: TagTranslationFields;
}

export interface TagTranslationFields {
  od: string;
  oi: string;
  ao: string;
}

export type TagCreation = Pick<Tag, 'cultures'> & {
  tagFamilyId?: number;
};

export interface TagsApiResponse {
  count: number;
  tags: Array<Tag>;
}

export interface TagApiParams {
  number?: number;
  size?: number;
  name?: string;
}

export interface TagFiltersCounters {
  total?: number;
  received: number;
}
export interface TagFilters {
  [field: string]: TagFiltersCounters;
}
