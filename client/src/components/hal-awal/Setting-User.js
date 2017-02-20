import React, {Component} from 'react';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';


class SettingUser extends Component {


    render () {

        return (


            <MuiThemeProvider>

            <PaperMod  letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '} judul={"Makan"}/>



            </MuiThemeProvider> 

        )

    }

    
}

export default SettingUser;