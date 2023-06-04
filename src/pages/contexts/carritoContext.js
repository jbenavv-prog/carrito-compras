import { createContext, useState } from "react";
import { Layout } from "../layouts/layout";

const CarritoContext = createContext([]);

export function CarritoProvider({ children }) {
  const [carritoProductosGlobal, actualizarCarrito] = useState([]);

  function agregarAlCarritoGlobal(producto) {
    actualizarCarrito((productosPrevios) => [...productosPrevios, producto]);
  }

  function eliminarDelCarritoGlobal(producto) {
    // Script para eliminar del carrito
  }

  return (
    <CarritoContext.Provider
      value={{ agregarAlCarritoGlobal, carritoProductosGlobal }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoContext;
