import { motion } from "framer-motion";

function Lista_Presentes() {
  return (
    <section
      id="presentes"
      className="relative flex flex-wrap justify-center items-center scroll-mt"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <h1 className="flex font-primary text-text-primary text-2xl md:text-8xl font-bold">
          Sugestões de Presentes
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        md:viewport={{ once: true, amount: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="pt-4 md:pt-14 max-w-4xl text-center">
          <p className="text-text-secondary leading-relaxed text-lg md:text-xl">
            Pensamos com carinho em algumas sugestões para essa nova etapa
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 w-full h-full">
        
        {/* Primeira Fileira 4 ITEMS */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          md:viewport={{ once: true, amount: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div class="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-20 h-20 mx-auto mb-8 bg-[#F2F4EF] rounded-full flex items-center justify-center text-3xl shadow-inner text-olive">
              ✈️
            </div>
            <h4 class="font-bold text-gray-800 text-lg mb-2">Lua de Mel</h4>
            <p class="text-olive font-black text-2xl mb-8">€ 50,00</p>
            <button class="w-full py-3.5 border-2 border-olive text-olive rounded-full hover:bg-olive hover:text-primary transition-all font-bold uppercase text-[10px] tracking-widest">
              Contribuir
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          md:viewport={{ once: true, amount: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div class="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-20 h-20 mx-auto mb-8 bg-[#F2F4EF] rounded-full flex items-center justify-center text-3xl shadow-inner text-olive">
              🍴
            </div>
            <h4 class="font-bold text-gray-800 text-lg mb-2">
              Jantar Especial
            </h4>
            <p class="text-olive font-black text-2xl mb-8">€ 100,00</p>
            <button class="w-full py-3.5 border-2 border-olive text-olive rounded-full hover:bg-olive hover:text-primary transition-all font-bold uppercase text-[10px] tracking-widest">
              Contribuir
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          md:viewport={{ once: true, amount: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div class="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-20 h-20 mx-auto mb-8 bg-[#F2F4EF] rounded-full flex items-center justify-center text-3xl shadow-inner text-olive">
              🏡
            </div>
            <h4 class="font-bold text-gray-800 text-lg mb-2">Novo Lar</h4>
            <p class="text-olive font-black text-2xl mb-8">€ 250,00</p>
            <button class="w-full py-3.5 border-2 border-olive text-olive rounded-full hover:bg-olive hover:text-primary transition-all font-bold uppercase text-[10px] tracking-widest">
              Contribuir
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          md:viewport={{ once: true, amount: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div class="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-20 h-20 mx-auto mb-8 bg-[#F2F4EF] rounded-full flex items-center justify-center text-3xl shadow-inner text-olive">
              💖
            </div>
            <h4 class="font-bold text-gray-800 text-lg mb-2">Cota Livre</h4>
            <p class="text-olive font-black text-2xl mb-8">-</p>
            <button class="w-full py-3.5 border-2 border-olive text-olive rounded-full hover:bg-olive hover:text-primary transition-all font-bold uppercase text-[10px] tracking-widest">
              Contribuir
            </button>
          </div>
        </motion.div>

        {/* SEGUNDA FILEIRA 4 ITEMS */}
        

        {/* TERCEIRA FILEIRA 4 ITEMS */}
        

        {/* QUARTA FILEIRA 4 ITEMS */}
        
      </div>
    </section>
  );
}

export default Lista_Presentes;
