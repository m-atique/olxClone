import React, { Component } from 'react';
import Logo from './images/logo.png'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'


// import { connect } from 'react-redux';
// import { pgAuth } from '../../store/actions'
import history from '../../config/history'


import { ButtonToolbar } from 'react-bootstrap'
import Auth from '../auth/auth'


import './navbar.css'



class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { addModalShow: false }

    }

    render() {
        let modalClose = () => this.setState({
            addModalShow: false
        })

        return (
            <div className='outerbox ' >
                <div className='p-2'>
                    <img className='logo' src={Logo} alt="" />
                </div >
                <div className='col-3'>
                    <div className=' firstdiv m-2 p-2'>
                        <BsSearch />
                        <input type="text" value='Pakistan' className=' ml-2 lcinput' />
                        <AiOutlineDown />
                    </div>
                </div>
                <div className='col-5'>
                    <div className='p-2  row'>
                        <input type="text" placeholder='Find Cars Mobilephones and more...' className='p-1 col-10 lcsearch2' />
                        <div className='bg-dark pt-2 pb-3 pl-3 pr-3 searchdiv'>
                            <BsSearch style={{ fill: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='icondiv m-2'>
                        <BsChat size={20} style={{ fontWeight: '900' }} className='icons' />
                        <FaRegBell size={20} className='icons' />
                        <div style ={{display:'inline'}}>
                            <ButtonToolbar style= {{display:'inline-block'}}>
                                <button onClick={() => this.setState({
                                    addModalShow: true
                                })} style={{ fontWeight: '500', border:'none' }} className='icons '>Login</button>

                                <Auth
                                    show={this.state.addModalShow}
                                    onHide={modalClose}
                                />
                            </ButtonToolbar>
                        </div>


                        <button  className='sellbtn icons' style={{ fontWeight: '900' }} ><TiPlus />Sell</button>
                    </div>
                </div>



            </div>
        );
    }
}
//--------------------------------------import multiple store
// const mapStateProps = (state) => ({
//     app_name: state.app.app_name,
//     classname: state.class.name

// })

// //-----------------------------------------------------------dispatch

// const mapDispatchToProps = (dispatch) => ({
//     loginPg: (history) => dispatch(pgAuth(history))
// })

// export default connect(mapStateProps, mapDispatchToProps)(Navbar);

export default Navbar;

