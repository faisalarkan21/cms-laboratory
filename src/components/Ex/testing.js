import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const style = {
    margin: 12
};

class Test extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton label="Default" style={style}/>
                    <RaisedButton label="Primary" primary={true} style={style}/>
                    <RaisedButton label="Secondary" secondary={true} style={style}/>
                    <RaisedButton label="Disabled" disabled={true} style={style}/>
                    <br/>
                    <br/>
                    <RaisedButton label="Full width" fullWidth={true}/>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default Test;
