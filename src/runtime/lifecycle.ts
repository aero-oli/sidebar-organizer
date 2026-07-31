export type RuntimeState = 'idle' | 'discovering' | 'loading' | 'planning' | 'applying' | 'ready' | 'degraded';

/** Prevent an older asynchronous setup run from committing after a newer one. */
export class RuntimeLifecycle {
  private _generation = 0;
  private _state: RuntimeState = 'idle';

  get generation(): number {
    return this._generation;
  }

  get state(): RuntimeState {
    return this._state;
  }

  begin(): number {
    this._generation += 1;
    this._state = 'discovering';
    return this._generation;
  }

  isCurrent(generation: number): boolean {
    return generation === this._generation;
  }

  transition(generation: number, state: RuntimeState): boolean {
    if (!this.isCurrent(generation)) return false;
    this._state = state;
    return true;
  }
}
