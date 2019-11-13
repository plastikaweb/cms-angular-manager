import { ChangeOrderFamilyTagBody, TagFamily } from '@shared/models';
import { ArrayUtils } from '@shared/utils';

import { cloneDeep } from 'lodash';

export class TagFamiliesReducerUtils {
  static getListArray(
    ids: Array<number>,
    entities: { [id: number]: TagFamily }
  ): Array<TagFamily> {
    return ids.map(tagFamilyId => {
      const clone = cloneDeep(entities[tagFamilyId]);
      return clone;
    });
  }

  static reorder(
    { id, parentId, from, to }: ChangeOrderFamilyTagBody,
    treeArray: Array<TagFamily>
  ): Array<TagFamily> {
    let tagFamiliesEntities: Array<TagFamily>;

    if (!parentId) {
      // reorder level 0 elements
      tagFamiliesEntities = ArrayUtils.moveElement<TagFamily>(
        treeArray,
        from,
        to
      );
    } else {
      // reorder children elements at other level
      const reorderedChildren = ArrayUtils.moveElement<TagFamily>(
        [
          ...ArrayUtils.findHierarchyForNode<TagFamily>(
            id,
            'id',
            treeArray
          ).slice(-2, -1)[0].children,
        ],
        from,
        to
      );
      // create new updated array ready to send on reducer
      tagFamiliesEntities = this.updateTree(
        treeArray,
        reorderedChildren,
        parentId
      );
    }
    return tagFamiliesEntities;
  }

  static add(
    newTagFamily: TagFamily,
    treeArray: Array<TagFamily>
  ): Array<TagFamily> {
    const { parentId } = newTagFamily;
    let tagFamiliesEntities: Array<TagFamily>;

    if (!parentId) {
      // add to level 0
      tagFamiliesEntities = [...treeArray, newTagFamily];
    } else {
      const updatedChildren = ArrayUtils.addElement<TagFamily>(
        this.getChildrenNodes(parentId, treeArray),
        newTagFamily
      );
      // create new updated array ready to send on reducer
      tagFamiliesEntities = this.updateTree(
        [...treeArray],
        [...updatedChildren],
        parentId
      );
    }

    return tagFamiliesEntities;
  }

  static update(
    newTagFamily: TagFamily,
    treeArray: Array<TagFamily>
  ): Array<TagFamily> {
    const { parentId } = newTagFamily;
    let tagFamiliesEntities: Array<TagFamily>;

    if (!parentId) {
      // update level 0
      tagFamiliesEntities = [...treeArray];
      const nodeIndex = tagFamiliesEntities.findIndex(
        node => node.id === newTagFamily.id
      );
      tagFamiliesEntities[nodeIndex] = newTagFamily;
    } else {
      const nodes = this.getChildrenNodes(parentId, treeArray);
      const nodeIndex = nodes.findIndex(node => node.id === newTagFamily.id);
      nodes[nodeIndex] = newTagFamily;
      // create new updated array ready to send on reducer
      tagFamiliesEntities = this.updateTree(
        [...treeArray],
        [...nodes],
        parentId
      );
    }

    return tagFamiliesEntities;
  }

  static dispatchAction(ids, entities, payload, action: string) {
    const treeArray = TagFamiliesReducerUtils.getListArray(ids, entities);

    return this[action](payload, treeArray);
  }

  // add new children segment of parent node and return full new Array of entities
  private static updateTree(
    tree: Array<TagFamily>,
    changedSegment: Array<TagFamily>,
    parentId: number
  ): Array<TagFamily> {
    let newTree: Array<TagFamily> = [];
    for (const node of tree) {
      const newNode: TagFamily = cloneDeep(node);
      if (newNode.id === parentId) {
        newNode.children = [...changedSegment];
      } else if (newNode.children) {
        searchNode(newNode.children, parentId, changedSegment);
      }
      newTree = [...newTree, newNode];
    }

    function searchNode(arr, id, newSegment) {
      arr.find((node, index) => {
        if (node.id === id) {
          arr[index].children = newSegment;
        } else if (node.children) {
          searchNode(node.children, id, newSegment);
        }
      });
    }
    return newTree;
  }

  private static getChildrenNodes(
    parentId: number,
    treeArray: Array<TagFamily>
  ): Array<TagFamily> {
    const topNode =
      [
        ...ArrayUtils.findHierarchyForNode<TagFamily>(
          parentId,
          'id',
          treeArray
        ),
      ] || [];
    return topNode[topNode.length - 1].children || [];
  }
}
