import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  renderTemplateOptions() {
    return [
      <li key="1">
        <Link to="/single">Single</Link>
      </li>,
      <li key="2">
        <Link to="/multiple">Multiple</Link>
      </li>
    ];
  }
  render() {
    return (
      <nav className="navHeader">
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Shoelace
          </Link>
        </div>
      </nav>
    );
  }
}
export default Header;
