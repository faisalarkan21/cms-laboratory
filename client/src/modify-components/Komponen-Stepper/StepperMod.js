import React from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
var Link = require('react-router').Link
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */

const perubahan = {

    letakTombol: {
        textAlign: "right"
    }

}

class HorizontalLinearStepper extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext()
    {
        return {muiTheme: getMuiTheme()}
    }

    state = {
        finished: false,
        stepIndex: 0
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({
                stepIndex: stepIndex - 1
            });
        }
    };

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {
            margin: '0 16px'
        };

        return (
            <div
                style={{
                width: '100%',
                maxWidth: 700,
                margin: 'auto'
            }}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Pengenalan Fitur</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Setting Database</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Selesai</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished
                        ? (
                            <p>
                                <a
                                    href="/setting-database"
                                    onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}>
                                    Click here
                                </a>
                                to reset the example.
                            </p>
                        )
                        : (
                            <div style={perubahan.letakTombol}>

                                <div
                                    style={{
                                    marginTop: 3
                                }}>
                                    <FlatButton
                                        label="Back"
                                        disabled={stepIndex === 0}
                                        onTouchTap={this.handlePrev}
                                        style={{
                                        marginRight: 12
                                    }}/>
                                   

                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default HorizontalLinearStepper;