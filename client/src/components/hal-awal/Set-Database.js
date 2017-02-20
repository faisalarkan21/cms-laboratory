import React, {Component} from 'react';
import PaperMod from '../../modify-components/Komponen-Paper/PaperMod.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getmuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getmuiTheme({})


const Text = {
        Judul: "Setting Database CMS"
}


class Databse extends Component {

    render() {
        return (
          
             <MuiThemeProvider muiTheme={muiTheme}>

                <PaperMod  letak={'col-xs-offset-2 col-xs-10 col-md-7 col-md-offset-3 '}

                judul={Text.Judul}>


                </PaperMod>

             </MuiThemeProvider>

        )
    }

}

export default Databse;
