import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser, errorMessage, authenticated } = useContext(GlobalContext);
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(cpf);
  };

  useEffect(() => {
    if (authenticated) {
      navigate('/home');
    }
  }, [authenticated, navigate]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-15">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="cpf" className="form-label">CPF</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cpf"
                    value={cpf}
                    onChange={handleInputChange}
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
};

export default Login;
