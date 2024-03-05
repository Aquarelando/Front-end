import { Link } from "react-router-dom"
import ongs from '../../assets/ongs.png'
import ongs2 from '../../assets/ongs2.png'
import aviaopapel from '../../assets/aviaopapel.png'
import Carrossel3 from "../../components/carrosel/Carrossel3"
import './StoryTelling.css'

function StoryTelling() {
    return (
      <>
        <Carrossel3/>
          <div className="flex pl-40 mt-14">
            <div>
                <p className="text-base mt-10 mb-8">Estamos buscando doações para sustentar e fortalecer<br>
                </br> nossa causa. Se você deseja fazer a diferença, clique aqui<br>
                </br> e contribua com qualquer valor. Sua generosidade faz<br>
                </br> com que nossos esforços se tornem realidade. Agradecemos profundamente pelo seu apoio.</p>
                <Link to='/doacao' className='rounded-full bg-[#439da6] text-white py-1 px-8 text-xl flex-row items-center'>DOE AQUI</Link>
            </div>
            <div className="ml-8">
                <Link to='' className='rounded-3xl bg-[#fd98b4] text-white py-6 px-[28%] text-xl'>GALERIA DE FOTOS</Link>
                <img src={ongs} alt="Imagem das Ongs" className="w-[80%] mt-12  rounded-3xl"/>
            </div>
          </div>

          <img src={aviaopapel} alt="Avião de papel" className="h-20 w-48 pula"/>

          <div className="mt-10 mb-10">
            <hr className="ml-36 mr-40 border-t-2 border-gray-400" />
          </div>

          <div className="flex pl-40 mt-10 ">
            <div>
                <img src={ongs2} alt="Crianças recebendo livros" className="w-[90%] h-80 rounded-3xl"/>
            </div>
            <div className="">
                <header className="text-xl text-center">Aquarelando Transforma Vendas em Educação:<br></br> Mais de 200 Livros Didáticos Doados para ONGs</header>
                <p className="text-sm mb-8 text-center">A Aquarelando surpreende ao disponibilizar mais de 200 livros didáticos para ONGs, utilizando<br>
                </br> os recursos provenientes das vendas de seus materiais escolares.<br>
                </br> A iniciativa reforça o compromisso da empresa com a responsabilidade social, visando promover<br>
                </br> o acesso à educação em comunidades carentes. As pessoas interessadas em ajudar podem se<br>
                </br> cadastrar no site da Aquarelando para fazer doações ou comprar materiais escolares,<br>
                </br> destacando como a empresa vai além de seu papel comercial para contribuir ativamente para<br>
                </br> o desenvolvimento educacional da sociedade.</p>
                <Link to='' className='rounded-3xl bg-[#fd98b4] text-white py-1 px-2 text-lg'>Leia mais</Link>
            </div>
          </div>
  
          
      </>
    )
  }
  
  export default StoryTelling