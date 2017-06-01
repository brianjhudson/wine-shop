//Styles
import "./styles/all.scss"

//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

//Components
import App from "./component/App/App";
import Shop from "./component/Shop/Shop";
import Home from "./component/Home/Home";
import About from "./component/About/About"
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import Error from "./component/Error/Error";
import SingleWine from "./container/SingleWine/SingleWine";
import Confirmation from "./container/Confirmation/Confirmation";

//Store
import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

// profile path
// featured-wines path
// popular-wins path

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ App } path="/">
          <IndexRoute component={ Home }></IndexRoute>
          <Route component={ Shop } path="shop"></Route>
          <Route component={ Cart } path="cart"></Route>
          <Route component={ Checkout } path="checkout"></Route>
          <Route component={ About } path="about"></Route>
          <Route component={ Confirmation } path="confirmation"></Route>
          <Route component={ SingleWine } path=":wineId"></Route>
          <Route component={ Error } path="*"></Route>
        </Route>
      </Router>
    </Provider>
    ,
    reactNode
  );
})
