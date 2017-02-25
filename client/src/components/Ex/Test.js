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
function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0,
  };
}

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      
      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: '',
    };
  }
  
  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }
  
  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  }
  
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  }
  
  render() {
    const errors = validate(this.state.email, this.state.password);
    console.log(errors);

    const isDisabled = Object.keys(errors).some(function (x) {

    	return errors[x];
    }  );
     console.log(isDisabled);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={errors.email ? "error" : ""}
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          className={errors.password ? "error" : ""}
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button disabled={isDisabled}>Sign up</button>
      </form>
    )
  }
}
