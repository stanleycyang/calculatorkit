// pages/_app.js
import { Inter, Righteous } from "next/font/google";
import cx from "clsx";
import "../styles/global.css";

const inter = Inter({ variable: "--font-open-sans", subsets: ["latin"] });
const dancing = Righteous({
  variable: "--font-dancing",
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={cx(inter.className, dancing.className)}>
      <Component {...pageProps} />;
    </main>
  );
}
