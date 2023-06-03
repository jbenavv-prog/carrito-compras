import CarritoContext from "@/pages/contexts/carritoContext";
import { Button, Modal, Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { ProductoMiniCard } from "./productoMiniCard";
import { useRouter } from "next/router";

export function CarritoModal({ setMostrarModal }) {
  const { carritoProductosGlobal } = useContext(CarritoContext);
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let sumaPrecios = 0;

    carritoProductosGlobal.forEach((producto) => {
      sumaPrecios += producto.precio;
    });

    setTotal(sumaPrecios);
  }, [carritoProductosGlobal]);

  return (
    <Modal
      className="carrito-modal"
      show="true"
      onClose={() => setMostrarModal(false)}
    >
      <Modal.Header>Carrito De Compras</Modal.Header>
      <Modal.Body>
        {carritoProductosGlobal &&
          carritoProductosGlobal.map((producto) => {
            return <ProductoMiniCard producto={producto}></ProductoMiniCard>;
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setCargando(true);
            router.push({
              pathname: "/pagos/[total]",
              query: {
                total,
              },
            });
          }}
        >
          Total a Pagar: ${total}{" "}
          {cargando && (
            <Spinner
              className="ms-2"
              aria-label="Purple spinner example"
              color="purple"
            />
          )}
        </Button>
        <Button color="gray">
          <p>Decline</p>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
