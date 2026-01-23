import { useState } from "react";

function Confirma_Presenca() {
  // 1. Criar o estado para controlar a exibição da mensagem
  const [enviado, setEnviado] = useState(false);

  // 2. Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede a página de recarregar
    setEnviado(true);   // Altera o estado para "enviado"
  };

  return (
    <section
      id="Confirmar"
      className="relative flex flex-wrap justify-center items-center scroll-mt py-20"
    >
      <div className="text-center space-y-6">
        <h1 className="flex text-center justify-center font-primary text-white text-4xl md:text-8xl font-bold w-full">
          Confirmar Presença
        </h1>
        <p className="font-bold font-secondary md:text-2xl md:pt-10 text-[#6B7280]">
          Seria uma alegria celebrar esse momento com você!
          <br />
          Por favor confirme sua presença até dia 12 de dezembro.
        </p>
      </div>

      {/* 3. Adicionamos o onSubmit no formulário */}
      <form 
        onSubmit={handleSubmit} 
        className="pt-10 pb-4 flex justify-center flex-wrap w-full gap-8 max-w-4xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">
              Nome Completo
            </label>
            <input
              type="text"
              required
              placeholder="Escreva o seu nome"
              className="w-full bg-[#F2F4EF]/5 border border-white/10 rounded-2xl p-5 focus:ring-1 focus:ring-olive outline-none transition placeholder:text-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">
              Estará Presente?
            </label>
            <select
              required
              className="w-full bg-[#F2F4EF]/5 border border-white/10 rounded-2xl p-5 focus:ring-1 focus:ring-olive outline-none text-gray-400"
            >
              <option value="">Selecione uma opção</option>
              <option value="sim">Sim, Estarei lá</option>
              <option value="nao">Infelizmente não poderei</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">
              Quantidade de Convidados
            </label>
            <input
              type="number"
              min="0"
              required
              placeholder="Quantos convidados?"
              className="w-full bg-[#F2F4EF]/5 border text-white border-white/10 rounded-2xl p-5 focus:ring-1 focus:ring-olive outline-none transition placeholder:text-gray-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white font-bold ml-1">
              Observações ou Alergias
            </label>
            <textarea
              rows="3"
              placeholder="Restrições alimentares ou mensagem para nós"
              className="w-full bg-[#F2F4EF]/5 text-white border border-white/10 rounded-2xl p-5 focus:ring-1 focus:ring-olive outline-none transition placeholder:text-gray-600"
            ></textarea>
          </div>
        </div>

        {/* 4. Renderização Condicional da Mensagem */}
        {enviado && (
          <div className="w-full flex justify-center mt-4">
            <div>
              <p className="text-white font-secondary text-xl">
                Obrigado! A sua resposta foi enviada.
              </p>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-all hover:-translate-y-1 hover:shadow-2xl duration-300"
        >
          Enviar Confirmação
        </button>
      </form>
    </section>
  );
}

export default Confirma_Presenca;