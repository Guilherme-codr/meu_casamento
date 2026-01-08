function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm bg-bg-primary/90">
      {/* CONTAINER PRINCIPAL: Padding responsivo (px-4 no celular, px-8 no PC) */}
      <div className="flex items-center justify-between w-full py-4 px-4 md:px-8">
        {/* --- LOGO --- */}
        <div>
          {/* Logo diminui no celular (text-3xl) e cresce no PC (text-5xl) */}
          <h1 className="text-primary font-extrabold font-primary text-3xl md:text-5xl cursor-pointer hover:tracking-wide transition-all">
            C & G
          </h1>
        </div>

        {/* --- ÁREA DA DIREITA --- */}
        <div className="flex items-center gap-4">
          {/* MENU DE LINKS (Só aparece no PC -> hidden md:flex) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#historia"
              className="text-text-secondary font-secondary hover:text-primary transition"
            >
              Nossa História
            </a>
            <div className="h-4 w-0.5 bg-primary/30"></div>
            {/* Divisória sutil */}
            <a
              href="#evento"
              className="text-text-secondary font-secondary hover:text-primary transition"
            >
              O Evento
            </a>
            <div className="h-4 w-0.5 bg-primary/30"></div>
            <a
              href="#presentes"
              className="text-text-secondary font-secondary hover:text-primary transition"
            >
              Presentes
            </a>
          </div>

          <div className="hidden md:flex h-4 w-0.5 bg-primary/30"></div>

          {/* BOTÃO CONFIRMAR (Aparece Sempre) */}
          {/* No celular ele fica sozinho. No PC ele fica ao lado do menu */}
          <button className=" text-primary font-secondary font-bold transition text-sm md:text-base">
            <a href="#Confirmar">Confirmar Presença</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
