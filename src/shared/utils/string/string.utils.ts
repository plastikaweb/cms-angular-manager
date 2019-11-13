import { deburr } from 'lodash';

export class StringUtils {
  static matchString(filterString: string, nodeName: string) {
    const nodeNameSanitizied = deburr(nodeName.toLowerCase());
    const filterStringSanitized = deburr(filterString.toLowerCase());

    const hlen = nodeName.length;
    const nlen = filterStringSanitized.length;

    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return filterStringSanitized === nodeNameSanitizied;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
      const nch = filterStringSanitized.charCodeAt(i);

      while (j < hlen) {
        if (nodeNameSanitizied.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  }
}
