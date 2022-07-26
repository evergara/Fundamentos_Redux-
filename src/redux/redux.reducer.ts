import { Action } from "./redux.action";

export interface Reducer<T> {
  (state: T, action: Action): T;
}
