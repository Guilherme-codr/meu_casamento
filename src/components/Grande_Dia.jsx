import { motion } from "framer-motion";
import BoloCasamentoIcon from "../assets/BoloCasamentoIcon";
import DressCodeIcon from "../assets/DressCodeIcon";
import CerimoniaIcon from "../assets/CerimoniaIcon";

function Grande_Dia() {
  return (
    <section
      id="evento"
      className="relative flex flex-wrap justify-center items-center md:py-20 px-6 max-w-5xl mx-auto scroll-mt"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <h1 className="flex font-primary text-text-primary sm:text-2xl text-4xl md:text-8xl font-semibold">
          O Grande Dia
        </h1>
      </motion.div>

      {/* cerimonia */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        md:viewport={{ once: true, amount: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="pt-29 grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center cursor-default">
          <div className=" bg-bg-card  p-12 rounded-[3rem] shadow-sm border border-[#5E6738]/5 group hover:border-olive/20 transition-all duration-500">
            <div className="flex flex-col justify-center items-center">
              <div className="text-olive mb-1 flex justify-center text-4xl transform group-hover:scale-110 transition-transform">
                <CerimoniaIcon className="w-16 h-16" />
              </div>
              <h3 className="text-2xl mb-1 serif font-semibold italic text-primary">
                Cerimônia
              </h3>
              <p className="font-bold text-xl text-text-primary mb-2">16:30</p>
              <p className="text-text-secondary leading-relaxed">
                Igreja Matriz de Almancil, Almancil, Algarve
              </p>
            </div>
          </div>

          {/* RECEPÇÃO */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            md:viewport={{ once: true, amount: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className=" bg-bg-card  p-12 rounded-[3rem] shadow-sm border border-[#5E6738]/5 group hover:border-olive/20 transition-all duration-500">
              <div className="flex flex-col justify-center items-center">
                <div className="text-olive mb-3 flex justify-center text-4xl transform group-hover:scale-110 transition-transform">
                  <BoloCasamentoIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl mb-1 serif font-semibold italic text-primary">
                  Recepção
                </h3>
                <p className="font-bold text-xl text-text-primary mb-2">
                  18:30
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Quinta do Lago, Espaço Eventos, Loulé, Algarve
                </p>
              </div>
            </div>
          </motion.div>

          {/* DRESS CODE */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            md:viewport={{ once: true, amount: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className=" bg-bg-card p-12 rounded-[3rem] shadow-sm border border-[#5E6738]/5 group hover:border-olive/20 transition-all duration-500">
              <div className="flex flex-col justify-center items-center">
                <div className="text-olive mb-1 flex justify-center text-4xl transform group-hover:scale-110 transition-transform">
                  <DressCodeIcon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl serif font-semibold italic text-primary">
                  Dress Code
                </h3>
                <p className="text-text-primary leading-relaxed font-bold ">
                  Esporte Fino
                </p>
                <p className="text-text-secondary text-sm italic leading-relaxed">
                  Pedimos gentilmente que evitem o branco e o verde oliva.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Grande_Dia;
