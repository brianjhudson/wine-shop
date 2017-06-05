import './ShopSideBar.scss'
//Modules
import React, { Component } from 'react';
//Material-UI
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux'
import {getCategoryCounts, getWines} from '../../ducks/wineDuck';

class ShopSideBar extends Component{
  constructor(props){
    super(props)
    this.state = { 
      value: 0
    }
  }
  componentWillMount() {
    this.props.dispatch(getCategoryCounts());
  }
  searchWines(varietal) {
    this.props.dispatch(getWines(varietal))
  }
  handleChange(event, index, value){
      this.setState({value});
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <Paper rounded={false} zDepth={1}>
            <div className="row category-container">
                <h2 className="category-title">Select Styles</h2>
                <table>
                  <tbody className="col-xs-12">
                  {this.props.wines.categories.map((category, index) => (
                    <tr key={category._id} className="row">
                      <td className="col-xs-10">
                        <Checkbox onClick={this.searchWines.bind(this, category)} label={category.varietal}/>
                      </td>
                      <td className="col-xs-2" className="category-count">({category.qty})</td>
                    </tr>
                  ))}                  
                  </tbody>
                </table>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>

    )
  }
}
export default connect(state => ({wines: state.wines}))(ShopSideBar)
