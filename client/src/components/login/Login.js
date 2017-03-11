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
import Memory from 'material-ui/svg-icons//hardware/memory';
import People from 'material-ui/svg-icons/social/people';

import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

import {List, ListItem} from 'material-ui/List';
import {blue500, red500, greenA200, grey900} from 'material-ui/styles/colors';

import SnackbarMod from '../../modify-components/Komponen-Divider/DividerMod.js';

import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';
import './login.css'

// temp 1
import {browserHistory} from 'react-router';

//temp 2
import cookie from 'react-cookie';

//temp 3
import auth from '../../auth/auth.js';

// function validasi(NamaId, Password) {     return {         NamaId:
// NamaId.length === 0,         Password: Password.length === 0     }; }

const style = {
    paperLogin: {
        height: 520,
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
        marginBottom: 16,
        verticalAlign: 'center'

    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: red500
    }
});

const pesan = {
    error: ''
}

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            IdAdmin: '',
            Password: '',
            IsAdmin: false,
            errorId: '',
            errorPass: '',
            Snackopen: false,
            SnackPesan: '',
            AdminBackEnd: false,
            login: auth.loggedIn()
            // userCookie: cookie.load('IdAdmin') errorMasuk: ''
        }

        this.onChange = {
            IdAdmin: this
                .handleChange
                .bind(this, 'IdAdmin'),
            Password: this
                .handleChange
                .bind(this, 'Password')

        },

        this.handleCheck = this
            .handleCheck
            .bind(this);

        // this.handleError = this     .handleError     .bind(this);

    }

    handleChange(name, event) {

        this.setState({[name]: event.target.value})

    }

    handleCheck(event) {
        this.setState({IsAdmin: event.target.checked})

    }

    handleError(json) {
        alert(json);

    }

    handleSubmit(event) {
        event.preventDefault();
        this.kirimId();

    }

    handleTouchTap = () => {
        this.setState({Snackopen: true});
    };

    handleRequestClose = () => {
        this.setState({Snackopen: false});
    };

   
    kirimId() {

        var body = {
            IdAdmin: this.state.IdAdmin,
            password: this.state.Password,
            IsAdmin: this.state.IsAdmin

        };

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => {
            return res.json()
        }).then(json => {

            // this.setState({IdAdmin: json.IdAdmin}); this.setState({Password:
            // json.password});
            this.setState({errorId: json.Id});
            this.setState({errorPass: json.password});
            this.setState({SnackPesan: json.SnackPesan});
            this.setState({AdminBackEnd: json.Admin});
            this.setState({login: json.Admin});
         
            

            console.log(this.state.errorId);
            console.log(this.state.errorPass);
            console.log(this.state.AdminBackEnd);
            console.log(json);

            if ((this.state.errorId === undefined) && (this.state.errorPass === undefined) && (this.state.AdminBackEnd === true)) {
                auth.masuk();
                browserHistory.push('/dashboard-admin');
                cookie.save('IdAdmin', this.state.IdAdmin, {path: '/dashboard-admin'});

            } else if ((this.state.errorId === undefined) && (this.state.errorPass === undefined) && (this.state.AdminBackEnd === false)) {

                browserHistory.push('/dashboard-pengajar');

            }

        });

    }

    render() {

        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <div
                    style={{
                    paddingRight: 60
                }}
                    className={"col-md-10 col-md-offset-4"}>
                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperLogin}>
                        <div>

                            <form
                                onSubmit={this
                                .handleSubmit
                                .bind(this)}>
                                <div style={style.judulLogin}>
                                    <ListItem
                                        disabled={true}
                                        rightIcon={< Memory color = {
                                        '#424242'
                                    }
                                    style = {{marginRight:80, width: 40, height: 40, marginTop:28}}/>}>
                                        <h3
                                            style={{
                                            fontSize: 25,
                                            color: '#424242'
                                        }}>
                                            CMS Laboratorium
                                        </h3>

                                    </ListItem>
                                    <DividerMod/>
                                </div>

                                <div className={"col-md-10 col-md-offset-1"}>

                                    <div style={style.bodyLogin}>

                                        <div>
                                            <ListItem
                                                leftIcon={< Orang color = {
                                                '#424242'
                                            }
                                            style = {{marginLeft:25 , paddingTop:15}}/>}
                                                disabled={true}>
                                                <TextField
                                                    onChange={this.onChange.IdAdmin}
                                                    style={style.lebarInput}
                                                    value={this.state.IdAdmin}
                                                    errorText={this.state.errorId}
                                                    errorStyle={{
                                                    color: 'red'
                                                }}
                                                    hintText="Masukan Username"></TextField>
                                            </ListItem>
                                        </div>
                                        <div
                                            style={{
                                            marginTop: -17
                                        }}>
                                            <ListItem
                                                leftIcon={< Lock color = {
                                                '#424242'
                                            }
                                            style = {{marginLeft:25 , paddingTop:15}}/>}
                                                disabled={true}>
                                                <TextField
                                                    onChange={this.onChange.Password}
                                                    style={style.lebarInput}
                                                    value={this.state.Password}
                                                    errorText={this.state.errorPass}
                                                    errorStyle={{
                                                    color: 'red'
                                                }}
                                                    type={"password"}
                                                    hintText="Masukan Password"></TextField>

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

                                        <Checkbox
                                            label="Masuk Sebagai Admin"
                                            onCheck={this.handleCheck}
                                            style={style.checkbox}/>

                                    </div>
                                    <DividerMod/>
                                    <div
                                        style={{
                                        paddingTop: 17
                                    }}
                                        className={"col-md-10 col-md-offset-1 row"}>
                                        <div >

                                            <RaisedButton label="Submit Data"/>

                                        </div>

                                        <div className={"col-md-offset-1"}>
                                            <RaisedButton
                                                label="Masuk"
                                                primary={true}
                                                type="submit"
                                                onTouchTap={this.handleTouchTap}/>

                                        </div>

                                    </div>

                                    <LinearProgress
                                        style={{
                                        marginTop: 45
                                    }}
                                        mode="indeterminate"/>
                                </div>

                            </form>
                        </div>
                    </Paper>

                    <Snackbar
                        open={this.state.Snackopen}
                        message={this.state.SnackPesan}
                        autoHideDuration={5000}
                        onRequestClose={this.handleRequestClose}/>

                </div>
            </MuiThemeProvider>

        )

    }

}