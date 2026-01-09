import { useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Grande_Dia from "./components/Grande_Dia.jsx";

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

      <section className="py-32 px-6 max-w-5xl mx-auto scroll-mt">
        <Grande_Dia />
      </section>
    </div>
  );
}

export default App;
