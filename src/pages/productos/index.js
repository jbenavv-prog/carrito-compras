import { useState, useEffect, useContext } from "react";
import { ProductoCard } from "./components/productoCard";
import { AlertaExito } from "../components/alertas";
import { Layout } from "../layouts/layout";
import CarritoContext from "../contexts/carritoContext";

export default function Productos() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  const {
    agregarAlCarritoGlobal,
    carritoProductosGlobal,
    // eliminarDelCarritoGlobal,
  } = useContext(CarritoContext);
  // const valorDelContexto = useContext(CarritoContext);

  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./productos.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }

    llamarProductos();
  }, []);

  function agregarAlCarrito(producto) {
    // console.log(producto);
    agregarAlCarritoGlobal(producto);
    actualizarAlerta(true);
    console.log(carritoProductosGlobal);
  }

  return (
    <Layout>
      {/* <button onClick={(agregarAlCarrito)}>Clic aquí</button> */}
      <div className="flex justify-center mt-5">
        {alerta ? (
          <AlertaExito mensaje="Producto añadido al carrito con éxito!!"></AlertaExito>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-wrap justify-around">
        {productos ? (
          productos.map((producto, index) => {
            return (
              <ProductoCard
                key={index}
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
