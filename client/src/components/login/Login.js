import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';

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

import Verified from 'material-ui/svg-icons/action/verified-user';

import {List, ListItem} from 'material-ui/List';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const style = {
    paperLogin: {
        height: 450,
        width: 430,
        margin: 20,
        display: 'inline-block'
    },
    judulLogin: {

        textAlign: 'center'
    },
    lebarInput: {

        width: '200%'

    },
    bodyLogin: {

        paddingTop: 15

    },
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = {}

    }

    render() {

        return (

            <MuiThemeProvider>

                <div className={"col-md-10 col-md-offset-4"}>
                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperLogin}>
                        <div>
                            <div style={style.judulLogin}>
                                <MenuItem disabled={true} style={{}} rightIcon={< Verified />}>
                                    <h3>
                                        Login Masuk
                                    </h3>
                                </MenuItem>
                                <DividerMod/>
                            </div>

                            <div style={style.bodyLogin} className={"col-md-6 col-md-offset-1"}>
                                <div>
                                    <ListItem
                                        leftIcon={< Orang style = {{marginLeft:25 , paddingTop:15}}/>}
                                        disabled={true}>
                                        <TextField style={style.lebarInput} hintText="Masukan Username"></TextField>
                                    </ListItem>
                                </div>
                                <div style={{marginTop:-15}}>
                                    <ListItem
                                        leftIcon={< Lock style = {{marginLeft:25 , paddingTop:15}}/>}
                                        disabled={true}>
                                        <TextField style={style.lebarInput} hintText="Masukan Password"></TextField>

                                    </ListItem>
                                </div>

                                <div>
                                    <Menu>
                                        <MenuItem
                                            style={{
                                            marginLeft: 12
                                        }}
                                            disabled={true}>

                                            <Checkbox label="Login Sebagai Admin" style={style.checkbox}/>

                                        </MenuItem>
                                    </Menu>

                                </div>

                                <div>
                                    <div></div>

                                    <div></div>

                                </div>

                            </div>
                        </div>
                    </Paper>

                </div>
            </MuiThemeProvider>

        )

    }

}
