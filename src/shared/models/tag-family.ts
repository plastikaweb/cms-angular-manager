export interface TagFamily {
  id: number;
  name: string;
  parentId: number;
  children?: Array<TagFamily>;
  tagId?: number;
}

export type ChangeOrderFamilyTagBody = Pick<TagFamily, 'id' | 'parentId'> & {
  to: number;
  from?: number;
};
