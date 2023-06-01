import "./globals.css";
import { CarritoProvider } from "./contexts/carritoContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CarritoProvider>
      <Component {...pageProps} />;
    </CarritoProvider>
  );
}
