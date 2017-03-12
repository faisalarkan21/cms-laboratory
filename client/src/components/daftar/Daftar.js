import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import SnackbarMod from '../../modify-components/Komponen-Divider/DividerMod.js';
import Divider from 'material-ui/Divider';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: red500
    }
});



const style = {
    paperDaftar: {
        height: 520,
        width: 450,
        marginTop: 10,
        display: 'inline-block'
    },
}

export default class Daftar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div
                    style={{
                    paddingRight: 60
                }}
                    className={"col-md-10 col-md-offset-2"}>
                    
                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperDaftar}>

                    </Paper>
                    
                    
                    </div>

            </MuiThemeProvider>

        )

    }

}