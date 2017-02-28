import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import Orang from 'material-ui/svg-icons/action/account-circle';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';
import DividerMod from '../../modify-components/Komponen-Divider/DividerMod.js';

import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Checkbox from 'material-ui/Checkbox';

import People from 'material-ui/svg-icons/social/people';

import {List, ListItem} from 'material-ui/List';
import {blue500, red500, greenA200,grey900} from 'material-ui/styles/colors';

import './login.css'

const style = {
    paperLogin: {
        height: 480,
        width: 450,
        marginTop: 10,
        display: 'inline-block'
    },
    judulLogin: {

        textAlign: 'center'
    },
    lebarInput: {

        width: '80%'

    },
    bodyLogin: {

        paddingBottom: 15

    },
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: red500
    }
});

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = {}

    }

    render() {

        return (

            <MuiThemeProvider  muiTheme={muiTheme}>

                <div
                    style={{
                    paddingRight: 60
                }}
                    className={"col-md-10 col-md-offset-4"}
                  >
                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperLogin}  >
                        <div>
                            <div className={"judulLogin"} style={style.judulLogin}>
                                <MenuItem 
                                    disabled={true}
                                    rightIcon={< People color={'#424242'} style = {{marginRight:120, width: 36, height: 36, marginTop:4}}/>}>
                                    <h3 
                                        style={{
                                        fontSize: 25,
                                        color:'#424242'
                                    }}>
                                        Login Masuk
                                    </h3>
                                </MenuItem>
                                <DividerMod/>
                            </div>
                            <div className={"col-md-10 col-md-offset-1"}>
                                <div style={style.bodyLogin}>

                                    <div>
                                        <ListItem 
                                            leftIcon={< Orang color={'#424242'} style = {{marginLeft:25 , paddingTop:15}}/>}
                                            disabled={true}>
                                            <TextField  style={style.lebarInput} hintText="Masukan Username"></TextField>
                                        </ListItem>
                                    </div>
                                    <div
                                        style={{
                                        marginTop: -17
                                    }}>
                                        <ListItem
                                            leftIcon={< Lock color={'#424242'} style = {{marginLeft:25 , paddingTop:15}}/>}
                                            disabled={true}>
                                            <TextField style={style.lebarInput} hintText="Masukan Password"></TextField>

                                        </ListItem>

                                    </div>
                                </div>
                                <DividerMod/>

                                <div
                                    className={"col-md-offset-1"}
                                    style={{
                                    marginLeft: 30,
                                    paddingTop: 15,
                                    paddingBottom: 15
                                }}>

                                    <Checkbox label="Masuk sebagai admin" style={style.checkbox} />

                                </div>
                                <DividerMod/>
                                <div
                                    style={{
                                    paddingTop: 17
                                
                                }}
                                    className={"col-md-10 col-md-offset-1 row"}>
                                    <div >

                                        <RaisedButton label="Submit Data"   />

                                    </div>

                                    <div className={"col-md-offset-1"}>
                                        <RaisedButton label="Masuk" primary={true}  type="sumbit" />

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
