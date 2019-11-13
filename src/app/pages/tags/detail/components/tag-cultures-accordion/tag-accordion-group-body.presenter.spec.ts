import { updateTagPayload } from '@shared/mocks';

import { TagAccordionGroupBodyPresenter } from './tag-accordion-group-body.presenter';

describe('TagAccordionGroupBody presenter', () => {
  let presenter: TagAccordionGroupBodyPresenter;
  let selectedTag;

  beforeEach(() => {
    presenter = new TagAccordionGroupBodyPresenter();
    selectedTag = { ...updateTagPayload };
  });

  test('getCleaned() on update tag should return a Partial Tag object as model', () => {
    const { cultures } = selectedTag;
    expect(presenter.getCleanedModel(selectedTag)).toEqual(cultures.en);
  });

  test('getCleaned() on new tag should return an empty object as model', () => {
    expect(presenter.getCleanedModel(null)).toEqual({});
  });

  test('sendCleanedModel() should return a Partial Tag object', () => {
    const { cultures } = selectedTag;
    expect(presenter.sendCleanedModel(cultures.en, selectedTag)).toEqual({
      id: selectedTag.id,
      cultures: {
        en: cultures.en,
      },
    });
  });
});
