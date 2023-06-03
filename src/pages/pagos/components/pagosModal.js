import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/router";

export function PagosModal({ setMostrarModal, form }) {
  const router = useRouter();
  return (
    <Modal
      show="true"
      onClose={() => {
        setMostrarModal(false);
      }}
      popup
      size="md"
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            <p>Tu pago ha sido procesado satisfactoriamente</p>
            <p>{form.nombre}</p>
            <p>{form.correo}</p>
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              Retornar al Comercio
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
