import { useState } from 'react';

const CreateProduct = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer a lógica de enviar o produto para o backend
    console.log('Produto Criado:', { description, price, quantity });
    alert(`Produto "${description}" criado com sucesso!`);
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div className="container mt-4">
      <h2>Criar Produto - ClickShop</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descrição do Produto</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição do produto"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Preço</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Digite o preço do produto"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantidade</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Digite a quantidade do produto"
          />
        </div>
        <button type="submit" className="btn btn-primary">Criar Produto</button>
      </form>
    </div>
  );
};

export default CreateProduct;
