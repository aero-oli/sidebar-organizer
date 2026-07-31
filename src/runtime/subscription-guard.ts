/** Keep at most one async subscription active and reject stale setup results. */
export class SubscriptionGuard {
  private _generation = 0;
  private _unsubscribe?: () => void;

  begin(): number {
    this._generation += 1;
    this._unsubscribe?.();
    this._unsubscribe = undefined;
    return this._generation;
  }

  accept(generation: number, unsubscribe: () => void): boolean {
    if (generation !== this._generation) {
      unsubscribe();
      return false;
    }
    this._unsubscribe = unsubscribe;
    return true;
  }

  dispose(): void {
    this.begin();
  }
}
