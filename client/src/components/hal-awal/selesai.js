import React, {Component} from 'react';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';

import {List, ListItem} from 'material-ui/List';

//temp
import Email from 'material-ui/svg-icons/communication/email';
import Device from 'material-ui/svg-icons/hardware/device-hub';
import Communication from 'material-ui/svg-icons/communication/live-help';
import Database from 'material-ui/svg-icons/file/cloud-off';

import RaisedButton from 'material-ui/RaisedButton';
var Link = require('react-router').Link;
// import Link from 'react-router';

const TombolNext = (
    <div>
        <RaisedButton
            containerElement={< Link to = "/setting-database" />}
            style={{
            marginRight: 12
        }}
            label="Kembali"></RaisedButton>
        <RaisedButton
            containerElement={< Link to = "/login" />}
            primary={true}
            label="Selesai"></RaisedButton>
    </div>

)

const selamat = (

    <div style={{
        paddingTop: 3,
        textAlign: 'center'
    }}>

        <div className="" style={{paddingBottom:6}}>
            <label>Selamat CMS Laboratorium telah siap digunakan.
            </label>
            <br/>
        </div>

        <div>
            <label>
                Untuk mendapatkan dukungan lebih lanjut dapat langsung menghubungi :
            </label>
        </div>

    </div>

)

const DivHubugi = (

    <div className="col-md-16 col-md-offset-3" style={{
        paddingTop: 5
    }}>
        <List>
            <ListItem
                primaryText="Developer : faisalarkan21@gmail.com"                
                leftIcon={< Email viewBox = {
                "0 0 24 24"
            } />}/>
            <ListItem
                primaryText="Ikut Kontribusi :  https://git.io/vyTBc"
                href={"https://git.io/vyTBc"}
                leftIcon={< Device />}/>
            <ListItem
                primaryText="Buku Panduan Penggunaan"
                leftIcon={< Communication />}/>

        </List>
    </div>

)

class SettingUser extends Component {

    render() {

        return (

            <MuiThemeProvider>

                <PaperMod
                    letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}
                    judul={"Konfigurasi Telah Selesai "}
                    alamatSebelumnya={'/setting-database'}
                    body={selamat}
                    Optional={DivHubugi}
                    tombolNext={TombolNext}
                    langkah={2}/>

            </MuiThemeProvider>

        )

    }
}

export default SettingUser;