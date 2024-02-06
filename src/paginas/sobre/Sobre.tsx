import sobre from "../../assets/sobre.png"
import Carrossel2 from "../../components/carrosel/Carrossel2"

function Sobre() {
  return (
    <>
        <div className="mt-[70px] flex">
          <div>
            <p className="ml-24 text-7xl">Sobre nós</p>
            <div>
              <img src={sobre} alt="imagem sobre" className="ml-[30px] h-[400px] w-[900px] mt-[109px]" />
            </div>
          </div>
          <div>
            <p className="text-4xl text-left">Prazer em conhece-los, somos a equipe desenvolvedora do Aquarelando!</p>
            <p className="text-[15px] mt-[30px] mb-[1px] text-left">Expressamos profunda gratidão a todos que apoiaram o projeto "Aquarelando".<br></br> Estamos felizes por concluí-lo e destinar os fundos arrecadados a ONGs e escolas de baixa renda.<br></br> Agradecemos por tornarem isso possível e por contribuírem para um futuro mais justo e educacionalmente enriquecedor.<br></br> O compromisso com causas humanitárias persiste, contando com o apoio contínuo.</p>          
            <Carrossel2/>
          </div>
        </div>

        
    </>
  )
}

export default Sobre