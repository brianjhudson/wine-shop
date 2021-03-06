import React from 'react';
import {Link, browserHistory} from "react-router";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import grapes from "../../images/green_grapes.jpeg";


export default function Home(props){
  return(
      <div className="home-wrapper shop">

        <div className="cta row shop">
          <div className="col-xs-12 shop splash">
            <img src={grapes} alt=""/>
              <div className="cta-div row">
                  <div className="cta-parse">
                    <span>Wines</span> for your home.
                  </div>
                  <div className="cta-button" onClick={() => {browserHistory.push("shop")}}>
                    Shop Now
                  </div>
              </div>
          </div>
        </div>

          <div className="featured-wrapper row shop">
            <div className="featured-span col-xs-12 col-sm-12 col-md-4 shop">
              <MuiThemeProvider>
              <Paper
                zDepth={1}
                rounded={false}
                >
                <div className="wine-type-title">Red Wines</div>
                <div className="wine-type-list">
                <Link>Cabernet Sauvignon</Link>
                <br/>
                <Link>Bordeaux Blends</Link>
                <br/>
                <Link>Pinot Noir</Link>
                <br/>
                <Link>Sangiovese</Link>
                <br/>
                <Link>Syrah/Shiraz</Link>
                </div>
                </Paper>
              </MuiThemeProvider>

            </div>
            <div className="featured-span col-xs-12 col-sm-12 col-md-4 shop">
              <MuiThemeProvider>
              <Paper
                zDepth={1}
                rounded={false}
                >
                <div className="wine-type-title">Whites Wines</div>
                <div className="wine-type-list">
                <Link>Chardonnay</Link>
                <br/>
                <Link>Sauvignon Blanc</Link>
                <br/>
                <Link>Pinot Gris/Grigio</Link>
                <br/>
                <Link>Gewürztraminer</Link>
                <br/>
                <Link>Chenin Blanc</Link>

                </div>
                </Paper>
              </MuiThemeProvider>

            </div>
            <div className="featured-span col-xs-12 col-sm-12 col-md-4 shop">
              <MuiThemeProvider>
              <Paper
                zDepth={1}
                rounded={false}
                >
                <div className="wine-type-title">Dessert Wines</div>
                <div className="wine-type-list">
                <Link>Dolcetto</Link>
                <br/>
                <Link>Muscat</Link>
                <br/>
                <Link>Sherry</Link>
                <br/>
                <Link>Port</Link>
                <br/>
                <Link>Riesling</Link>
                </div>
                </Paper>
              </MuiThemeProvider>
            </div>
          </div>
      </div>
  );
}