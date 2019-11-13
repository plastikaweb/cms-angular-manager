export class ObjectUtils {
  static checkIsObject(value: any): boolean {
    return (
      Object.prototype.toString
        .call(value)
        .slice(8, -1)
        .toLowerCase() === 'object'
    );
  }

  static objectToArray<T>(obj: { [id: string]: T }): Array<T> {
    return Object.keys(obj).map(key => obj[key]);
  }
}
