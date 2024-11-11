/* eslint-disable react/prop-types */
import { createContext, Component } from 'react';
import { login } from '../api/login';

// Criando o contexto global
const GlobalContext = createContext();

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,           // Informações do usuário logado
      authenticated: false, // Indicador se o usuário está autenticado
      productList: [],      // Lista de produtos
      cart: [],             // Carrinho de compras
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
      this.setState({
        errorMessage: 'Erro ao realizar login. Por favor, tente novamente.',
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
  addToCart(product) {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  }

  // Função para remover produto do carrinho
  removeFromCart(productId) {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== productId),
    }));
  }

  // Função para definir a lista de produtos
  setProductList(products) {
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
