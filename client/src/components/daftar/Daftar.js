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

const muiTheme = getMuiTheme({palette: {
        // accent1Color: red500
    }});

const style = {
    paperDaftar: {
        height: 520,
        width: 600,
        marginTop: 10,
        display: 'inline-block'
    }
}

export default class Daftar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            IdAdmin: '',
            Password: ''
        }

         this.onChange = {
            IdAdmin: this
                .handleChange
                .bind(this, 'IdAdmin'),
            Password: this
                .handleChange
                .bind(this, 'Password')
        
        }
              

    }

    handleChange(name, event) {

        this.setState({[name]: event.target.value})
        // console.log(this.state.Password);
    }

  

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div
                    style={{
                    paddingRight: 60
                }}
                    className={"col-md-10 col-md-offset-3"}>

                    <br/>
                    <br/>
                    <Paper zDepth={4} style={style.paperDaftar}>

                        <div
                            style={{
                            textAlign: "center"
                        }}>

                            <h2>
                                Submit Data
                            </h2>

                        </div>
                        <Divider/>

                        <div>
                            <form>
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
                                        leftIcon={< VisibilityOff color = {
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
                            </form>
                        </div>

                    </Paper>

                </div>

            </MuiThemeProvider>

        )

    }

}