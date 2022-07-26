import * as acciones from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reduce";
import { Store } from "./redux/redux.store";
import { incrementaContador } from "./contador/contador.actions";

/** 
console.log(contadorReducer(10, acciones.incrementaContador));
console.log(contadorReducer(10, acciones.decrementaContador));
console.log(contadorReducer(10, acciones.multiplicartaContador));
console.log(contadorReducer(10, acciones.dividirContador));
console.log(contadorReducer(10, acciones.resetContador));
*/

const store = new Store(contadorReducer, 10);
console.log(store.State);

store.dispatch(acciones.incrementaContador);
console.log(store.State);
store.dispatch(acciones.decrementaContador);
console.log(store.State);
store.dispatch(acciones.multiplicartaContador);
console.log(store.State);
store.dispatch(acciones.dividirContador);
console.log(store.State);
store.dispatch(acciones.resetContador);
console.log(store.State);
