import React, {Component} from 'react';
// import { Button } from 'react-toolbox/lib/button';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Divider from 'material-ui/Divider';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import './welcome.css'
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import {deepOrange500, green500, green700} from 'material-ui/styles/colors';
import LinearProgress from 'material-ui/LinearProgress';

// const {Grid, Row, Col} = require('react-flexbox-grid');

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

const styles = {
    div: {
        textAlign: 'left',
        // paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 40

    },
    pemisah:{

        marginBottom:10
    },
    progress: {

        paddingTop: 220,
        paddingLeft: 25,
        paddingRight: 20

    },
    paperPutih: {
        height: 400,
        // flex: 1, width:'20%', order:4,  flexShrink: 4, margin: 10,
        width: "100%",
        textAlign: 'center',
        paddingTop: 15

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
                            className="col-xs-offset-1 col-xs-10 col-md-7 col-md-offset-3 ">
                            <div className="innerPanel">

                                <h3>Selamat datang Di CMS Laboratorium</h3>
                                <div style={styles.div}>
                                    <Divider style={styles.pemisah}/>
                                    <label>Kami menyediakan Lanyanan berbagai layanan untuk memudahkan memanajemen
                                        laboratorium
                                    </label><br/>

                                    <label>
                                        fitur yang kami berikan adalah sebagai berikut :</label>
                                </div>
                            </div>

                            <div style={styles.progress}>
                                <LinearProgress mode="indeterminate"/>
                            </div>

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
