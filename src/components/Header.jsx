function Header() {
  return (
    <header className="flex fixed top-0 left-0 w-full z-50">
      {/* div pai */}
      <div className="flex mt-8 justify-between w-full">
        {/* iniciais */}
        <div className="ml-8">
          <h1 className="text-primary font-extrabold font-primary text-5xl no-underline hover:underline cursor-pointer tracking-wide">
            C & G
          </h1>
        </div>

        {/* botões */}
        <div className="mr-8 flex items-center gap-2">
          {/* botao para historia */}
          <div className="">
            <button className="text-text-secondary font-secondary rounded-full cursor-pointer">
              <a href="#historia">Nossa Historia</a>
            </button>
          </div>

          <div className="h-6 w-0.5 bg-primary"></div>

          {/* botão para o evento */}
          <div className="">
            <button className="text-text-secondary font-secondary rounded-full cursor-pointer">
              <a href="#evento">O evento</a>
            </button>
          </div>

          {/* linha divisória */}
          <div className="h-6 w-0.5 bg-primary"></div>

          {/* botao para presentes */}
          <div className="">
            <button className="text-text-secondary font-secondary rounded-full cursor-pointer">
              <a href="#presentes">Presentes</a>
            </button>
          </div>

          {/* linha divisória */}
          <div className="h-6 w-0.5 bg-primary"></div>

          {/* confirmar presença */}
          <div>
            <button className="text-primary font-secondary rounded-full cursor-pointer">
              <a href="#Confirmar">Confirmar Presença</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
