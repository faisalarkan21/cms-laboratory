import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import DividerMod from '../Komponen-Divider/DividerMod.js';
import LinearProgress from 'material-ui/LinearProgress';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {

    paperWellcome: {
        height: 400,
        // flex: 1, width:'20%', order:4,  flexShrink: 4, margin: 10,
        width: "100%",
        textAlign: 'center'
    },
    divPaper: {
        marginTop: 50,
        marginRight :50
    },
    divContent: {
        textAlign: 'left',
        // paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 40

    },

    progress: {

        paddingTop: 220,
        paddingLeft: 25,
        paddingRight: 20

    },

    panelDalamJudul : {
        
         paddingTop: 5,

    },

    Badan: {
        textAlign: 'left',
        paddingTop : 5,
        paddingLeft:20,
        paddingRight:20
    } 
    

}

export default class PaperMod extends Component {

    render() {

        return (

            <div style={styles.divPaper}>
                <Paper zDepth={3} style={styles.paperWellcome} className={this.props.letak}>
                    <div style={styles.panelDalamJudul}>
                        <h3>
                            {this.props.judul}
                        </h3>
                    </div>
     <DividerMod/>
                    <div style={styles.Badan}>
                   
                        <label>
                            {this.props.body}
                        </label>
                    </div><br/>
                </Paper>
            </div>

        );

    }

}

