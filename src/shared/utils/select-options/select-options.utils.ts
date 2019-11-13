interface Select {
  label: string;
  value: string;
}
export class SelectOptionsUtils {
  static getOptionsFromEnum<T>(source: T): Array<Select> {
    let arr = [];
    for (const item in source) {
      if (source.hasOwnProperty(item)) {
        const optionItem = {
          label: source[item],
          value: item,
        };
        arr = [...arr, optionItem];
      }
    }

    return arr;
  }
}
