import React, { Component } from 'react';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer'
import './PostMain.css'
import {FiHeart} from 'react-icons/fi'
import img from '../navbar/images/logo.png'
import {Carousel} from 'react-bootstrap'

class PostMain extends Component {
  
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                <div className="main col-12 m-3 mt-5 pt-5">
                    <div>
                    <div className="photo col-12 roundB mb-3">
                    <div  style={{padding:'0px'}}>
                <legend  style ={{position:'relative',top:'10px',zIndex:'1'}}>
                    <span style ={{background:"#FFCE32", float: 'left',fontSize:'10px',margin:'5px', padding:'2px',fontWeight:'900'}}>FEATURED</span></legend>
                    <div className='col-12'> 
                        <img className='fpic col-12' src= {img} alt="" />
                    </div> 
                </div>
                    </div>

                    {/* //--------------------------------------------------carosoul */}
                    <div className="caresoul col-12 mb-3 roundB">
                    <Carousel>
                <Carousel.Item>

                  <img
                    className=""
                    src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png"
                    alt="First slide"
                    width='100px'
                    height='100px'
                  />
                
                </Carousel.Item>

                <Carousel.Item>
                  <img

                    src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png"
                    alt="Third slide"
                    width='100px'
                    height='100px'
                  />
                 
                </Carousel.Item>
                <Carousel.Item>
                  <img

                    src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png"
                    alt="Third slide"
                    width='100px'
                    height='100px'
                  />
                 
                </Carousel.Item>
              </Carousel>

                    </div>

                    {/* -------------------------------------------------------------- */}

                    <div className="description col-12  mb-3 roundB">
        
                        <h1>Description</h1>
                        <hr/>
                        adsdjkasdhjkashhasd
                        <br/>
                        sdfsdfsdfsdfdsfsdfds
                        <br/>
                        sdfsdfsdfsdfsdfsdfdsfghfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfhgfhgf
                        dfsdfsdfdsfsdfsd
                        sdf
                        dsf
                        dsf
                        sd
                     
                    </div>
                    
                    </div>
                    <div className='m-2'>
                    <div className="price col-12 text-black p-4 m-3 roundB">
                    <div className="p-3" style={{display:'flex',justifyContent:'space-between'}}>
                    <h2>Rs.Q20000 <span className='pl-5 ml-5'><FiHeart/> </span></h2>
                    </div>
                    <div>
                        <h5>hasjdkjashdkjashkdashkdjhaskdas</h5>
                    </div>
                    </div>
                    <div className="userinfo col-12  m-3 p-4 roundB">
                    <h2>Seller Description</h2>
                    <div style={{display:'flex'}}> 
                    <img src={img} alt="" className='userpic'/>
                    <div style={{paddingTop:'30px',paddingLeft:'10px'}}>

                    <h5 >Muhammad Atique</h5>
                    <h6>member since  1990</h6>
                    </div>
                    </div>
                    <button className='msgBtn roundB col-11 bg-dark text-white mt-3 p-2'>Chat with seller</button>
                    <h6 className="mt-3 text-center">03338722136</h6>
                    </div>
                    <div className="location roundBcol-12 bg-danger m-3 p-4">location</div>
                    </div>
                </div>
                <Footer></Footer>
               
            </div>
        );
    }
}

export default PostMain;