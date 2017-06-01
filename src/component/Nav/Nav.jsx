import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import SearchBox from "../../container/SearchBox/SearchBox";
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import {Link, browserHistory} from "react-router";

export default function Nav(){

  return(
    <div className="nav shop">

      <div className="col-md-offset-1 col-md-2 logo-wrapper shop">
        <Link to="/"><h1>Fero Vino</h1></Link>
      </div>

      <div className="col-md-1 searchbar-wrapper shop">
        <SearchBox></SearchBox>
      </div>

      <div className="col-md-1 col-md-offset-3 wine-button shop">
        <Link to="/shop">Wines</Link>
      </div>

      <div className="col-md-1 shopping-cart-button-wrapper shop">
        <Link to="/cart">Cart</Link>
      </div>


    </div>
  );
}
