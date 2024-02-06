import React, { useContext } from 'react';
import homeLogo from '../../assets/Logo.png'
import { UserContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import Carrossel from '../../components/carrosel/Carrossel';
import ListaProduto from '../../components/produto/listaProduto/ListaProduto';
import seta from '../../assets/dfxKC3k.png';
import './Home.css'

function Home() {

  return (
    <>

      <div className="flex justify-center bg-gradient-to-b from-[#439da6] to-[#26668b]">
        <div className='container grid grid-cols-2 text-white'>

          <div className="container space-x-6 w-full">
          
            <img src={homeLogo} alt="logo aquarelando" className="mt-20" />
              <div className='caixa'>
                <div className="info">
                  <h1>1K+</h1>
                  <p>Reviews</p>
                </div>

                <div className="info">
                  <h1>5K+</h1>
                  <p>Vendas</p>
                </div>
                
                <div className="info">
                  <h1>150K+</h1>
                  <p>Crianças ajudadas</p>
                </div>
              </div>

          </div>

           <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-bound'>BEM VINDO(A)!</h2>
          <p className='text-xl'>Ajude a colorir o caminho da nova geração com a Aquarelando! Todos os lucros das compras irão diretamente para ONGs educacionais.</p>

          <div className="flex justify-around gap-4">
          
          <Link to='/produtos' className='rounded-full bg-[#fd98b4] text-white py-3 px-6 text-xl flex flex-row items-center' >Compre já<img src={seta} alt="seta para comprar" className="ml-4 max-w-8" /></Link>
          </div>
        </div> 

        </div>
      </div>
      
      <div>

        <Carrossel />

        <ListaProduto />
      </div>

    </>
  );
}

export default Home;