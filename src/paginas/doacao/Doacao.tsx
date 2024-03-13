import React, { useState } from 'react';
import Menino from '../../assets/menino na escada.png'; 
import Menina from '../../assets/menina na escada.png';
import ModalAgradecimento from './ModalDoacao';
function DoacaoPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [valorDoacao, setValorDoacao] = useState('');
  const [doacaoCompleta, setDoacaoCompleta] = useState(false);

  const handleValorDoacaoChange = (event) => {
    setValorDoacao(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome && email && valorDoacao) {
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Valor da Doação:', valorDoacao);
      setDoacaoCompleta(true);
      setNome('');
      setEmail('');
      setValorDoacao('');
      setTimeout(() => {
        setDoacaoCompleta(false);
      }, 3000);
    } else {
      alert('Por favor, preencha todos os campos antes de enviar a doação.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#439DA6] to-[#26668b]">
      <div className="w-3/4 max-w-lg relative">
        <div className="bg-[#FD98B4] rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Faça sua Doação</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-700">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)} 
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="valorDoacao" className="block text-gray-700">Valor da Doação</label>
              <input
                type="number"
                id="valorDoacao"
                name="valorDoacao"
                value={valorDoacao}
                onChange={handleValorDoacaoChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            {doacaoCompleta && (
              <ModalAgradecimento />
            )}
            <div className="flex justify-center">
              <button className='px-4 py-2 text-white bg-[#4088C4] rounded-md hover:bg-[#3478A7] focus:outline-none' type='submit'>
                Doar
              </button>
            </div>
          </form>
        </div>
        <div className="absolute top-[-25px] left-[-120px]">
          <img src={Menino} alt="menino" className="h-auto w-32" /> 
        </div>
        <div className="absolute top-[-10px] right-[-116px]">
          <img src={Menina} alt="menina" className="h-auto w-32" /> 
        </div>
      </div>
    </div>
  );
}

export default DoacaoPage;