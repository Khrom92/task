import { BrowserRouter } from "react-router-dom";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import "./App.css";
import Layout from "./layout";
import MyList from "./components/MyList";
import Hello from "./components/Hello";


export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout className='Main'>
                    <Switch>
                        <Route exact path='/' component={Hello}/>
                        <Route path='/MyList' component={MyList}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }

}