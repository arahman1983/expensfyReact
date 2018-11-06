import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="row">
    <div className="col-md-4 mx-auto signin">
      <h2>Expensefy App.</h2>
      <p>Your Epenses here</p>
      <button onClick={startLogin} className="btn btn-primary">
        Log in with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
