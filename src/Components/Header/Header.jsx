import {Link} from "react-router-dom";
import { Nav } from "../Nav/Nav";
import './Header.css';

export const Header = () => {
  return (
    <header>
      <Link to="/"><h1>Tienda ArduShopp</h1></Link>
    <Nav />
    </header>
  );
};

