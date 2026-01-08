import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Grande_Dia from "./components/Grande_Dia.jsx";

function App() {
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
