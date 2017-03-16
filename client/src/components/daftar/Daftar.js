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
import Orang from 'material-ui/svg-icons/action/account-circle';

import IdOrang from 'material-ui/svg-icons/action/assignment-ind';
import Email from 'material-ui/svg-icons/content/mail';
import Phone from 'material-ui/svg-icons/hardware/phone-android';
import Lock from 'material-ui/svg-icons/action/lock';

const muiTheme = getMuiTheme({palette: {
        // accent1Color: red500
    }});

const style = {
    paperDaftar: {
        height: 470,
        width: 700,
        marginTop: 10,
        display: 'inline-block'
    },
    lebarInput: {

        width: '120%'

    }
}

function isInteger(x) {
    return x % 1 === 0;
}

function checkEmail(email) {
    if (email.match(/@/)) {
        return true;
    }
    return false;
}

export default class Daftar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Nama: '',
            IdAdmin: '',
            Email: '',
            Hp: '',
            HpCheck: false,
            Password: '',
            PasswordConfrim: ''
        }

        this.onChange = {
            Nama: this
                .handleChange
                .bind(this, 'Nama'),
            IdAdmin: this
                .handleChange
                .bind(this, 'IdAdmin'),

            Password: this
                .handleChange
                .bind(this, 'Password'),
            PasswordConfrim: this
                .handleChange
                .bind(this, 'PasswordConfrim')

        }

        this.handphoneChange = this
            .handphoneChange
            .bind(this);

        this.emailChange = this
            .emailChange
            .bind(this);
    }

    handleChange(name, event) {

        this.setState({[name]: event.target.value})
        // console.log(this.state.Password);
    }

    emailChange(event) {

        var check = checkEmail(event.target.value)

        this.setState({Email: event.target.value})

        console.log(check);

    }

    handphoneChange(event) {

        const NoHP = event.target.value;

        console.log(NoHP);

        this.setState({HpCheck: isInteger(NoHP)})
        this.setState({Hp: NoHP})

        console.log(this.state.HpCheck); //LAST!

    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div
                    style={{
                    paddingRight: 60
                }}
                    className={"col-md-12 col-md-offset-3"}>

                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperDaftar}>

                        <div
                            style={{
                            textAlign: "center"
                        }}>

                            <h2>
                                Form Submit Data
                            </h2>

                        </div>
                        <Divider/>

                        <div
                            className={"col-md-9 col-md-offset-1"}
                            style={{
                            marginTop: 15
                        }}>

                            <p
                                style={{
                                marginLeft: 30,
                                fontSize: 15
                            }}>
                                Berikut ini adalah form submit untuk anggota baru, untuk selanjutnya admin akan
                                confirm terlebih dahulu untuk bisa login.

                            </p>
                            <Divider
                                style={{
                                marginLeft: 30
                            }}/>
                        </div>

                        <div
                            className={"col-md-12 col-md-offset-1"}
                            style={{
                            paddingTop: 20
                        }}>
                            <form>
                                <div
                                    className={"row"}
                                    style={{
                                    marginTop: -20
                                }}>
                                    <div
                                        className={"col-md-5"}
                                        style={{
                                        marginRight: -10
                                    }}>
                                        <div >
                                            <ListItem
                                                leftIcon={< Orang color = {
                                                '#424242'
                                            }
                                            style = {{marginLeft:25 , paddingTop:15}}/>}
                                                disabled={true}>
                                                <TextField
                                                    onChange={this.onChange.Nama}
                                                    style={style.lebarInput}
                                                    value={this.state.Nama}
                                                    errorText={this.state.errorId}
                                                    errorStyle={{
                                                    color: 'red'
                                                }}
                                                    hintText="Nama Lengkap"></TextField>
                                            </ListItem>
                                        </div>

                                        <div
                                            style={{
                                            marginTop: -17
                                        }}>
                                            <ListItem
                                                leftIcon={< IdOrang color = {
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
                                                    hintText="Username"></TextField>
                                            </ListItem>
                                        </div>
                                        <div
                                            style={{
                                            marginTop: -17
                                        }}>
                                            <ListItem
                                                leftIcon={< Email color = {
                                                '#424242'
                                            }
                                            style = {{marginLeft:25 , paddingTop:15}}/>}
                                                disabled={true}>
                                                <TextField
                                                    onChange={this.emailChange}
                                                    style={style.lebarInput}
                                                    value={this.state.Email}
                                                    errorText={this.state.errorPass}
                                                    errorStyle={{
                                                    color: 'red'
                                                }}
                                                    hintText="Email anda.."></TextField>

                                            </ListItem>

                                        </div>

                                    </div>

                                    <div className={"col-md-5"}>
                                        <div>
                                            <ListItem
                                                leftIcon={< Phone color = {
                                                '#424242'
                                            }
                                            style = {{marginLeft:25 , paddingTop:15}}/>}
                                                disabled={true}>
                                                <TextField
                                                    onChange={this.handphoneChange}
                                                    style={style.lebarInput}
                                                    value={this.state.Hp}
                                                    errorText={this.state.errorPass}
                                                    errorStyle={{
                                                    color: 'red'
                                                }}
                                                    hintText="Handphone"></TextField>

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
                                                    hintText="Password Anda"></TextField>

                                            </ListItem>

                                        </div>
                                        <div
                                            style={{
                                            marginTop: -17
                                        }}>
                                            <ListItem
                                                leftIcon={< VisibilityOff color = {
                                                '#424242'
                                            }
                                            style = {{marginLeft:25 , paddingTop:15}}/>}
                                                disabled={true}>
                                                <TextField
                                                    onChange={this.onChange.PasswordConfrim}
                                                    style={style.lebarInput}
                                                    value={this.state.PasswordConfrim}
                                                    errorText={this.state.errorPass}
                                                    errorStyle={{
                                                    color: 'red'
                                                }}
                                                    type={"password"}
                                                    hintText="Ulangi Password Anda"></TextField>

                                            </ListItem>

                                        </div>

                                        <div
                                            className={"col-md-12 col-md-offset-1 row"}
                                            style={{
                                            marginTop: 15
                                        }}>

                                            <div className={"col-md-3 "}>

                                                <RaisedButton label={"Kembali"}/>
                                            </div>
                                            <div className={"col-md-5 col-md-offset-3"}>
                                                <RaisedButton primary={true} label={"Submit"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </Paper>

                </div>

            </MuiThemeProvider>

        )

    }

}