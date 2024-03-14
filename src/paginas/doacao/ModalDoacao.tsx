import React from 'react';

function ModalDoacao() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-md mx-auto my-6">
        <div className="bg-[#4088C4] rounded-lg shadow-lg">
          <div className="flex justify-center items-center p-5">
            <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
          <div className="text-center p-8">
          <img src="https://img.freepik.com/vetores-premium/ursinho-fofo-segurando-coracao_343377-39.jpg" alt="Imagem de agradecimento" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-xl font-semibold mb-4 text-gray-800">Agradecemos sua doação!</p>
            <p className="text-white-600">Sua contribuição foi recebida com sucesso.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDoacao;