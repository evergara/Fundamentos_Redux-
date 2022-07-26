import { Reducer } from "./redux.reducer";
import { Action } from "./redux.action";

export class Store<T> {
  constructor(private reducer: Reducer<T>, private _state: T) {}

  get State(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
  }
}
