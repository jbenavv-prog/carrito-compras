import { Button, Navbar } from "flowbite-react";
import { useContext, useState } from "react";
import CarritoContext from "../contexts/carritoContext";
import { CarritoModal } from "../carrito/components/carritoModal";

export function Nav() {
  const { carritoProductosGlobal } = useContext(CarritoContext);
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/next.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="relative" onClick={() => setMostrarModal(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Ir al Carrito
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {carritoProductosGlobal.length}
          </div>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      {mostrarModal && <CarritoModal setMostrarModal={setMostrarModal}></CarritoModal>}
    </Navbar>
  );
}
