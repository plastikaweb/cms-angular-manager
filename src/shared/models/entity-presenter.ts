export interface EntityPresenter<T, K> {
  getCleanedModel(t: T): K | object;
  sendCleanedModel?(k: K, t: T): Partial<T>;
}
