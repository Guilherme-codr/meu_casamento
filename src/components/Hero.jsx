import banner from "../assets/banner.png";
function Hero() {
  return (
    <div
      // 2. Classes do Tailwind para comportamento
      className="w-full h-[68vh] md:h-[90vh] bg-cover bg-position-[44%] bg-no-repeat flex items-center justify-center relative mask-[linear-gradient(to_bottom,black_60%,transparent)]"
      // 3. Inline style para carregar a imagem importada
      style={{ backgroundImage: `url(${banner})` }}
    >
        <div className="absolute inset-0 bg-black/60 md:bg-black/45"></div>

      {/* informações do hero */}
      <div className="relative z-20 text-center">
        <h1 className="text-primary font-primary font-bold text-5xl md:text-9xl [text-shadow:1px_1px_2px_rgb(0_0_0/80%)]">
          Camila e Guillherme
        </h1>
        
        <p className="text-text-secondary font-secondary mt-2 md:mt-4 md:text-3xl [text-shadow:1px_1px_2px_rgb(0_0_0/80%)]">
          21 de Abril de 2027 - Campo grande, RJ
        </p>
      </div>
    </div>
  );
}

export default Hero;
