import { Action } from "./redux.action";

export function reducer(state: number = 10, action: Action): number {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "DECREMENTAR":
      return state - 1;
    case "MULTIPLICAR":
      return state * action.payload;
    case "DIVIDIR":
      return state / action.payload;
    case "RESET":
      return 0;
    default:
      return state;
  }
}
