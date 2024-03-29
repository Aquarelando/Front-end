
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import Home from './paginas/home/Home';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import FormularioCategoria from './components/categorias/fomularioCategoria/FormularioCategoria';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produto/listaProduto/ListaProduto';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import Cart from './components/cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import Pagamentos from './paginas/pagamentos/Pagamentos';
import Perfil from './paginas/perfil/Perfil';
import Doacao from './paginas/doacao/Doacao';

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/categorias" element={<ListaCategoria />} />
                <Route path="/categoria/novo" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/produtos/novo" element={<FormularioProduto />} />
                <Route path="/produtos/editar/:id" element={<FormularioProduto />} />
                <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/seguranca" element={<Pagamentos />} />
                <Route path="/doacao" element={<Doacao />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </>
  );
}
export default App;