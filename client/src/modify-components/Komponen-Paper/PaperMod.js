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
        textAlign: 'center',
        paddingTop: 15

    },
    div: {
        textAlign: 'left',
        // paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 40

    },

    progress: {

        paddingTop: 220,
        paddingLeft: 25,
        paddingRight: 20

    }

}

function Tulisan(props) {
    return (
        <div>

            <div>
                {props.judul}
            </div>

            <div style={styles.div}>
                <DividerMod/>
                <label>Kami menyediakan Lanyanan berbagai layanan untuk memudahkan memanajemen
                    laboratorium
                </label><br/>

                <label>
                    fitur yang kami berikan adalah sebagai berikut :</label>
            </div>

        </div>
    )
}

const judulDepan = (

    <h1>
        asasasas</h1>

);

class PaperMod extends Component {

    render() {

        return (

            <div>
                <Paper zDepth={3} style={styles.paperWellcome} className={this.props.letak}>
                    <div>
                        {this.props.judul}
                    </div>

                    <div>
                        <DividerMod/>
                        <label>
                            {this.props.body}
                        </label>
                    </div><br/>
                </Paper>
            </div>

        );

    }

}

export default PaperMod;