import React from 'react'

function Pagamentos() {
  return (
    <body className="font-sans bg-[#439DA6] pt-[5vh]">
    <div className="container py-8 mx-auto text-center">
        <div className="flex justify-between ">
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="pt-4 mb-4 text-xl font-bold text-gray-800">Segurança de Pagamento</h2>
                <p className="mb-4 text-gray-700">Estamos comprometidos em garantir a segurança das suas transações
                    financeiras.</p>
                <ul className="text-gray-700">
                    <li className="flex items-center mb-2">
                        <svg className="w-4 h-4 mr-2 text-green-500 fill-current" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 8a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V8zm1 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Utilizamos tecnologia SSL para criptografar suas informações.
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="w-4 h-4 mr-2 text-green-500 fill-current" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 8a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V8zm1 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Nossa infraestrutura é protegida com firewalls avançados e sistemas de detecção de intrusão.
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="w-4 h-4 mr-2 text-green-500 fill-current" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 8a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V8zm1 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Mantemos uma equipe dedicada à segurança para monitorar e responder a qualquer ameaça potencial.
                    </li>
                </ul>
                <div className="container py-8 mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Formulário de Suporte</h2>
        <div className="max-w-md p-6 mx-auto rounded-lg shadow-md bg-[#FD98B4]">
            <form>
                <div className="mb-4">
                    <label  className="block font-semibold text-gray-700">Nome</label>
                    <input type="text" id="name" name="name" className="block w-full p-1 mt-1 border-gray-300 rounded-md form-input"/>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">E-mail</label>
                    <input type="email" id="email" name="email" className="w-full mt-1 border-gray-300 rounded-md p-1block form-input"/>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700">Telefone</label>
                    <input type="tel" id="email" name="email" className="block w-full p-1 mt-1 border-gray-300 rounded-md form-input"/>
                </div>
                <div className="mb-4">
                    <label  className="block font-semibold text-gray-700">Mensagem</label>
                    <textarea id="message" name="message" className="block w-full mt-1 border-gray-300 rounded-md form-textarea"></textarea>
                </div>
                <div className="mt-6">
                    <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Enviar</button>
                </div>
            </form>
        </div>
    </div>
            </div>
            <div className="pt-4 bg-white rounded-lg shadow-lg">
                <h2 className="pt-4 mb-4 text-xl font-bold text-gray-800">Entre em Contato</h2>
                <p className="mb-4 text-gray-700">Se você tiver alguma dúvida ou preocupação sobre a segurança do pagamento,
                    não hesite em entrar em contato conosco.</p>
                <button className='p-3 font-semibold text-indigo-600 bg-indigo-100 rounded-lg ext-lg hover:text-indigo-700 hover:bg-indigo-200'> Entrar em contato</button>
                <div className="container py-8 mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Onde nos encontrar</h2>
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3356368757915!2d-0.12865868422786418!3d51.50728521937335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c9ca72e3bf%3A0x6b3b52a2bf001b39!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1644200952245!5m2!1sen!2suk"
                width="600" height="450"  loading="lazy"></iframe>
        </div>
    </div>
            </div>
        </div>
    </div>
</body>
  )
}

export default Pagamentos