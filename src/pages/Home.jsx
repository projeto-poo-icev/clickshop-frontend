import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreateProduct from '../components/CreateProduct';
import { GlobalContext } from '../context/GlobalContext';
import getPoducts from '../api/getProducts';
import ProductList from '../components/ProductList';


const Home = () => {
  const { setProductList } = useContext(GlobalContext);

  const fetchProducts = async () => {
    try {
      const response = await getPoducts();
      console.log(response)
      setProductList(response.data)
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="outros-menus" element={<div>Conteúdo de Outros Menus</div>} />
          <Route path="/" element={<div>Bem-vindo à ClickShop</div>} />
        </Routes>
        <ProductList />
      </div>
      <Footer />
    </>
  );
};

export default Home;
