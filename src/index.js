import React from "react";
import ReactDOM from "react-dom";
import { history } from "./App";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import "./css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import { login, logout } from "./actions/auth";
import { startsetExpenses } from "./actions/expenses";
import { firebase } from "./firebase/firebase";
import Loading from "./component/LoadingPage";

const store = configStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startsetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
