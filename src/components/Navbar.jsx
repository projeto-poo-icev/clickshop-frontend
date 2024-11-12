import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { user, logoutUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/'); // Redirecionar para a página de login
  };

  // Definindo as classes de estilo para o nível do cliente
  const customerLevelClass = () => {
    if (user?.CustomerLevel === 'VIP') {
      return 'btn btn-outline-dark position-relative'; // Borda preta e posição relativa para a coroinha
    } else if (user?.CustomerLevel === 'PRATA') {
      return 'btn btn-outline-secondary';
    } else {
      return 'btn btn-outline-warning'; // BRONZE por padrão
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">ClickShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home/createProduct">Criar Produto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/outros-menus">Outros Menus</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <span className="navbar-text me-3">
              Olá, {user?.name || 'Usuário'}
            </span>
            <button className={`${customerLevelClass()} me-2`} disabled>
              {user?.CustomerLevel || 'BRONZE'}
              {user?.CustomerLevel === 'VIP' && (
                <FontAwesomeIcon icon={faCrown} className="position-absolute top-0 start-100 translate-middle text-warning" />
              )}
            </button>
            <button className="btn btn-outline-success me-3" disabled>
              Cashback: R$ {user?.cashback?.toFixed(2).replace('.', ',') || '0,00'}
            </button>
            <button className="btn btn-danger" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
