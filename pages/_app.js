import Layout from "@/components/UI/Layout";
import "@/styles/globals.css";
import { Lato } from "@next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
