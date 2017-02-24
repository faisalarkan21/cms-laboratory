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
export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = {
      name1: this.handleChange.bind(this, 'name1'),
      name2: this.handleChange.bind(this, 'name2'),
    }

    this.state = {
      name1: '',
      name2: ''
    };
  };

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  };


  render() {
    return (
      <div class="row column">
        <Label name={this.state.name1}/>
        <Input onChange={ this.onChange.name1 } />
        <Label name={this.state.name2}/>
        <Input onChange={ this.onChange.name2 } />
      </div>
    );
  };
}

const Label = props => (
  <p {...props}>Hello: <span className="label-name">{props.name}</span></p>
);

const Input = props => (
  <input placeholder="Enter your name" {...props} type="text" /> 
);