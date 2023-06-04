import "./globals.css";
import { CarritoProvider } from "./contexts/carritoContext";
import { Layout } from "./layouts/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <CarritoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CarritoProvider>
  );
}
