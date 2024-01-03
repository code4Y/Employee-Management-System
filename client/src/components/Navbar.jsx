import { Link } from 'react-router-dom';
import logo from '../assets/emp-logo.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <Link to="/register">
          <button>Register Employee</button>
        </Link>
        <Link to="/search">
          <button>Search Employee</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
