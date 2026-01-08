import { motion } from "framer-motion";

function Grande_Dia() {
  return (
    <section className="relative flex justify-center py-[] items-center md:py-20 px-6 max-w-5xl mx-auto scroll-mt">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <h1 className="font-primary text-text-primary text-4xl md:text-8xl font-semibold">
          O Grande Dia
        </h1>
      </motion.div>
    </section>
  );
}

export default Grande_Dia;
