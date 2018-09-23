import React, { Component } from 'react';

import './App.css';
import Header from './layout/Header'
import Main from './layout/index'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Main className='Main'/>
            </div>

        );
    }
}

export default App;
