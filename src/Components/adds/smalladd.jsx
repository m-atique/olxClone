import React, { Component } from 'react';
import olxsmall from './images/olxsmall.png'

class Smalladd extends Component {
    render() {
        return (
            <div className='m-5 p-5'>
                <img src={olxsmall}alt=""/>
            </div>
        );
    }
}

export default Smalladd;