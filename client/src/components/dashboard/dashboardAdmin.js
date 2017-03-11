import React, {Component} from 'react';
import { render } from 'react-dom'
//temp 3
import auth from '../../auth/auth.js';

export default class Dashboard extends React.Component {

    render() {

        const token = auth.getToken()

        return (

            <div>
                <h1> Anda Admin ! </h1>
                <p>{token}</p>
            </div>

        )

    }
}