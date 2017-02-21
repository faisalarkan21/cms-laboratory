import React, {Component} from 'react';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import Input from '../Ex/Test.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Lock from 'material-ui/svg-icons/action/lock';
import Orang from 'material-ui/svg-icons/social/people';
import Gedung from 'material-ui/svg-icons/communication/business';

const muiTheme = getmuiTheme({})

const Text = {
    Judul: "Setting Database CMS"
}

const inputConifg = (

    <div >
        <Menu >
            <MenuItem leftIcon={< Gedung style = {{marginLeft:20}}/>} disabled={true}>
                <TextField hintText="Nama Laboratorium"/>
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
    </div>
);

class Databse extends Component {

    render() {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>

                <PaperMod
                    letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}
                    judul={Text.Judul}
                    langkah={1}
                    alamatSebelumnya={'/selamat-datang'}
                    body={inputConifg}></PaperMod>

            </MuiThemeProvider>

        )
    }

}

export default Databse;
