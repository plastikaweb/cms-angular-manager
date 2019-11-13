import {
    LoadTagFamilies, LoadTagFamiliesFail, LoadTagFamiliesSuccess, ReorderTagFamilies,
    ReorderTagFamiliesFail, ReorderTagFamiliesSuccess, TagFamiliesActionTypes
} from '@app/entities/tag-families';
import { tagFamiliesMock } from '@shared/mocks';

import {
    CreateTagFamily, CreateTagFamilyFail, CreateTagFamilySuccess, UpdateTagFamily,
    UpdateTagFamilyFail, UpdateTagFamilySuccess
} from './tag-families.actions';

describe('Tag Families Actions', () => {
  describe('Load', () => {
    test('should dispatch LoadTagFamilies', () => {
      const action = new LoadTagFamilies();
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.LoadTagFamilies,
      });
    });

    test('should dispatch LoadTagFamiliesSuccess', () => {
      const payload = tagFamiliesMock;
      const action = new LoadTagFamiliesSuccess(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.LoadTagFamiliesSuccess,
        payload,
      });
    });

    test('should dispatch LoadTagFamiliesFail', () => {
      const payload = new Error('!!!');
      const action = new LoadTagFamiliesFail(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.LoadTagFamiliesFail,
        payload,
      });
    });
  });

  describe('Create', () => {
    test('should dispatch CreateTagFamily', () => {
      const { id, ...payload } = tagFamiliesMock[0];
      const action = new CreateTagFamily(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.CreateTagFamily,
        payload,
      });
    });

    test('should dispatch CreateTagFamilySuccess', () => {
      const payload = tagFamiliesMock[0];
      const action = new CreateTagFamilySuccess(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.CreateTagFamilySuccess,
        payload,
      });
    });

    test('should dispatch CreateTagFamilyFail', () => {
      const payload = new Error('!!!');
      const action = new CreateTagFamilyFail(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.CreateTagFamilyFail,
        payload,
      });
    });
  });

  describe('Update', () => {
    test('should dispatch UpdateTagFamily', () => {
      const payload = tagFamiliesMock[0];
      const action = new UpdateTagFamily(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.UpdateTagFamily,
        payload,
      });
    });

    test('should dispatch UpdateTagFamilySuccess', () => {
      const payload = tagFamiliesMock[0];
      const action = new UpdateTagFamilySuccess(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.UpdateTagFamilySuccess,
        payload,
      });
    });

    test('should dispatch UpdateTagFamilyFail', () => {
      const payload = new Error('!!!');
      const action = new UpdateTagFamilyFail(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.UpdateTagFamilyFail,
        payload,
      });
    });
  });

  describe('Reorder', () => {
    test('should dispatch ReorderTagFamilies', () => {
      const payload = {
        parentId: 1,
        id: 2,
        from: 0,
        to: 1,
      };
      const action = new ReorderTagFamilies(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.ReorderTagFamilies,
        payload,
      });
    });

    test('should dispatch ReorderTagFamiliesSuccess', () => {
      const action = new ReorderTagFamiliesSuccess();
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.ReorderTagFamiliesSuccess,
      });
    });

    test('should dispatch ReorderTagFamiliesFail', () => {
      const payload = new Error('!!!');
      const action = new ReorderTagFamiliesFail(payload);
      expect({ ...action }).toEqual({
        type: TagFamiliesActionTypes.ReorderTagFamiliesFail,
        payload,
      });
    });
  });
});
