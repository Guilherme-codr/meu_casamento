import CardPresentes from "../assets/CardPresentes";
import sopara from "../assets/Fotos/SoPara.jpg";
import adoteumboleto from "../assets/Fotos/AdoteUmBoleto.jpg";
import Noivacobertaderazao from "../assets/Fotos/NoivaCobertaDeRazao.jpg";
import Sachegato from "../assets/Fotos/SacheGato.jpg";
import Olhaaviao from "../assets/Fotos/OlhaOAviaozinho.jpg";
import Culinaria from "../assets/Fotos/CursoDeCulinaria.jpg";
import Placavideo from "../assets/Fotos/Placavideo.jpg";

const Lista_Presentes = () => {
  const presentes = [
    { id: 1,
       name: "Adote um boleto vencido", 
       price: 150, 
       icon: adoteumboleto
      },

    {
      id: 2,
      name: "Cobertor para a noiva estar sempre coberta de razão",
      price: 0,
      icon: Noivacobertaderazao,
    },

    {
      id: 3,
      name: "Dinheirinho para comprar sachê para os gatos",
      price: 0,
      icon: Sachegato,
    },

    { id: 4, 
      name: "Olha o Aviãozinho", 
      price: 0, 
      icon: Olhaaviao },

    { id: 5, 
      name: "Curso de culinária em casal", 
      price: 0, 
      icon: Culinaria },

    { id: 6, 
      name: "Tapete de boas-vindas", 
      price: 0, 
      icon: "" },

    { id: 7, 
      name: "Spa day para os noivos", 
      price: 0, 
      icon: "" },

    {
      id: 8,
      name: "Vale para os noivos envelhecerem juntos ",
      price: 0,
      icon: "",
    },

    { id: 9, 
      name: "Cota para a viagem de lua de mel", 
      price: 0, 
      icon: "" },

    {
      id: 10,
      name: "Lava-louças para o noivo arrumar a bagunça",
      price: 0,
      icon: "",
    },
    {
      id: 11,
      name: "Kit churrasqueiro para o noivo comandar o almoço de domingo",
      price: 0,
      icon: "",
    },

    { id: 12, 
      name: "Itens de banho premium para a noiva", 
      price: 0, 
      icon: "" },

    {
      id: 13,
      name: "Hortinha de apartamento para a noiva cozinhar com temperos frescos",
      price: 0,
      icon: "",
    },

    { id: 14, 
      name: "1 ano de barbeiro para o noivo", 
      price: 0, 
      icon: "" },

    {
      id: 15,
      name: "Alexa para a noiva não chamar só o noivo",
      price: 0,
      icon: "",
    },

    {
      id: 16,
      name: "Primeiro delivery de casados para o noivo não precisar arrumar a cozinha pelo menos um dia",
      price: 0,
      icon: "",
    },

    {
      id: 17,
      name: "Lençol de 600 fios egípcios para os noivos dormirem bem",
      price: 0,
      icon: "",
    },

    { id: 18, 
      name: "Passeio de lancha para os noivos", 
      price: 0, 
      icon: "" },

    { id: 19, 
      name: "Ajudinha no dia da noiva", 
      price: 0, 
      icon: "" },

    {
      id: 20,
      name: "Placa de vídeo RTX5060 para o noivo curtir ",
      price: 0,
      icon: Placavideo,
    },

    {
      id: 21,
      name: "6 meses de Netflix para a noiva assistir enquanto o noivo curte a placa de vídeo ",
      price: 0,
      icon: "",
    },

    { id: 22,
      name: "Upgrade no setup do noivo", 
      price: 0, 
      icon: "" },

    {
      id: 23,
      name: "2 anos de coca zero para a noiva aguentar a residência",
      price: 0,
      icon: "",
    },

    {
      id: 24,
      name: "Robô aspirador para limpar os cabelos da noiva espalhados pela casa",
      price: 0,
      icon: "",
    },

    {
      id: 25,
      name: "Uma prateleira maior para a noiva guardar os livros",
      price: 0,
      icon: "",
    },

    {
      id: 26,
      name: "Cota psicóloga também precisa de terapia",
      price: 0,
      icon: "",
    },

    { id: 27, 
      name: "Pix para a noiva se mimar", 
      price: 0, 
      icon: "" },

    {
      id: 28,
      name: "Alvará para o noivo poder pular de paraquedas",
      price: 0,
      icon: "",
    },

    { id: 29, 
      name: "Pix solidário", 
      price: 0, 
      icon: "" },

    { id: 30, 
      name: "Só para não dizer que não dei nada", 
      price: 0, 
      icon: sopara },
  ];

  return (
    <section
      id="presentes"
      className="relative flex flex-wrap justify-center items-center scroll-mt-20 md:scroll-mt-40 "
    >
      <div className="p-10 bg-bg-transition min-h-screen max-w-screen items-center flex flex-col">
        <h1 className="text-text-primary font-primary text-7xl md:text-8xl font-bold mb-8 text-center">
          Lista de Presentes
        </h1>

        {/* Grid Responsivo com Tailwind */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl w-full">
          {presentes.map((presente) => (
            <CardPresentes
              key={presente.id} // Importante para o React identificar cada item
              name={presente.name}
              price={presente.price}
              icon={presente.icon}
            />
          ))}
        </div>

        <section
          id="presentear"
          className="flex flex-wrap justify-center items-center scroll-mt-20 md:scroll-mt-40"
        ></section>
      </div>
    </section>
  );
};

export default Lista_Presentes;
