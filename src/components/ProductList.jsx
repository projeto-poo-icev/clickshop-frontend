import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { productList } = useContext(GlobalContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
