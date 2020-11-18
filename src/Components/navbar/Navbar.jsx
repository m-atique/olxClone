import React, { Component } from 'react';
import Logo from './images/logo.png'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'


import { connect } from 'react-redux';
import { showmodal, hidemodal } from '../../store/actions'
import history from '../../config/history'


import { ButtonToolbar } from 'react-bootstrap'
import Auth from '../auth/auth'
import { Container, Col, Row,InputGroup,FormControl } from 'react-bootstrap'

import './navbar.css'



class Navbar extends Component {
    render() {

        return (

            <Container className ='pt-3 pb-2 outerbox col-12'>
                <Row className='p-0'>
                    <Col className =''sm={0} md={1} xs={12} lg={1}>
                        <div className='p-0  '>
                            <img className='logo ' src={Logo} alt="" />
                        </div>
                    </Col>


                    <Col className=' p-0 m-0' sm={9} md={3} xs={12} lg={3}>
                        <div className='p-1  firstdiv'>
                            <BsSearch />
                            <input type="text" value='Pakistan' className='lcinput  ml-2 col-9' />
                            <AiOutlineDown />
                        </div>
                    </Col>


                    <Col sm={12} md={5} xs={12} lg={5}>
                    <div className=''>
                        <InputGroup>
                            <FormControl 
                                placeholder="Find Cars Mobilephones and more..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append > 
                                <InputGroup.Text style={{background:'black',border:'0.7px solid'}} id="basic-addon2"><BsSearch style={{ fill: 'white' }} /></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>

                    </div>
                    </Col>
                    <Col sm={12} md={3} xs={12} lg={3} className="  text-center p-0">
                    <div className=' '>
                        <div style={{ display: this.props.display ,display:"inline"}}>
                            <BsChat size={20} style={{ fontWeight: '900' }} className='icons' />
                            <FaRegBell size={20} className='icons' />
                            <img className='profilePic' src={this.props.user_pic} alt="" />
                            <ButtonToolbar style={{ display: 'inline-block' }}>
                                <button onClick={() => this.props.showmodal()} style={{ fontWeight: '500', border: 'none' }} className='icons '>Login</button>
                                <Auth
                                    show={this.props.modal_state}
                                    onHide={this.props.hidemodal}
                                />
                            </ButtonToolbar>
                        </div>
                      <button onClick={() => history.push('/Post')} className='sellbtn icons' style={{ fontWeight: '900' }} ><TiPlus />Sell</button>
                    </div>
                    
                    </Col>
                </Row>

            </Container>
        );
    }
}
// --------------------------------------import multiple store
const mapStateProps = (state) => ({

    modal_state: state.modal.addModalShow,
    user_pic: state.user.current_user.pic,
    display: state.user.display

})

//-----------------------------------------------------------dispatch

const mapDispatchToProps = (dispatch) => ({
    showmodal: () => dispatch(showmodal()),
    hidemodal: () => dispatch(hidemodal())
    
})



export default connect(mapStateProps, mapDispatchToProps)(Navbar);












//            <div className='outerbox m-0  p-0 pt-2 pb-2  col-12 container'>
            //     <div className='row m-0 p-0 '>
            //         <div className='p-0  roundB'>
            //             <img className='logo ' src={Logo} alt="" />
            //         </div>



            //         <div className='firstdiv bg-dark md-12 sm-12 lg-3'>
            //             2
            //             {/* <div className='p-2 '>
            //                 <BsSearch />
            //                 <input type="text" value='Pakistan' className='lcinput ml-2' />
            //                 <AiOutlineDown />
            //             </div> */}
            //         </div>


            //         <div className=' bg-success col-5'>
            //             3
            //             {/* <input type="text" placeholder='Find Cars Mobilephones and more...' className=' lcsearch2' /> */}
            //         </div>
            //         <div className='bg-warning col-3'>
            //             4
            //         </div>


            //     </div>
            // </div>
            // <div className='outerbox roundB col-12 sm-12 lg-12 md-12' >
            //     <div className='p-2 '>
            //         <img className='logo ' src={Logo} alt="" />
            //     </div >
            //     <div className='roundB col-3 md-12 sm-12'>
            //         <div className=' firstdiv m-2 p-2 sm-12 md-12 col-12'>
            //             <BsSearch />
            //             <input type="text" value='Pakistan' className=' ml-2 col-8 sm-12 lg-12 roundB lcinput' />
            //             <AiOutlineDown />
            //         </div>
            //     </div>
            //     <div className='col-5 roundB'>
            //         <div className='p-2 roundB row'>
            //             <input type="text" placeholder='Find Cars Mobilephones and more...' className='p-1 col-10 lcsearch2' />
            //             <div className='bg-dark pt-2 pb-3 pl-3 pr-3 roundB searchdiv'>
            //                 <BsSearch style={{ fill: 'white' }} />
            //             </div>
            //         </div>
            //     </div>
            //     <div className='col-3 roundB'>
            //         <div className='icondiv m-2  roundB'>
            //             <div style={{ display: this.props.display }}>
            //                 <BsChat size={20} style={{ fontWeight: '900' }} className='icons' />
            //                 <FaRegBell size={20} className='icons' />
            //                 <img className='profilePic' src={this.props.user_pic} alt="" />
            //             </div>
            //             <div style={{ display: 'inline' }}>
            //                 <ButtonToolbar style={{ display: 'inline-block' }}>
            //                     <button onClick={() => this.props.showmodal()} style={{ fontWeight: '500', border: 'none' }} className='icons '>Login</button>
            //                     <Auth
            //                         show={this.props.modal_state}
            //                         onHide={this.props.hidemodal}
            //                     />
            //                 </ButtonToolbar>
            //             </div>


            //             <button onClick={() => history.push('/Post')} className='sellbtn icons' style={{ fontWeight: '900' }} ><TiPlus />Sell</button>
            //         </div>
            //     </div>



            // </div>