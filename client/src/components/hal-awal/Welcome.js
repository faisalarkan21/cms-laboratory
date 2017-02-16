import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import {deepOrange500, green500, green700} from 'material-ui/styles/colors';
import DividerMod from '../../modify-components/Komponen-Divider/DividerMod.js';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import Paper from 'material-ui/Paper';

import './welcome.css';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

const styles = {
    


};
class Welcome extends Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <div className="row">
                    <div className="col-md-12 panel">

                        <PaperMod/>


                         

                          
                        
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
