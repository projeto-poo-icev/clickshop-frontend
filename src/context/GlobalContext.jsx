import { createContext, Component } from 'react';
import { login } from '../api/login';
import getPoducts from '../api/getProducts';

// Criando o contexto global
const GlobalContext = createContext();

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,           // Informações do usuário logado
      authenticated: false, // Indicador se o usuário está autenticado
      productList: [],      // Lista de produtos
      cart: [],             // Carrinho de compras (guarda id do produto e quantidade)
      errorMessage: '',     // Mensagem de erro (caso exista)
    };
    
    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.setProductList = this.setProductList.bind(this);
  }

  // Função de login
  async loginUser(cpf) {
    try {
      const response = await login(cpf);
      if (response.status === 200) {
        this.setState({
          user: response.data,
          authenticated: true,
          errorMessage: '',
        });
        
        console.log('Login realizado com sucesso:', response.data);
      } else {
        this.setState({
          errorMessage: "Usuário não encontrado!"
        })
      }
    } catch (error) {
      console.log(error);
      this.setState({
        errorMessage: error,
        authenticated: false,
      });
    }
  }

  // Função de logout
  logoutUser() {
    this.setState({
      user: null,
      authenticated: false,
      cart: [],
    });
  }

  // Função para adicionar produto ao carrinho
  addToCart(productId) {
    this.setState((prevState) => {
      const existingProductIndex = prevState.cart.findIndex(item => item.productId === productId);
      
      // Se o produto já estiver no carrinho, aumenta a quantidade
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevState.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { cart: updatedCart };
      }

      // Se não estiver no carrinho, adiciona o produto com quantidade 1
      return { cart: [...prevState.cart, { productId, quantity: 1 }] };
    });
  }

  // Função para remover produto do carrinho
  removeFromCart(productId) {
    this.setState((prevState) => {
      const existingProductIndex = prevState.cart.findIndex(item => item.productId === productId);

      // Se o produto estiver no carrinho e a quantidade for maior que 1, diminui a quantidade
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevState.cart];
        if (updatedCart[existingProductIndex].quantity > 1) {
          updatedCart[existingProductIndex].quantity -= 1;
        } else {
          // Se a quantidade for 1, remove o item do carrinho
          updatedCart.splice(existingProductIndex, 1);
        }
        return { cart: updatedCart };
      }

      return prevState;
    });
  }

  // Função para definir a lista de produtos
  async setProductList() {
    const products = await getPoducts();
    this.setState({ productList: products });
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          user: this.state.user,
          authenticated: this.state.authenticated,
          productList: this.state.productList,
          cart: this.state.cart,
          loginUser: this.loginUser,
          logoutUser: this.logoutUser,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          setProductList: this.setProductList,
          errorMessage: this.state.errorMessage,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContext, GlobalProvider };
