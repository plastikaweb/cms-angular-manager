interface IHasId {
  id: string | number;
}

export class ArrayUtils {
  static findIndex<T extends IHasId>(
    list: Array<number | string>,
    item: T
  ): number {
    return list.findIndex(index => item.id === index);
  }

  static moveElement<U>(
    array: Array<U>,
    fromIndex: number,
    toIndex: number
  ): Array<U> {
    return array.reduce((prev, current, idx, self) => {
      if (fromIndex === toIndex) {
        prev.push(current);
      }
      if (idx === fromIndex) {
        return prev;
      }
      if (fromIndex < toIndex) {
        prev.push(current);
      }
      if (idx === toIndex) {
        prev.push(self[fromIndex]);
      }
      if (fromIndex > toIndex) {
        prev.push(current);
      }
      return prev;
    }, []);
  }

  static addElement<U>(array: Array<U>, newElement: U): Array<U> {
    return [...array, newElement];
  }

  static findHierarchyForNode<T>(
    match: any,
    prop: string,
    collection: Array<T>
  ): Array<T> {
    const trail = [];
    let found = false;

    function recurse(categoryArr) {
      for (const node of categoryArr) {
        trail.push(node);
        if (node[prop] === match) {
          found = true;
          break;
        } else {
          if (node.children && node.children.length > 0) {
            recurse(node.children);
            if (found) {
              break;
            }
          }
        }
        trail.pop();
      }
    }
    if (!collection) {
      return [];
    }
    recurse(collection);

    return trail;
  }
}
