import React, { Component } from 'react';
import './footer.css'
import {RiFacebookCircleLine}  from "react-icons/ri";
import {TiSocialTwitterCircular}  from "react-icons/ti";
import {SiInstagram} from 'react-icons/si';
import {ImPlay2} from 'react-icons/im';
import {Container, Col, Row} from 'react-bootstrap'

//-----------------------images
import appstore from './images/appstore.png'
import playstore from './images/playstore.png'


class Footer extends Component {
    render() {
        return (
            // <div>

                
                    <Container className ='col-12 p-0'>
                       <Row className = 'footer1 col-12 p-0 m-0 pt-2 pb-2'>
                    {/* <div className='links'> */}
                    <Col sm={6} md={3} xs={6} lg={3} >

                        <h5>
                            PAPULAR CAGEGORIES
                        </h5>
                        <ul>
                            <li>Cars</li>
                            <li>Flates for Rent</li>
                            <li>Jobs</li>
                            <li>Mobile phones</li>

                        </ul>
                        </Col>
                    
                        <Col sm={6} md={3} xs={6} lg={3}>


                        <h5>
                            TRENDING SEARCHES
                        </h5>
                        <ul>
                            <li>Bikes</li>
                            <li>Watches</li>
                            <li>Books</li>
                            <li>Doges</li>

                        </ul>
                        </Col>
                        <Col sm={6} md={2} xs={6} lg={2}>


                        <h5>
                            About Us
                        </h5>
                        <ul>
                            <li>About OLX Group  </li>
                            <li>Contact Us</li>
                            <li>OLX for Bussinesses</li>
                            <li></li>

                        </ul>
                        </Col>
                        <Col sm={6} md={2} xs={6} lg={2}>
                        <h5>
                            OLX
                        </h5>

                        <ul>
                            <li>Help</li>
                            <li>Sitemap</li>
                            <li>Legal and privacy Information</li>
                            <li></li>

                        </ul>
                        </Col>
                        <Col sm={6} md={2} xs={6} lg={2}>

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

                    </Col>
                    </Row>
                   <Row className='footer2 m-0'>
                
                
                    <div className='footerlinks'>
                        Other Countries   <span>  India - South Africa - Indonesia</span>
                    </div>
                    <div className='olxVession'>
                        Free Classifieds in Pakistan. <span> spa© 2006-2020 OLX</span>
                    </div>

                
                </Row>

                </Container>
        );
    }
}

export default Footer;