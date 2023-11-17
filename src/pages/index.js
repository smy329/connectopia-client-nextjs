import Image from "next/image";
import { Inter } from "next/font/google";
import HomeComponent from "@/components/home/home/HomeComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="main">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <HomeComponent />
    </main>
  );
}
