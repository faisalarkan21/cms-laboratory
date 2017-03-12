import React, {Component} from 'react';
import { render } from 'react-dom'
//temp 3
import auth from '../../auth/auth.js';

export default class Dashboard extends React.Component {


    handleKeluar (){
        auth.logout();
    }

    // handleCek (){
    //     auth.checkToken ();
    // }


    render() {

        const token = auth.getTokenAdmin()

        return (

            <div>
                <h1> Anda Admin ! </h1>
                <p>{token}</p>
                <button onClick={this.handleKeluar} > Keluar </button> 
                <button onClick={this.handleCek} > Cek </button> 
            </div>

        )

    }
}