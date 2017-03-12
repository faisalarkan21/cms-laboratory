import React, {Component} from 'react';
import {render} from 'react-dom'
//temp 3
// import 'babel-polyfill';
import auth from '../../auth/auth.js';
import {simpleRestClient, Admin, Resource} from 'admin-on-rest';
import { PostList } from './posts';

export default class Dashboard extends React.Component {

    handleKeluar() {
        auth.logout();
    }

    // handleCek (){     auth.checkToken (); }

    render() {

        const token = auth.getTokenUser()

        return (

            <Admin restClient={simpleRestClient('http://localhost:3000')}>
               <Resource name="posts" list={PostList} />
            </Admin>

        )

    }
}