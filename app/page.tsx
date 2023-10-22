import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardLists from "./components/CardLists";
import Main from "./Main/page";
import HorzSepLine from "./components/LineSep";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <main className={poppins.className}>
      <Header />
      <HorzSepLine />
      <Main />
      <Footer />
    </main>
  );
}
