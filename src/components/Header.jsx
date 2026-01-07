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

        {/* Botão */}
        <div className="mr-3">
          <button className="bg-primary hover:bg-hover-primary text-white font-bold font-secondary py-2 px-4 rounded-full">
            Confirmar Presença
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
