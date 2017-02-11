import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Main = () => (
    <MuiThemeProvider >
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

export default Main;