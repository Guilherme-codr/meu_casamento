import banner from "../assets/banner.jpg";

function Hero() {
  return (
    // 1. CONTAINER PAI: Define o tamanho da seção e organiza tudo
    <div className="relative w-full h-[68vh] md:h-[90vh] flex flex-col items-center justify-center">
      
      {/* 2. CAMADA DA IMAGEM (Com a máscara) */}
      {/* Esta div é 'absolute' para ficar no fundo. A máscara só afeta ELA. */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-10 mask-[linear-gradient(to_bottom,black_60%,transparent)]"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* 3. CAMADA DO CONTEÚDO (Texto) */}
      {/* Esta div é 'irmã' da imagem, então a máscara NÃO afeta ela. O texto fica 100% visível. */}
      <div className="absolute z-20 text-center px-4">
        
        <h1 className="text-bg-primary font-primary font-bold text-5xl md:text-9xl [text-shadow:1px_1px_2px_rgb(0_0_0/80%)]">
          Camila & Guilherme
        </h1>
      </div>

      <div>
        {/* Aqui apliquei a cor verde oliva (#556B2F) que você queria antes, mas pode manter text-black se preferir */}
        <p className="text-primary font-secondary mt-120 md:text-3xl md:mt-200 font-semibold [text-shadow:1px_1px_2px_rgb(255_255_255/50%)]">
          21 de Abril de 2027 - Campo Grande, RJ
        </p>
      </div>

    </div>
  );
}

export default Hero;