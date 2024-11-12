/* eslint-disable react/prop-types */
import  { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    console.log(`Produto ${product.id} adicionado ao carrinho.`);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      console.log(`Produto ${product.id} removido do carrinho.`);
    }
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.description}</h5>
        <p className="card-text">Preço: R$ {product.price.toFixed(2).replace('.', ',')}</p>
        <p className="card-text">Quantidade disponível: {product.quantity}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>
          <button
            className="btn btn-danger"
            onClick={handleRemoveFromCart}
            disabled={quantity === 0}
          >
            Remover do Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
