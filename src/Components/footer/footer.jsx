import React, { Component } from 'react';
import './footer.css'
import {RiFacebookCircleLine}  from "react-icons/ri";
import {TiSocialTwitterCircular}  from "react-icons/ti";
import {SiInstagram} from 'react-icons/si';
import {ImPlay2} from 'react-icons/im';

//-----------------------images
import appstore from './images/appstore.png'
import playstore from './images/playstore.png'


class Footer extends Component {
    render() {
        return (
            <div>

                <div className="footer1">
                    <div className='links'>

                        <h5>
                            PAPULAR CAGEGORIES
                        </h5>
                        <ul>
                            <li>Cars</li>
                            <li>Flates for Rent</li>
                            <li>Jobs</li>
                            <li>Mobile phones</li>

                        </ul>
                    </div>
                    <div className='links'>

                        <h5>
                            TRENDING SEARCHES
                        </h5>
                        <ul>
                            <li>Bikes</li>
                            <li>Watches</li>
                            <li>Books</li>
                            <li>Doges</li>

                        </ul>
                    </div>
                    <div className='links'>

                        <h5>
                            About Us
                        </h5>
                        <ul>
                            <li>About OLX Group  </li>
                            <li>Contact Us</li>
                            <li>OLX for Bussinesses</li>
                            <li></li>

                        </ul>
                    </div>
                    <div className='links'>
                        <h5>
                            OLX
                        </h5>

                        <ul>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Legal and privacy Information</li>
                            <li></li>

                        </ul>
                    </div>
                    <div className='links'>

                        <h5>
                            FOLLOW US
                        </h5>
                        <ul className=' iconDiv'> 
                        <li className='brands'><RiFacebookCircleLine /></li>
                        <li className='brands twit'>< TiSocialTwitterCircular /></li>
                        <li className='brands'><ImPlay2 /></li>
                        <li className='brands'><SiInstagram /></li>
                        </ul>
                        <div>
                            <img className='play' src={appstore} alt="" srcset=""/>
                            <img className='play' src={playstore} alt="" srcset=""/>
                        </div>

                    </div>
                </div>
                <div className='footer2'>
                    <div className='footerlinks'>
                        Other Countries   <span>  India - South Africa - Indonesia</span>
                    </div>
                    <div className='olxVession'>
                        Free Classifieds in Pakistan. <span> spa© 2006-2020 OLX</span>
                    </div>

                </div>

            </div>
        );
    }
}

export default Footer;