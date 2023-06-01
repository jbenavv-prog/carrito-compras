import { useState, useEffect, useContext } from "react";
import { ProductoCard } from "./components/productoCard";
import { AlertaExito } from "../components/alertas";
import { Layout } from "../layouts/layout";
import CarritoContext from "../contexts/carritoContext";

export default function Productos() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  const valorDelContexto = useContext(CarritoContext);

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
    <Layout>
      <div className="flex justify-center mt-5">
        {alerta ? (
          <AlertaExito mensaje={valorDelContexto}></AlertaExito>
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
    </Layout>
  );
}
