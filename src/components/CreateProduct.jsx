import  { useState } from 'react';


const CreateProduct = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (value) {
      const formattedValue = (parseInt(value, 10) / 100).toFixed(2).replace('.', ',');
      setPrice(formattedValue);
    } else {
      setPrice('');
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (price <= 0 || quantity <= 0) {
      alert('Preço e quantidade devem ser maiores que zero.');
      return;
    }
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Preço</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Digite o preço do produto"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantidade</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Digite a quantidade do produto"
            min="0"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Criar Produto</button>
      </form>
    </div>
  );
};

export default CreateProduct;
