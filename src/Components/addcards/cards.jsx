import React, { Component } from 'react';
import image from './images/image.webp';
import './card.css'
import { connect } from 'react-redux'
import {FiHeart} from 'react-icons/fi'
import {Container,Col,Row} from 'react-bootstrap'

class Cards extends Component {
    render() {
       
        return (
            <Container  className='wrapper col-12'>
            {/* <div className='wrapper  p-0'> */}
        {this.props.add.map(
            (value,key)=>{
                 if(value.featured !=='yes'){
                return(
                    // <div className='cardbox  col-3'>
                        <Col sm={12} md={3} xs={12} lg={3} className='cardbox'>
                    <div className='col-12'>
                        <img className='pic col-12' src={value.img} alt="" />

                    </div>
                    <div>
                <h4>Rs. {value.price}</h4>
                        <p>{value.detail}</p>
                        <div style={{ float: 'right' }}>
                <p style={{ fontSize: '10px' }}>{value.date}</p>
                        </div>
                    </div>
                {/* </div> */}
                </Col>

// --------------------------------------------------------------

                
                    )
                }
        else{
            return(
                // <div className='cardbox col-3'  style={{padding:'0px'}}>
                <Col sm={12} md={3} xs={12} lg={3} className='cardbox'>
                <legend  style ={{position:'relative',top:'10px',zIndex:'1'}}>
                    <span style ={{background:"#FFCE32", float: 'left',fontSize:'10px',margin:'5px', padding:'2px',fontWeight:'900'}}>FEATURED</span><span style ={{ float: 'right'}}><FiHeart></FiHeart></span></legend>
                    <div className='col-12'> 
                        <img className='fpic col-12' src={value.img} alt="" />
                    </div>
                    <div style={{borderLeft:'4px solid #ffce32'}}>
                        <h4>{value.price}</h4>
                        <p>{value.detail}</p>
                        <div style={{ float: 'right' }}>
                            <p style={{ fontSize: '10px',padding:'5px' }}>{value.date}</p>
                        </div>
                    </div>
                {/* </div> */}
                </Col>
            )
        }
            }
        )}              
            {/* </div> */}
            </Container>
        );
    }
}

const mapStateProps = (state) => ({
add: state.add.adds

})


export default connect(mapStateProps,null)(Cards);











{/* {this.props.add.map((trans_obj,index)=>{
                return(
                        <li>
                        <span > {trans_obj.Discrip}</span>
                        <span>{trans_obj.Amount}</span>
                        <button className = 'del_btn'>X</button>
                    </li>

                    )
                 })}  */}
