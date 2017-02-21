import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
const TextFieldExampleError = () => (
    <MuiThemeProvider>

        <div>
            <TextField hintText="Hint Text"/><br/>
            <br/>
            <TextField hintText="The hint text can be as long as you want, it will wrap."/><br/>
            <TextField id="text-field-default" defaultValue="Default Value"/><br/>
            <TextField hintText="Hint Text" floatingLabelText="Floating Label Text"/><br/>
            <TextField
                defaultValue="Default Value"
                floatingLabelText="Floating Label Text"/><br/>
            <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}/><br/>
            <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"/><br/>
            <TextField
                hintText="MultiLine with rows: 2 and rowsMax: 4"
                multiLine={true}
                rows={2}
                rowsMax={4}/><br/>
            <TextField
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={2}/><br/>
            <TextField hintText="Full width" fullWidth={true}/>
        </div>
    </MuiThemeProvider>

);

export default TextFieldExampleError;