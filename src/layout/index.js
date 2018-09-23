import Header from './Header';


import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <main className='Main'>
                    {this.props.children}
                </main>
            </div>

        )
    }
}