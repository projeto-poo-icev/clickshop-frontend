/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(GlobalContext);

  // Encontrar o item no carrinho
  const cartItem = cart.find(item => item.productId === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="card h-100 shadow-sm rounded mb-4">
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-capitalize">{product.description}</h5>
        <p className="card-text fw-bold">Preço: R$ {product.price.toFixed(2).replace('.', ',')}</p>
        <p className="card-text">Quantidade no carrinho: <span className="fw-semibold">{quantityInCart}</span></p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-primary flex-grow-1 me-2"
              onClick={() => addToCart(product.id)}
            >
              Adicionar
            </button>
            <button
              className="btn btn-outline-danger flex-grow-1"
              onClick={() => removeFromCart(product.id)}
              disabled={quantityInCart === 0}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
