import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PagosModal } from "./components/pagosModal";

export default function Pagos() {
  const router = useRouter();
  const { total } = router.query;
  const [datosFormulario, setDatosFormulario] = useState({});
  const [mostrarModal, setMostrarModal] = useState(false);

  function obtenerDatos(event) {
    event.preventDefault();

    setDatosFormulario({
      nombre: event.target.nombre.value,
      correo: event.target.correo.value,
      metodo: event.target.tipoPago.value,
    });

    setMostrarModal(true);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex max-w-md flex-col gap-4" onSubmit={obtenerDatos}>
        <div></div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nombre" value="Nombres" />
          </div>
          <TextInput id="nombre" required shadow type="name" />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="correo" value="Correo Electrónico" />
        </div>
        <TextInput
          id="correo"
          placeholder="name@flowbite.com"
          required
          shadow
          type="email"
        />
        <div className="max-w-md" id="select">
          <div className="mb-2 block">
            <Label htmlFor="tipoPago" value="Selecciona un método de pago" />
          </div>
          <Select id="tipoPago" required>
            <option>Tarjeta de Crédito</option>
            <option>PSE Pagos</option>
            <option>Paypal</option>
            <option>Bitcoin</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label className="flex" htmlFor="agree">
            <p>Aceptar términos y codiciones</p>
          </Label>
        </div>
        <Button type="submit">Pagar ${total}</Button>
      </form>
      {mostrarModal && (
        <PagosModal
          setMostrarModal={setMostrarModal}
          form={datosFormulario}
        ></PagosModal>
      )}
    </div>
  );
}
