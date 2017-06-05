import './Shop.scss'

//Modules
import React, {Component} from 'react';

//Material-UI
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//Components
import Store from '../../container/Store/Store.jsx';
import ShopSideBar from '../../container/ShopSideBar/ShopSideBar'



export default class Shop extends Component {
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div>
        <div className="row shop">
          <div className="hidden-xs hidden-sm col-md-4 col-lg-3 ctrlPnl-container shop">
            <ShopSideBar></ShopSideBar>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-9 store-container shop" style={{paddingLeft:10, marginTop:10}}>
            <Store></Store>
          </div>
        </div>
      </div>
    )
  }
}
