import  { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logoutUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/'); // Redirecionar para a página de login
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">ClickShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home/createProduct">Criar Produto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/outros-menus">Outros Menus</Link>
            </li>
          </ul>
          <span className="navbar-text me-3">
            Olá, {user?.name || 'Usuário'}
          </span>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
