import { createContext } from "react";

const CarritoContext = createContext("Producto 0");

export function CarritoProvider({ children }) {
  return (
    <CarritoContext.Provider value="Esta es una información de ámbito Global con el fin de porder acceder a esta desde cualquier parte de mi página">
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoContext;
