import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from 'material-ui/Paper';
import DividerMod from '../../modify-components/Komponen-Divider/DividerMod.js';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import Face from 'material-ui/svg-icons/action/face';

const styles = {

  paperWellcome: {
    // flex: 1, width:'20%', order:4,  flexShrink: 4, margin: 10,
    width: "100%",

    height: 900
  }

}

export default class SignUpForm extends React.Component {

  render() {

    return (

      <MuiThemeProvider >
        <div
          className={"col-md-8 col-md-offset-2"}
          style={{
          paddingTop: 60,
          paddingBottom: 120
        }}>

          <Paper zDepth={3} style={styles.paperWellcome}>

            <div>

              <div className={"col-md-9"}>
                <h1
                  className={"col-md-6"}
                  style={{
                  paddingTop: 40
                }}>
                  Curriculum Vitae
                </h1>
                <DividerMod/>
              </div>

              <div style={{
                paddingLeft: 20
              }}>
                <div className={"col-md-4"}>

                  <h2>
                    Data Pribadi
                  </h2>

                  <div>
                    <Divider style={{
                      marginTop: -15,
                      marginRight:70
                    }}/>
                    <div style={{paddingTop:25}}>
                      <label>
                        Nama : Faisal Arkan
                      </label>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </Paper>

        </div>

      </MuiThemeProvider>
    )
  }
}
