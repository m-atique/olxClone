import zIndex from '@material-ui/core/styles/zIndex';
import React, { Component } from 'react';
import './sellad.css'
import {BiImageAdd} from 'react-icons/bi'


class index extends Component {
    render() {
        return (
            <div style={{fontFamily:"Segoe UI"}}>
                <center>
                 <h2 className='mt-5 text-light bg-dark roundB p-3'>Post Your ADD</h2>
                 </center>
                <div className="container   mt-5 p-5 text-left" >
                    <div className='roundB p-3'>
                        <h5 className ='heading'>SELECTED CATAGORY</h5>
                        <span className="p-2">Main catagory</span>/<span className="p-2">sub catagory</span>
                        <button className='chngBtn'>Change</button>
                    </div>
                    <div className='roundB p-3'>
                        <div>
                        <h5 className ='heading text-center'>DETAIL OF YOUR ADD</h5>
                        </div>
                        <hr/>
            
                        <div>
                            <h6 className ='heading'>*Add title</h6>
                            <input type="text" class='col-10 bg-white roundB '/>
                            <p>Mention the key feature of your item e.g(brand, modal and type</p>
                        </div>
                        <hr/>
                        <div>
                            <h6 className ='heading'>*Description</h6>
                            <textarea name="" id="" cols="20" rows="5" className='col-10'></textarea>
                            <p>Include condition, feature and resson of selling</p>
                        </div>
                        <hr/>

                        <div>
                            <h4 className ='heading'> Set a Price</h4>
                            <input type="text" placeholder ='Rs.' className='col-10'/>
                        </div>
                        <hr/>
                        <div>
                            <h4 className ='heading'>UPLOAD PHOTOS</h4>
                            <center>
                            <div className='col-5 m-5 p-2 ' style ={{display:'flex', flexWrap:'wrap'}}>
                            
                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>
                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>

                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>

                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>

                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>

                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>

                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>

                            <div className ='imgDiv'> 
                              <input className ='imgBtn' type="file"  style={{zIndex:'-1',opacity:0}} id=""/>
                            </div>
                            
                            </div>
                            </center>
                        </div>
                        <hr/>

                        <div>
                            <h4 className ='heading'>CONFIRM YOUR LOCATION</h4>
                            <input type="text" className='col-10'/>
                        </div>
                        <hr/>
                        <div>
                            <h4 className ='heading' >Confirm your Detail</h4>
                            <div className="userinfo col-12">
                    
                    <div style={{display:'flex',paddingLeft:'15px'}}> 
                    <img src="https://static.thenounproject.com/png/348334-200.png" alt="" className='userpic'/>
                    <div style={{paddingTop:'15px',paddingLeft:'10px'}}>
                    <h5 >Muhammad Atique</h5>
                    <h6>member since  1990</h6>
                    <h6>03338722136</h6>
                    </div>
                    </div>
                    </div>
                        </div>
                        <hr/>
                        <hr/>
                        <div>
                            <button className ='btn col-3 bg-dark text-light'>Post </button>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default index;