import { Link } from "react-router-dom"
import sobre from "../../assets/sobre.png"
// import Carrossel2 from "../../components/carrosel/Carrossel2"
import './Sobre.css'

function Sobre() {
  return (
    <>
        <div className="mt-[70px] flex">
          <div>
            <p className="ml-24 text-7xl">Sobre nós</p>
            <div>
              <img src={sobre} alt="imagem sobre" className="ml-[30px] h-[400px] w-[900px] mt-[190px]" />
            </div>
          </div>
          <div>
            <p className="text-4xl text-left">Prazer em conhece-los, somos a equipe desenvolvedora do Aquarelando!</p>
            <p className="text-[15px] mt-[30px] mb-[1px] text-left">Expressamos profunda gratidão a todos que apoiaram o projeto "Aquarelando".<br></br> Estamos felizes por concluí-lo e destinar os fundos arrecadados a ONGs e escolas de baixa renda.<br></br> Agradecemos por tornarem isso possível e por contribuírem para um futuro mais justo e educacionalmente enriquecedor.<br></br> O compromisso com causas humanitárias persiste, contando com o apoio contínuo.</p>          
            {/* <Carrossel2/> */}

            <div className="foto-container mr-4">
              <Link to="https://github.com/littlledan" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/148507447?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#fd98b4]/80">
                <h2>Daniel L.</h2>
                <p>Desenvolvedor full stacker com foco em Backend.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>
            <div className="foto-container mr-4">
              <Link to="https://github.com/Raafa22" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/148557678?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#439da6]/80">
                <h2>Rafael C.</h2>
                <p>Desenvolvedor full stacker com foco em Backend.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>
            <div className="foto-container mr-4">
              <Link to="https://github.com/WesleyBert" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/90710910?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#fd98b4]/80">
                <h2>Wesley B.</h2>
                <p>Desenvolvedor full stacker com foco em Backend.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>
            <div className="foto-container mr-4">
              <Link to="https://github.com/IsabellaCorreiadosantos" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/148590800?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#439da6]/80">
                <h2>Isabela C.</h2>
                <p>Desenvolvedor full stacker com foco em Backend.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>
            <div className="foto-container ml-28 mr-4">
              <Link to="https://github.com/BiaAkemi" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/145511213?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#fd98b4]/80">
                <h2>Bianca A.</h2>
                <p>Dev Back End cursando Engenharia de Software.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>
            <div className="foto-container mr-4">
              <Link to="https://github.com/gustavoalcantaradev" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/107977597?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#439da6]/80">
                <h2>Gustavo A.</h2>
                <p>Desenvolvedor full stacker com foco em Backend.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>
            <div className="foto-container mr-4">
              <Link to="https://github.com/Jeffersonfelizx" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/95946565?v=4" alt="imagem do Daniel" className="rounded-3xl size-52 imagem-foto foto-sombra"/>
              </Link>
              <div className="descricao-holder rounded-l-3xl bg-[#fd98b4]/80">
                <h2>Jefferson F.</h2>
                <p>Desenvolvedor full stacker com foco em Backend.<br></br><br></br>Clique e saiba mais!</p>
              </div>
            </div>

          </div>
        </div>

        
    </>
  )
}

export default Sobre