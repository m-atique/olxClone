import React, { Component } from 'react';
import Logo from './images/logo.png'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'


import { connect } from 'react-redux';
import { showmodal,hidemodal } from '../../store/actions'
import history from '../../config/history'


import { ButtonToolbar } from 'react-bootstrap'
import Auth from '../auth/auth'


import './navbar.css'



class Navbar extends Component {
    render() {
        console.log(this.props.display)
        return (
            <div className='outerbox ' >
                <div className='p-2'>
                    <img className='logo ' src={Logo} alt="" />
                </div >
                <div className='col-3'>
                    <div className=' firstdiv m-2 p-2'>
                        <BsSearch />
                        <input type="text" value='Pakistan' className=' ml-2 col-8  lcinput' />
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
                    <div className='icondiv m-2 '>
                        <div style={{display:this.props.display}}>
                        <BsChat size={20} style={{ fontWeight: '900' }} className='icons' />
                        <FaRegBell size={20} className='icons' />
                        <img  className ='profilePic'src={this.props.user_pic} alt="" />
                        </div>
                        <div style ={{display:'inline'}}>
                            <ButtonToolbar style= {{display:'inline-block'}}>
                                <button onClick={() => this.props.showmodal()} style={{ fontWeight: '500', border:'none' }} className='icons '>Login</button>
                                <Auth
                                    show={this.props.modal_state}
                                    onHide={this.props.hidemodal}
                                />
                            </ButtonToolbar>
                        </div>


                        <button onClick={() => history.push('/Post')} className='sellbtn icons' style={{ fontWeight: '900' }} ><TiPlus />Sell</button>
                    </div>
                </div>



            </div>
        );
    }
}
// --------------------------------------import multiple store
const mapStateProps = (state) => ({
    
    modal_state:state.modal.addModalShow,
    user_pic:state.user.current_user.pic,
    display:state.user.display

})

//-----------------------------------------------------------dispatch

const mapDispatchToProps = (dispatch) => ({
    showmodal:()=> dispatch(showmodal()),
    hidemodal:()=> dispatch(hidemodal())
})


  
export default connect(mapStateProps, mapDispatchToProps)(Navbar);


