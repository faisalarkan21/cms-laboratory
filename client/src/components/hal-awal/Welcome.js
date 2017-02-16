import React, {Component} from 'react';
// import { Button } from 'react-toolbox/lib/button';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import './welcome.css'

// const {Grid, Row, Col} = require('react-flexbox-grid');

const styles = {
    div: {
        // display: 'flex',
        // flexDirection: 'row warp',
        // padding: 20,
        // justifyContent: 'center',
      
        // maxWidth: '70%'
    },
    paperLeft: {
        flex: 4,
        height: '100%',
        margin: 10,
        textAlign: 'center',
        padding: 10
    },
    paperRight: {
        height: 400,
        // flex: 1,
        // width:'20%',
        // order:4,  flexShrink: 4,
        
        // margin: 10,
        textAlign: 'center'
    }
};
class Welcome extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="row">
                    <div className="col-md-12">
                      
                        <Paper zDepth={3} style={styles.paperRight} className="col-xs-offset-2 col-xs-9">
                            <h4>Second Vertical component</h4>
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
