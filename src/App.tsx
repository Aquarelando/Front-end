
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
                <Route path="/categorias" element={<ListaCategoria />} />
                <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/cadastroProduto" element={<FormularioProduto />} />
                <Route path="/editarProduto/:id" element={<FormularioProduto />} />
                <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/seguranca" element={<Pagamentos />}/>

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