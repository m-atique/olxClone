import React, { Component } from 'react';
import image from './images/image.webp';
import {FiHeart} from 'react-icons/fi'
import './card.css'


class Fcard extends Component {
    render() {
        return (
                  <div className='wrapper2'>
                <div className='cardbox' style={{padding:'0px'}}>
                <legend  style ={{position:'relative',top:'10px',zIndex:'1'}}>
                    <span style ={{background:"#FFCE32", float: 'left',fontSize:'10px',margin:'5px', padding:'2px',fontWeight:'900'}}>FEATURED</span><span style ={{ float: 'right'}}><FiHeart></FiHeart></span></legend>
                    <div className='col-12'> 
                        <img className='fpic col-12' src={image} alt="" />
                    </div>
                    <div style={{borderLeft:'4px solid #ffce32'}}>
                        <h4>Rs. 5000</h4>
                        <p>Solar water gycer up to 120 liters</p>
                        <div style={{ float: 'right' }}>
                            <p style={{ fontSize: '10px',padding:'5px' }}>  04 oct 2020</p>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------- */}
                <div className='cardbox' style={{padding:'0px'}}>
                <legend  style ={{position:'relative',top:'10px',zIndex:'1'}}>
                    <span style ={{background:"#FFCE32", float: 'left',fontSize:'10px',margin:'5px', padding:'2px',fontWeight:'900'}}>FEATURED</span><span style ={{ float: 'right'}}><FiHeart></FiHeart></span></legend>
                    <div className='col-12'> 
                        <img className='fpic col-12' src={image} alt="" />
                    </div>
                    <div style={{borderLeft:'4px solid #ffce32'}}>
                        <span>
                        <h4>Rs. 5000</h4>
                        <p>Solar water gycer up to 120 liters</p>
                        </span>
                        <span style={{ float: 'right' }}>
                            <p style={{ fontSize: '10px',padding:'5px'}}>  04 oct 2020</p>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fcard;