import React, { Component } from 'react';

import Footer from '../Components/footer/footer'
import Navbar from '../Components/navbar/Navbar'
import Catheader from '../Components/catlog/catheader'
import Cards from '../Components/addcards/cards'
import Largeadd from '../Components/adds/largeadd'
import Smalladd from '../Components/adds/smalladd'


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Catheader></Catheader>
                <Largeadd></Largeadd>
                <Smalladd></Smalladd>
                <Cards></Cards>
                <Smalladd></Smalladd>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;