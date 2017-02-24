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
            PasswordAdmin: ''
        };

    }

    handleChange(name, event) {
        this.setState({[name]: event.target.value});
    }

    handleSubmit(event) {
        // this.setState({NamaLab: event.target.value})
        this.SubmitApiDatabase();

        // alert(this.state.NamaLab); alert(this.state.NamaAdmin);

    }


    handleNext (){

        if (this.state.NamaAdmin && this.state.NamaLab && this.state.PasswordAdmin){

            

        }

    }

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
                                        <TextField onChange={this.onChange.NamaLab} hintText="Nama Laboratorium"/>
                                        <br/>
                                    </MenuItem>
                                </Menu>

                                <Menu >
                                    <MenuItem leftIcon={< Orang style = {{marginLeft:20}}/>} disabled={true}>
                                        <TextField onChange={this.onChange.NamaAdmin} hintText="Nama Admin"/>
                                        <br/>
                                    </MenuItem>
                                </Menu>

                                <Menu>
                                    <MenuItem leftIcon={< Lock style = {{marginLeft:20}}/>} disabled={true}>
                                        <TextField
                                            onChange={this.onChange.PasswordAdmin}
                                            hintText="Password Admin"
                                            type="Password"/>
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div
                                style={{
                                paddingTop: 5
                            }}
                                className="col-md-16 col-md-offset-5">
                                <RaisedButton label="Simpan Data" primary={true} type="submit"></RaisedButton>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        )

    }

}

class Database extends Component {

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
                        body={< InputDatabase />} tombolDisable={true}/>

                </MuiThemeProvider>
            </div>
        )
    }

}

export default Database;