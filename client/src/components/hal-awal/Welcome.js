import React, {Component} from 'react';
// import { Button } from 'react-toolbox/lib/button';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import './welcome.css'
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import {deepOrange500, green500, green700} from 'material-ui/styles/colors';

// const {Grid, Row, Col} = require('react-flexbox-grid');

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

const styles = {
    div: {
        // display: 'flex', flexDirection: 'row warp', padding: 20, justifyContent:
        // 'center', maxWidth: '70%'
    },

    paperPutih: {
        height: 400,
        // flex: 1, width:'20%', order:4,  flexShrink: 4, margin: 10,
        width: "100%",
        textAlign: 'center'
    }
};
class Welcome extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="row">
                    <div className="col-md-12 panel">

                        <Paper
                            zDepth={3}
                            style={styles.paperPutih}
                            className="col-xs-offset-5 col-xs-12 col-md-7 col-md-offset-3 innerPanel">
                            
                            <h3>Selamat datang Di CMS Laboratorium </h3>
                            <label>Kami menyediakan Lanyanan Management Laboratorium </label>
                            

                            
                            </Paper>
                    </div>
                </div>
            </MuiThemeProvider>

        );
    }

    testApi() {

        fetch('/pesan')
            .then(function (res) {
                return res.text();
            })
            .then(function (body) {
                console.log(body);
            });

    }

}

export default Welcome;
