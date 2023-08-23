import { Link } from 'react-router-dom';
import './index.scss'
const Header = () => {
    
  return (
    <header className="Header">
      <Link to={"/"}><h1>POKEDEX</h1></Link>
          
    </header>
  );
};

export default Header;