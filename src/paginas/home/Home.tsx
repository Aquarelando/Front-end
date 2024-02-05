import React, { useContext } from 'react';
import homeLogo from '../../assets/Logo.png'
import { UserContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import Carrossel from '../../components/carrosel/Carrossel';
import ListaProduto from '../../components/produto/listaProduto/ListaProduto';

function Home() {

  return (
    <>
    <div className="flex justify-center bg-gradient-to-b from-[#439da6] to-[#26668b]">
      <div className='container grid grid-cols-2 text-white'>

        <div className="flex justify-center ">
          <img src={homeLogo} alt="" className='w-2/3'/>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className='text-5xl font-bound'>BEM VINDO(A)!</h2>
          <p className='text-xl'>Ajude a colorir o caminho da nova geração com a Aquarelando! Todos os lucros das compras irão diretamente para ONGs educacionais.</p>

          <div className="flex justify-around gap-4">
          
            <button className='rounded-full bg-[#fd98b4] text-white py-1 px-4'>Compre já</button>
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