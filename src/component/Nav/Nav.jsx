import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import SearchBox from "../../container/SearchBox/SearchBox";
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import {Link, browserHistory} from "react-router";

export default function Nav(){

  return(
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link id="navbar-brand" to="/">Fero Vino</Link>
          </div>
          <div id="navbar-collapse"
            className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="searchbar-wrapper shop">
                <SearchBox></SearchBox>
              </li>
              <li className="wine-button shop">
                <Link to="/shop">Wines</Link>
              </li>
              <li className="shopping-cart-button-wrapper shop">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>        
        </div>
      </nav>
    </div>
  );
}
