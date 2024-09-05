// NavBarItem.jsx
import React from "react";
import PropTypes from "prop-types";

const NavBarItem = ({ type, icon, active }) => {
  return (
    <li
      className={`navbar-item ${active ? "active" : ""}`}
      role="menuitem"
      aria-current={active ? "page" : undefined}
    >
      <a href="#" role="button" aria-disabled="true" className="navbar-link">
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <span>{type}</span>
      </a>
    </li>
  );
};
NavBarItem.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default NavBarItem;
