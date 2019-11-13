export class ErrorUtils {
  static unreachable(x: never): never {
    throw new Error(`Non exhaustive check failed for ${x}`);
  }
}
