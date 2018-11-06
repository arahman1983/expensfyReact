import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <div className="row p-3 bg-light">
      <div className="col-md-4">
        <h3>Expinsefy</h3>
      </div>
      <div className="col-md-8 text-right">
        <NavLink
          className="navlink"
          activeClassName="navlinkActive"
          to="/dashboard"
        >
          Home Page
        </NavLink>
        <NavLink
          className="navlink"
          activeClassName="navlinkActive"
          to="/create"
        >
          Add Expinse
        </NavLink>
        <button onClick={startLogout} className="btn btn-default">
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
