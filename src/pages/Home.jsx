
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreateProduct from '../components/CreateProduct';


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/home/createProduct" element={<CreateProduct />} />
          <Route path="outros-menus" element={<div>Conteúdo de Outros Menus</div>} />
          <Route path="/" element={<div>Bem-vindo à ClickShop</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Home;
