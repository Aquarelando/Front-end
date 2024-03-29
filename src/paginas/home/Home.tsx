import homeLogo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import seta from "../../assets/dfxKC3k.png";
import "./Home.css";
import bemvindo from "../../assets/bemvindo.png";
import StoryTelling from "../storytelling/StoryTelling";

function Home() {
  return (
    <>
      <div className="home flex justify-center bg-gradient-to-b from-[#439da6] to-[#26668b] pb-20 mobilemax:hidden">
        <div className="container grid grid-cols-2 text-white">
          <div className="container ml-60 desliza">
            <img src={homeLogo} alt="logo aquarelando" className="mt-20" />
            <div className="caixa text-2xl">
              <div className=" pr-[80px] mb-20">
                <h1 className="text-5xl font-semibold text-shadow">1K+</h1>
                <p className="text-base">Reviews</p>
              </div>

              <div className=" pr-[80px]">
                <h1 className="text-5xl font-semibold text-shadow">5K+</h1>
                <p className="text-base">Vendas</p>
              </div>

              <div>
                <h1 className="text-5xl font-semibold text-shadow">150K+</h1>
                <p className="text-base">Crianças ajudadas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center py-4 text-white desliza2">
          <img
            src={bemvindo}
            alt=""
            style={{ width: "540px", height: "auto" }}
          />
          <p className="text-xl">
            Ajude a colorir o caminho da nova geração com a Aquarelando! Todos
            os lucros das compras irão diretamente para ONGs educacionais.
          </p>

          <div className="flex justify-around gap-4 button-container">
            <Link
              to="/produtos"
              className="rounded-full bg-[#fd98b4] text-white py-3 px-6 text-xl flex flex-row items-center button-content"
            >
              Compre já
              <img
                src={seta}
                alt="seta para comprar"
                className="ml-4 max-w-8 arrow-img"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mobilemax:hidden">
        <StoryTelling />
      </div>

      {/* Mobile*/}
      <div className="mobilemin:hidden bg-gradient-to-b from-[#439da6] to-[#26668b]">
        <div>
          <div className="flex flex-col gap-4 items-center justify-center py-4 text-white desliza2">
            <img
              src={bemvindo}
              alt=""
              style={{ width: "540px", height: "auto" }}
              className="mt-5 w-[100%]"
            />
            <img src={homeLogo} alt="logo aquarelando" className="" />
            <p className="text-xl text-center">
              Ajude a colorir o caminho da nova geração com a Aquarelando! Todos
              os lucros das compras irão diretamente para ONGs educacionais.
            </p>

            <div className="flex justify-around gap-4 button-container">
              <Link
                to="/produtos"
                className="rounded-full bg-[#fd98b4] text-white py-3 px-6 text-xl flex flex-row items-center button-content"
              >
                Compre já
                <img
                  src={seta}
                  alt="seta para comprar"
                  className="ml-4 max-w-8 arrow-img"
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div className="caixa text-2xl p-3 text-white ">
              <div className="mb-10 pr-[5%] pl-[5%] text-center">
                <h1 className="text-4xl font-semibold text-shadow ">1K+</h1>
                <p className="text-base">Reviews</p>
              </div>

              <div className="pr-[5%] text-center">
                <h1 className="text-4xl font-semibold text-shadow ">5K+</h1>
                <p className="text-base">Vendas</p>
              </div>

              <div>
                <h1 className="text-4xl font-semibold text-shadow text-center">
                  150K+
                </h1>
                <p className="text-base text-center">Crianças ajudadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobilemin:hidden">
        <StoryTelling />
      </div>
    </>
  );
}

// https://www.geeksforgeeks.org/how-to-create-a-curve-text-using-css3-canvas/

export default Home;