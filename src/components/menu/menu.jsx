import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as MoviesIcon } from "../../assets/svg/movies.svg";
import { ReactComponent as SeriesIcon } from "../../assets/svg/series.svg";
import logo from "../../assets/images/menu-logo.png";

import "./menu.scss";

class Menu extends Component {
  render() {
    return (
      <nav className="menu container">
        <ul className="menu-items-wrapper">
          <li className="menu-items">
            <img src={logo} alt="Codo a Codo Logo" />
            <HomeIcon />
            <Link to="/">Home</Link>
          </li>
          <li className="menu-items">
            <MoviesIcon />
            <Link to="/movies">Movies</Link>
          </li>
          <li className="menu-items">
            <SeriesIcon />
            <Link to="/series">Series</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
