import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';



const style = {
    height: 700,
    width: 900,
    // marginLeft: 230,
    // marginTop: 60,
    textAlign: 'center',
    display: 'inline-block'
};

class Welcome extends Component {
    render() {
        return (
            <MuiThemeProvider >

                <div>

                    <Paper className="coba" style={style} zDepth={3}>

                        <h2>
                            Selaaaaaaaaaaaaaamat Datang
                        </h2>
                    </Paper>
                </div>

            </MuiThemeProvider>

        );
    }

    testApi() {

        // fetch('http://localhost:3001/pesan')     .then(function (err, res) { if (err)
        // {             console.log(err);         }         return res.json();     })

        fetch('/pesan')
            .then(function (res) {
                return res.text();
            })
            .then(function (body) {
                console.log(body);
            });

    }

}

export default Welcome;
