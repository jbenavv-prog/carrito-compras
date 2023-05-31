import { useState, useEffect } from "react";
import { ProductoCard } from "./components/productoCard";
import { AlertaExito } from "../components/alertas";

export default function Productos() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);

  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./productos.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }

    llamarProductos();
  }, []);

  function agregarAlCarrito() {
    actualizarAlerta(true);
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        {alerta ? (
          <AlertaExito mensaje="Se ha enviado el producto al carrito!!"></AlertaExito>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-wrap justify-around">
        {productos ? (
          productos.map((producto) => {
            return (
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              ></ProductoCard>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
