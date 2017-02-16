import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import DividerMod from '../Komponen-Divider/DividerMod.js';
import LinearProgress from 'material-ui/LinearProgress';

const styles = {

    paperPutih: {
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
            <h3>{props.judul}</h3>

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

const PaperMod = () => (

    <Paper
        zDepth={3}
        style={styles.paperPutih}
        className="col-xs-offset-1 col-xs-10 col-md-7 col-md-offset-3 ">
            <Tulisan judul={'makan'}/>
        <div style={styles.progress}>
            <LinearProgress mode="indeterminate"/>
        </div>
    </Paper>

);

export default PaperMod;