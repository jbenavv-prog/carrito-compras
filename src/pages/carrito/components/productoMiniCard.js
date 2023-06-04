import { Card } from "flowbite-react";

export function ProductoMiniCard({ producto }) {
  return (
    <Card className="w-18">
      <img width={"200px"} src={producto.imagen}></img>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{producto.nombre}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        ${producto.precio}
      </p>
    </Card>
  );
}
