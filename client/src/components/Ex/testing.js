import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const style = {
    margin: 12
};

class Test extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton label="Default" onClick={this.testApi} style={style}/>

                </div>
            </MuiThemeProvider>

        );
    }

    testApi() {

        // fetch('http://localhost:3001/pesan')     .then(function (err, res) {
        // if (err) {             console.log(err);         }         return res.json();
        //     })

        fetch('/pesan')
            .then(function (res) {
                return res.text();
            })
            .then(function (body) {
                console.log(body);
            });

    }

}

export default Test;
