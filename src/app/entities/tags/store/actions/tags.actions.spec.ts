import {
    tagApiResponseMock, tagFamiliesMock, tagsApiResponseMock, tagsMock, tagUpdateApiResponseMock,
    updateTagPayload
} from '@shared/mocks';

import {
    CreateTag, CreateTagFail, CreateTagSuccess, LoadTag, LoadTagFail, LoadTags, LoadTagsFail,
    LoadTagsSuccess, LoadTagSuccess, SelectTag, SelectTagFamily, TagsActionTypes, UpdateTag,
    UpdateTagFail, UpdateTagSuccess
} from './tags.actions';

describe('Tags Actions', () => {
  describe('Load', () => {
    test('should dispatch LoadTags', () => {
      const payload = { number: 1 };
      const action = new LoadTags(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.LoadTags,
        payload,
      });
    });

    test('should dispatch LoadTagsSuccess', () => {
      const { payload } = tagsApiResponseMock;
      const action = new LoadTagsSuccess(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.LoadTagsSuccess,
        payload,
      });
    });

    test('should dispatch LoadTagsFail', () => {
      const payload = new Error('!!!');
      const action = new LoadTagsFail(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.LoadTagsFail,
        payload,
      });
    });

    test('should dispatch LoadTag', () => {
      const action = new LoadTag(1);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.LoadTag,
        payload: 1,
      });
    });

    test('should dispatch LoadTagSuccess', () => {
      const { payload } = tagApiResponseMock;
      const action = new LoadTagSuccess(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.LoadTagSuccess,
        payload,
      });
    });

    test('should dispatch LoadTagFail', () => {
      const payload = new Error('!!!');
      const action = new LoadTagFail(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.LoadTagFail,
        payload,
      });
    });
  });

  describe('Select', () => {
    test('should dispatch SelectTag', () => {
      const action = new SelectTag(1);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.SelectTag,
        payload: 1,
      });
    });

    test('should dispatch SelectTagFamily', () => {
      const { id, name } = tagFamiliesMock[0];
      const payload = { id, name };
      const action = new SelectTagFamily(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.SelectTagFamily,
        payload: { id, name },
      });
    });
  });

  describe('Update', () => {
    test('should dispatch UpdateTag', () => {
      const { id, ...changes } = updateTagPayload;
      const payload = { id, changes };
      const action = new UpdateTag(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.UpdateTag,
        payload,
      });
    });

    test('should dispatch UpdateTagSuccess', () => {
      const { id, ...changes } = tagUpdateApiResponseMock.payload;
      const payload = { id, changes };
      const action = new UpdateTagSuccess(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.UpdateTagSuccess,
        payload,
      });
    });

    test('should dispatch UpdateTagFail', () => {
      const payload = new Error('!!!');
      const action = new UpdateTagFail(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.UpdateTagFail,
        payload,
      });
    });
  });

  describe('Create', () => {
    test('should dispatch CreateTag', () => {
      const payload = updateTagPayload;
      const action = new CreateTag(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.CreateTag,
        payload,
      });
    });

    test('should dispatch CreateTagSuccess', () => {
      const payload = tagsMock[0];
      const action = new CreateTagSuccess(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.CreateTagSuccess,
        payload,
      });
    });

    test('should dispatch CreateTagFail', () => {
      const payload = new Error('!!!');
      const action = new CreateTagFail(payload);
      expect({ ...action }).toEqual({
        type: TagsActionTypes.CreateTagFail,
        payload,
      });
    });
  });
});
