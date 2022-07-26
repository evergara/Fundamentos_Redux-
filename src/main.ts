import * as acciones from "./contador/contador.actions";
import { reducer } from "./redux/redux.reduce";

console.log(reducer(10, acciones.incrementaContador));
console.log(reducer(10, acciones.decrementaContador));
console.log(reducer(10, acciones.multiplicartaContador));
console.log(reducer(10, acciones.dividirContador));
console.log(reducer(10, acciones.resetContador));