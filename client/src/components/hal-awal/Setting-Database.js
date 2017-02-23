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
/*
const inputConifg = React.Component({

    constructor(props) {
        super(props);

        this.state = {value:''}; 

    }

    render() {

        return (

            <div className="col-md-offset-2">

                <div style={{
                    paddingTop: 3
                }}>

                    <label >Tolong mengisi informasi berikut untuk data awal laboratorium anda :
                    </label>
                    <br/>

                </div>

                <div className="col-md-offset-1">

                    <Menu >
                        <MenuItem leftIcon={< Gedung style = {{marginLeft:20}}/>} disabled={true}>
                            <TextField hintText="Nama Laboratorium" name="textNama"/>
                            <br/>
                        </MenuItem>
                    </Menu>

                    <Menu >
                        <MenuItem leftIcon={< Orang style = {{marginLeft:20}}/>} disabled={true}>
                            <TextField hintText="Nama Admin"/>
                            <br/>
                        </MenuItem>
                    </Menu>

                    <Menu >
                        <MenuItem leftIcon={< Lock style = {{marginLeft:20}}/>} disabled={true}>
                            <TextField hintText="Password Admin" type="Password"/>
                        </MenuItem>
                    </Menu>

                    <RaisedButton onClick={inputDatabase}>Test Api
                    </RaisedButton>
                </div>

            </div>
        )
    }
})*/

function inputDatabase() {

    var body = {
        nama: "asasas"
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

class Databse extends Component {

    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <PaperMod
                    letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}
                    judul={Text.Judul}
                    langkah={1}
                    alamatSebelumnya={'/selamat-datang'} />
                  
                   

            </MuiThemeProvider>

        )
    }

}

export default Databse;
