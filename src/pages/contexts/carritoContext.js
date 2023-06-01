import { createContext } from "react";

const carritoContext = createContext("Producto 0");

export function CarritoProvider({ children }) {
  return (
    <carritoContext.Provider value="Esta es una información de ámbito Global con el fin de porder acceder a esta desde cualquier parte de mi página">
      {children}
    </carritoContext.Provider>
  );
}

export default carritoContext;
