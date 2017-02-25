import React, {Component} from 'react';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';

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
            containerElement={< Link to = "/setting-database" />}
            primary={true}
            label="Selesai"></RaisedButton>
    </div>

)

const selamat = (

    <div style={{
        paddingTop: 3,
        textAlign: 'center'
    }}>

        <div className="">
            <label>Selamat CMS Laboratorium telah siap digunakan.
            </label>
            <br/>
        </div>

        <label>
            Untuk mendapatkan dukungan lebih lanjut dapat langsung menghubungi :
        </label>

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
                    tombolNext={TombolNext}
                    langkah={2}/>

            </MuiThemeProvider>

        )

    }

}

export default SettingUser;