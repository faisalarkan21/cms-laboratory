import React from 'react';

export default class InputDatabase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        return (

            <div>
            <input type="text" onChange={this.handleChange}/>

            <textarea type="text" value={this.state.value} />
            
            
            </div>

        )

    }

}