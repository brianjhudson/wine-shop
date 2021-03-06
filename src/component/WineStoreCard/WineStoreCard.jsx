import React from "react";
import { Link } from "react-router";

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function WineStoreCard(props){
  console.log(props);
  return(
    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12" style={{padding:"10px"}}>
      <MuiThemeProvider>
        <Paper style={{display:'flex', justifyContent:"center"}}>
          <div className="image-container">
            <img src={props.bottleImage} alt="" />
          </div>
          <Link to={`/${props.wineId}`}>{props.Name}</Link>
        </Paper>
      </MuiThemeProvider>
    </div>
  )
}
