import { useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Grande_Dia from "./components/Grande_Dia.jsx";
import Lista_Presentes from "./components/Lista_Presentes.jsx";
import Confirma_Presenca from "./components/Confirma_Presenca.jsx";
import Rodape from "./components/Rodape.jsx";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <Hero />

      <section className="py-32 px-6 w-full mx-auto scroll-mt">
        <Grande_Dia />
      </section>
      <section className="py-24 px-6 w-full mx-auto scroll-mt bg-[#E3E8DE]">
        <Lista_Presentes />
      </section>
      <section className="py-24 w-full mx-auto scroll-mt bg-[#1E2318]">
        <Confirma_Presenca />
      </section>

      <section className="py-24 w-full mx-auto  scroll-mt bg-[#E3E8DE]">
        <Rodape />
      </section>
    </div>
  );
}

export default App;
