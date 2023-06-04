import { useState, useEffect, useContext } from "react";
import { ProductoCard } from "./components/productoCard";
import { AlertaExito } from "../components/alertas";
// import { Layout } from "../layouts/layout";
import CarritoContext from "../contexts/carritoContext";
import { Carousel } from "flowbite-react";

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
    <div>
      <Carousel className="carousel">
        <img
          alt="..."
          src="https://ae01.alicdn.com/kf/HTB1XF9BIpXXXXXUXFXXq6xXFXXX4/Camisas-de-vestir-para-hombre-de-marca-nueva-camisas-casuales-de-manga-larga-ajustadas-camisas-para.jpg"
        />
        <img
          alt="..."
          src="https://www.gef.co/dx/api/dam/custom/2022/gef/es-co/imagenes/hombres/zapatos/luan_zapatos/566x715/zapatos-hombre-luan-zapatos-blanco-994-frente-gef.jpg"
        />
        <img
          alt="..."
          src="https://m.media-amazon.com/images/I/61QwRElwjAL.jpg"
        />
        <img
          alt="..."
          src="https://http2.mlstatic.com/D_NQ_NP_923357-MCO28543557774_102018-O.jpg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>
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
    </div>
  );
}
