import { ArrayUtils } from './array.utils';

describe('Array Utils', () => {
  const arr = [{ id: 3 }, { id: 2 }, { id: 1 }, { id: 5 }];
  const collection = [
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
            },
            {
              id: 15,
              parentId: 13,
              children: [],
            },
          ],
        },
        {
          id: 16,
          parentId: 12,
          children: [],
        },
      ],
    },
    {
      id: 17,
      parentId: null,
      children: [
        {
          id: 35,
          parentId: 17,
          children: [],
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
                },
                {
                  id: 46,
                  parentId: 41,
                  children: [],
                },
              ],
            },
            {
              id: 42,
              parentId: 36,
              children: [
                {
                  id: 43,
                  parentId: 42,
                  children: [],
                },
                {
                  id: 44,
                  parentId: 42,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 37,
          parentId: 17,
          children: [
            {
              id: 38,
              parentId: 37,
              children: [],
            },
            {
              id: 39,
              parentId: 37,
              children: [],
            },
            {
              id: 40,
              parentId: 37,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 18,
      parentId: null,
      children: [
        {
          id: 23,
          parentId: 18,
          children: [],
        },
        {
          id: 24,
          parentId: 18,
          children: [
            {
              id: 31,
              parentId: 24,
              children: [],
            },
            {
              id: 32,
              parentId: 24,
              children: [],
            },
          ],
        },
        {
          id: 25,
          parentId: 18,
          children: [
            {
              id: 33,
              parentId: 25,
              children: [],
            },
            {
              id: 34,
              parentId: 25,
              children: [],
            },
          ],
        },
        {
          id: 26,
          parentId: 18,
          children: [],
        },
        {
          id: 27,
          parentId: 18,
          children: [],
        },
        {
          id: 28,
          parentId: 18,
          children: [],
        },
        {
          id: 29,
          parentId: 18,
          children: [],
        },
        {
          id: 30,
          parentId: 18,
          children: [],
        },
      ],
    },
  ];
  test('should find index of given id into an array', () => {
    const order = [2, 1, 5, 3];
    const result = ArrayUtils.findIndex(order, arr[0]);
    expect(result).toBe(3);
  });

  test('should move element inside array', () => {
    let result = ArrayUtils.moveElement([...arr], 1, 3);
    expect(result).toEqual([{ id: 3 }, { id: 1 }, { id: 5 }, { id: 2 }]);
    result = ArrayUtils.moveElement([...arr], 1, 1);
    expect(result).toEqual(arr);
    result = ArrayUtils.moveElement([...arr], 3, 1);
    expect(result).toEqual([{ id: 3 }, { id: 5 }, { id: 2 }, { id: 1 }]);
  });

  test('should return an array of hierarchy nodes given a collection and a property value', () => {
    let result = ArrayUtils.findHierarchyForNode(12, 'id', collection);
    expect(result).toEqual([
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
              },
              {
                id: 15,
                parentId: 13,
                children: [],
              },
            ],
          },
          {
            id: 16,
            parentId: 12,
            children: [],
          },
        ],
      },
    ]);

    result = ArrayUtils.findHierarchyForNode(14, 'id', collection);
    expect(result).toEqual([
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
              },
              {
                id: 15,
                parentId: 13,
                children: [],
              },
            ],
          },
          {
            id: 16,
            parentId: 12,
            children: [],
          },
        ],
      },
      {
        id: 13,
        parentId: 12,
        children: [
          {
            id: 14,
            parentId: 13,
            children: [],
          },
          {
            id: 15,
            parentId: 13,
            children: [],
          },
        ],
      },
      {
        id: 14,
        parentId: 13,
        children: [],
      },
    ]);
    result = ArrayUtils.findHierarchyForNode(14, 'id', null);
    expect(result).toEqual([]);
  });
});
