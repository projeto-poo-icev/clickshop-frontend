import { Component } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

class Login extends Component {
  static contextType = GlobalContext; // Vinculando o contexto global ao componente

  constructor(props) {
    super(props);
    this.state = {
      cpf: '', // O valor inicial do input de CPF é uma string vazia
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ cpf: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { loginUser } = this.context;
    loginUser(this.state.cpf);
  }

  render() {
    const { errorMessage } = this.context;

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-15">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Login</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cpf"
                      value={this.state.cpf}
                      onChange={this.handleInputChange}
                      placeholder="Digite seu CPF"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Entrar
                  </button>
                </form>
                {errorMessage && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                  </div>
                )}
                <div className="text-center mt-3">
                  <a href="/create-user">Criar usuário</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
