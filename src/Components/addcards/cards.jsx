import React, { Component } from 'react';
import image from './images/image.webp';
import './card.css'

class Cards extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='cardbox '>
                    <div className='col-12'>
                        <img className='pic col-12' src={image} alt="" />

                    </div>
                    <div>
                        <h4>Rs. 5000</h4>
                        <p>Solar water gycer up to 120 liters</p>
                        <div style={{ float: 'right' }}>
                            <p style={{ fontSize: '10px' }}>  04 oct 2020</p>
                        </div>
                    </div>


                </div>


                
                        {/* ------------------------------------------------------------------ */}
                        <div className='cardbox'>
                            <div className='col-12'>
                                <img className='pic col-12' src={image} alt="" />

                            </div>
                            <div>
                                <h4>Rs. 5000</h4>
                                <p>Solar water gycer up to 120 liters</p>
                                <div style={{ float: 'right' }}>
                                    <p style={{ fontSize: '10px' }}>  04 oct 2020</p>
                                </div>
                            </div>


                        </div>
                        {/* ------------------------------------------------------------------ */}
                        <div className='cardbox'>
                            <div className='col-12'>
                                <img className='pic col-12' src={image} alt="" />

                            </div>
                            <div>
                                <h4>Rs. 5000</h4>
                                <p>Solar water gycer up to 120 liters</p>
                                <div style={{ float: 'right' }}>
                                    <p style={{ fontSize: '10px' }}>  04 oct 2020</p>
                                </div>
                            </div>


                        </div>
                        {/* ------------------------------------------------------------------ */}
                        <div className='cardbox '>
                            <div className='col-12'>
                                <img className='pic col-12' src={image} alt="" />

                            </div>
                            <div>
                                <h4>Rs. 5000</h4>
                                <p>Solar water gycer up to 120 liters</p>
                                <div style={{ float: 'right' }}>
                                    <p style={{ fontSize: '10px' }}>  04 oct 2020</p>
                                </div>
                            </div>


                        </div>
            </div>
        );
    }
}

export default Cards;