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
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    this.handleChange = this
      .handleChange
      .bind(this);

    this.handleSubmbit = this
      .handleSubmbit
      .bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmbit(event) {
    this.setState({value: event.target.value});
    alert(this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmbit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>

        <textarea value={this.state.value} onChange={this.handleChange}/>

      </form>
    );
  }
}
