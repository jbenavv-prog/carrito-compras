import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useRouter } from "next/router";

export default function Pagos() {
  const router = useRouter();
  const { total } = router.query;
  // console.log(total);
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex max-w-md flex-col gap-4">
        <div></div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nombre" value="Nombres" />
          </div>
          <TextInput id="nombre" required shadow type="name" />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Correo Electrónico" />
        </div>
        <TextInput
          id="email2"
          placeholder="name@flowbite.com"
          required
          shadow
          type="email"
        />
        <div className="max-w-md" id="select">
          <div className="mb-2 block">
            <Label htmlFor="tipo-pago" value="Selecciona un método de pago" />
          </div>
          <Select id="tipo-pago" required>
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
    </div>
  );
}
