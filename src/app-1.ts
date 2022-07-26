() => {
  //Acciones

  interface Action {
    type: string;
    payload?: any;
  }

  //Reducer: que no es mas que una funcion que recibe el stado actual y la ccion a ejecutar y retorna un nuevo estado
  function reducer(state: number = 10, action: Action): number {
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

  //Creamos la accion
  const incrementaContador: Action = {
    type: "INCREMENTAR",
  };
  const decrementaContador: Action = {
    type: "DECREMENTAR",
  };
  const multiplicartaContador: Action = {
    type: "MULTIPLICAR",
    payload: 2,
  };

  const dividirContador: Action = {
    type: "DIVIDIR",
    payload: 2,
  };

  const resetContador: Action = {
    type: "RESET",
  };
  //USamos el reducer

  console.log(reducer(10, incrementaContador));
  console.log(reducer(10, decrementaContador));
  console.log(reducer(10, multiplicartaContador));
  console.log(reducer(10, dividirContador));
  console.log(reducer(10, resetContador));
};
