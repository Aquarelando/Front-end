import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Services';
import CardProduto from '../cardProduto/CardProduto';
import Produtos from '../../../models/Produtos';
import CardProdutoUsuario from '../cardProdutoUsuario/CardProdutoUsuario';


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar('/produtos/todos', setProdutos, {
        headers: {
        },
      });
    } catch (error: any) {
    {
        alert('Erro ao buscaro Produtos')
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {usuario.tipo === 'dev' ? (
            produtos.map((produto) => (

              <CardProduto key={produto.id} produto={produto} />
            ))
          
        ) : (
            produtos.map((produto) => (

              <CardProdutoUsuario key={produto.id} produto={produto} />
            ))
        )}
        
      </div>
    </>
  );
}

export default ListaProdutos;