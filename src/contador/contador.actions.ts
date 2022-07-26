import { Action } from "../redux/redux.action";

export const incrementaContador: Action = {
  type: "INCREMENTAR",
};
export const decrementaContador: Action = {
  type: "DECREMENTAR",
};
export const multiplicartaContador: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

export const dividirContador: Action = {
  type: "DIVIDIR",
  payload: 2,
};

export const resetContador: Action = {
  type: "RESET",
};
