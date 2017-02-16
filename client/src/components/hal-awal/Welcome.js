import React, {Component} from 'react';
// import { Button } from 'react-toolbox/lib/button';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import './welcome.css'

// const {Grid, Row, Col} = require('react-flexbox-grid');

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '100%'
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  paperRight:{
    height: 600,
    flex: 3,
    margin: 10,
    textAlign: 'center',
  }
};
class Welcome extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div style={styles.div}>
                        <Paper zDepth={3} style={styles.paperLeft}>
                            <h4>First Vertical component</h4>
                        </Paper>
                        <Paper zDepth={3} style={styles.paperRight}>
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
