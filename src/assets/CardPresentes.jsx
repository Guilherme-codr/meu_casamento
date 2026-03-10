const CardPresentes = ({ name, price, icon }) => {
  return (
    <div className="bg-bg-card p-6 rounded-xl hover:shadow-black transition-all shadow-lg flex justify-center items-center">
      <div className="flex flex-col justify-between items-center mb-4">
        <div className="w-full h-64 md:h-94 overflow-hidden rounded-2xl">
          <img src={icon} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-2">
          <h3 className="font-bold text-primary pt-9 text-[20px] text-center ">{name}</h3>
          <span className="text-text-secondary text-xl flex justify-center pt-2">
            {price}
          </span>
          <a href="#presentear">
            <button className="mt-4 w-full bg-slate-900 text-white py-3 px-6 rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Presentear
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPresentes;
