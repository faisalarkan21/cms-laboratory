import React, {Component} from 'react';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import Input from '../Ex/Test.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Lock from 'material-ui/svg-icons/action/lock';
import Orang from 'material-ui/svg-icons/social/people';
import Gedung from 'material-ui/svg-icons/communication/business';

var Link = require('react-router').Link;

// import InputDatabase from
// '../../modify-components/Komponen-Input/InputDatabase.js';

var orang = {

    nama: "faisal arkan",
    kelas: "3ia08"

}

// fetch('/pesan').then(function (response) {     return response.json(); })
// .then(function (body) {         console.log(body);     });

const muiTheme = getmuiTheme({})

const Text = {
    Judul: "Setting Database CMS"
}

var TombolCheck = true;

class InputDatabase extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = {
            NamaLab: this
                .handleChange
                .bind(this, 'NamaLab'),
            NamaAdmin: this
                .handleChange
                .bind(this, 'NamaAdmin'),
            PasswordAdmin: this
                .handleChange
                .bind(this, 'PasswordAdmin')
        }

        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {

            NamaLab: '',
            NamaAdmin: '',
            PasswordAdmin: '',
            checkTombol: true
        };

    }

    handleChange(name, event) {
        this.setState({[name]: event.target.value});
        this.handleCheckTombol();

    }

    handleSubmit(event) {
        // this.setState({NamaLab: event.target.value})
        this.SubmitApiDatabase();

        // alert(this.state.NamaLab); alert(this.state.NamaAdmin);

    }

    handleCheckTombol() {

        if (this.state.NamaLab.length <= 2) {
            this.setState({checkTombol: true})

            console.log("NamaLab kena : " + this.state.NamaLab.length);
        } else if (this.state.NamaAdmin.length <= 2) {
            this.setState({checkTombol: true})

            console.log("NamaAdmin kena : "+ this.state.NamaAdmin.length);
        } else if (this.state.PasswordAdmin.length <= 2) {
            this.setState({checkTombol: true})

            console.log("PasswordAdmin Kena : "+ this.state.PasswordAdmin.length);
        } else {


            console.log("Nilai PasswordAdmin "+ this.state.PasswordAdmin.length);

            console.log("engga null");

            this.setState({checkTombol: false})

        }

    }

    componentWillUpdate() {}

    SubmitApiDatabase() {

        var body = {
            NamaLab: this.state.NamaLab,
            NamaAdmin: this.state.NamaAdmin,
            PasswordAdmin: this.state.PasswordAdmin
        };
        fetch('/simpan', {
            method: 'POST',
            body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => console.log(json));

    }

    render() {

        return (

            <div className="row">

                <div className="col-md-12 col-md-offset-1">

                    <div
                        className="col-md-10 "
                        style={{
                        paddingTop: 3
                    }}>

                        <label >Tolong mengisi informasi berikut untuk data awal laboratorium anda :
                        </label>
                        <br/>

                    </div>

                    <form
                        onSubmit={this
                        .handleSubmit
                        .bind(this)}>
                        <div>

                            <div
                                style={{
                                paddingTop: 8
                            }}
                                className="col-md-2 col-md-offset-1 ">
                                <Menu>
                                    <MenuItem leftIcon={< Gedung style = {{marginLeft:20}}/>} disabled={true}>
                                        <TextField require onChange={this.onChange.NamaLab} hintText="Nama Laboratorium"/>
                                        <br/>
                                    </MenuItem>
                                </Menu>

                                <Menu >
                                    <MenuItem leftIcon={< Orang style = {{marginLeft:20}}/>} disabled={true}>
                                        <TextField require onChange={this.onChange.NamaAdmin} hintText="Nama Admin"/>
                                        <br/>
                                    </MenuItem>
                                </Menu>

                                <Menu>
                                    <MenuItem leftIcon={< Lock style = {{marginLeft:20}}/>} disabled={true}>
                                        <TextField require
                                            onChange={this.onChange.PasswordAdmin}
                                            hintText="Password Admin"
                                            type="Password"/>
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div
                                style={{
                                paddingTop: 13
                            }}
                                className="col-md-16 col-md-offset-3">
                                <RaisedButton
                                    containerElement={< Link to = {
                                    'selamat-datang'
                                } />}
                                    label="Kembali"
                                    style={{
                                    marginRight: 15
                                }}></RaisedButton>
                                <RaisedButton
                                    label="Simpan Data"
                                    primary={true}
                                    disabled={this.state.checkTombol}
                                    type="submit"></RaisedButton>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        )

    }

}

class Database extends Component {

    componentDidUpdate() {}

    render() {
        return (

            <div>

                <MuiThemeProvider muiTheme={muiTheme}>

                    <PaperMod
                        letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}
                        judul={Text.Judul}
                        langkah={1}
                        alamatSebelumnya={'/selamat-datang'}
                        alamatSelanjutnya={'/setting-user'}
                        body={< InputDatabase />}
                        tombolDisable={TombolCheck}/>

                </MuiThemeProvider>
            </div>
        )
    }

}

export default Database;