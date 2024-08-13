import Card, { CardProps } from "@/components/Card/page";
import Header from "./(header)/page";
import card1 from "../public/assets/card1.png";
import card2 from "../public/assets/card2.png";
import card3 from "../public/assets/card3.png";
import card4 from "../public/assets/card4.png";
import PriceCard, { PriceCardProps } from "@/components/PriceCard/page";

const cards: CardProps[] = [
  {
    bgUrl: card3,
    isActive: true,
    title: "Automatize pagamentos de aluguel",
    description:
      "Aceite pagamentos ACH, cartão de crédito e eCheck através do nosso portal online seguro",
  },
  {
    bgUrl: card1,
    isActive: false,
    title: "Simplifique a comunicação com os inquilinos",
    description:
      "Crie uma linha direta com os inquilinos com mensagens no aplicativo e PUSH notifications",
  },
  {
    bgUrl: card2,
    isActive: false,
    title: "Simplifique as solicitações de manutenção",
    description:
      "Capacite os inquilinos a enviar e rastrear solicitações de manutenção por meio do nosso aplicativo",
  },
  {
    bgUrl: card4,
    isActive: false,
    title: "Facilitar reservas das instalações",
    description:
      "Permita que os inquilinos reservem comodidades e áreas comuns por meio do nosso aplicativo",
  },
];

const priceCards: PriceCardProps[] = [
  {
    title: "Mensal",
    period: "mês",
    price: 49.9,
    serviceCheckList: [
      {
        description: "Controle total dos gastos e inadimplência do condomínio",
        isChecked: true,
      },
      {
        description: "Fácil comunicação via chat ou e-mail com os moradores",
        isChecked: true,
      },
      {
        description: "Emissão de segunda via de boletos em um clique",
        isChecked: true,
      },
      {
        description: "Acesso a todas novas features futuras",
        isChecked: false,
      },
    ],
  },
  {
    title: "Anual",
    period: "ano",
    price: 299.9,
    serviceCheckList: [
      {
        description: "Controle total dos gastos e inadimplência do condomínio",
        isChecked: true,
      },
      {
        description: "Fácil comunicação via chat ou e-mail com os moradores",
        isChecked: true,
      },
      {
        description: "Emissão de segunda via de boletos em um clique",
        isChecked: true,
      },
      {
        description: "Acesso a todas novas features futuras",
        isChecked: true,
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="sm:mt-1 mx-auto max-w-[960px] my-[-1.25rem]">
        <main>
          <section id="hero">
            <div className="bg-cover bg-no-repeat bg-center bg-[url('../public/hero.png')] h-[40%]">
              <div className="flex flex-col justify-between sm:mt-12 lg:p-16 pt-0 pb-8 px-8 gap-6">
                <h1 className="mt-24 font-extrabold text-[2.6rem] text-white leading-snug">
                  Eleve a gestão de contas do seu condomínio com a CondoFacil
                </h1>
                <span className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] block text-white text-base leading-[1.6]">
                  Nossa plataforma digital simplifica a comunicação, a
                  manutenção e os pagamentos para que você possa se concentrar
                  em criar uma ótima experiência de vida.
                </span>
                <div className="flex mt-6 gap-6">
                  <button className="text-white rounded-lg cursor-pointer bg-[#2B8FE3] py-4 px-3">
                    Comece por aqui
                  </button>
                  <button className="rounded-lg cursor-pointer bg-[#F0F2F5] py-4 px-3">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="my-10 m-4">
            <h2 className=" font-extrabold text-4xl text-[#121417]">
              Como a CondoFácil funciona para você
            </h2>
            <p className="mt-8 sm:mt-6 leading-[2] font-normal text-[#121417]">
              Nossa plataforma digital simplifica a comunicação, a manutenção e
              os pagamentos para que você possa se concentrar em criar uma ótima
              experiência de vida.
            </p>
          </section>
          <section
            id="services"
            className="flex lg:flex-row flex-wrap mx-4 lg:justify-between justify-center sm:gap-2 gap-12"
          >
            {cards.map((card) => (
              <Card key={card.bgUrl.src} {...card} />
            ))}
          </section>
          <section
            id="prices"
            className="flex lg:flex-nowrap flex-wrap gap-4 justify-center"
          >
            {priceCards.map((priceCard) => (
              <PriceCard {...priceCard} />
            ))}
          </section>
        </main>

        <footer id="cta" className="text-center justify-center pt-6 pb-14">
          <h3 className="font-extrabold text-4xl py-4">Informe seu e-mail</h3>
          <div className="flex justify-center mt-4">
            <input
              placeholder="Digite seu e-mail"
              className=" border-none outline-none p-3 bg-gray-200 rounded-lg"
              type="email"
            />
            <button className="text-white rounded-lg cursor-pointer bg-[#2B8FE3] py-3 px-3">
              Começar
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
