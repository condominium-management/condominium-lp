import Header from "./(header)/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-8">
        <div className="max-w-[960px]">
          <div className="bg-cover bg-no-repeat bg-center bg-[url('../public/hero.png')] h-[480px]">
            <div className="flex flex-col justify-between mt-12 p-16 gap-6">
              <h1 className="mt-24 font-extrabold text-[2.6rem] text-white leading-snug">
                Eleve a gestão de contas do seus condomínio com a CondoFacil
              </h1>
              <span className="block text-white text-base leading-[1.6]">
                Nossa plataforma digital simplifica a comunicação, a manutenção
                e os pagamentos para que você possa se concentrar em criar uma
                ótima experiência de vida.
              </span>
              <div className="flex mt-6 gap-6">
                <button className="text-white rounded-lg cursor-pointer bg-[#2B8FE3] p-2">
                  Comece por aqui!
                </button>
                <button className="rounded-lg cursor-pointer bg-[#F0F2F5] p-3">
                  Aprenda mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
