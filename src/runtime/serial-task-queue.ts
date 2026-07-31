/** Run asynchronous tasks one at a time while preserving each caller's result. */
export class SerialTaskQueue {
  private _tail: Promise<void> = Promise.resolve();

  enqueue(task: () => Promise<void>): Promise<void> {
    const scheduled = this._tail.then(task, task);
    this._tail = scheduled.catch(() => undefined);
    return scheduled;
  }
}
