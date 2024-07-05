import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floatingNav";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <div className="fixed top-9 left-10 z-10 text-white text-4xl font-extrabold tracking-wide shadow-lg">
          StandUpAi
        </div>
        <FloatingNav
          navItems={[
            { name: "Главная", link: "/", icon: <FaHome /> },
            { name: "О нас", link: "/", icon: <FaHome /> },
            { name: "Контакты", link: "/", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
