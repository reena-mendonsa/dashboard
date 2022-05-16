import { NavLink } from "react-router-dom";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" exact>
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            <span>Articles</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help">
            <i className="fa fa-question-circle" aria-hidden="true"></i>
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
