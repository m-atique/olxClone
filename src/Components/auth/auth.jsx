import React, { Component } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa';


import { connect } from 'react-redux'
import { firebase_login } from '../../store/actions'

import { Carousel, Modal } from 'react-bootstrap'



class Auth extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton />
        <Modal.Body className='m-0 p-0'>
          <div>
            <div className='  m-5 p-5 text-center'>

              {/* -------------------------------------------------------------carsual */}
              <Carousel>
                <Carousel.Item>

                  <img
                    className=""
                    src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png"
                    alt="First slide"
                    width='100px'
                    height='100px'
                  />
                  <p className='' text-black>HElp OLX to make as safer place to sell and Buy</p>
                </Carousel.Item>

                <Carousel.Item>
                  <img

                    src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png"
                    alt="Third slide"
                    width='100px'
                    height='100px'
                  />
                  <p className='' text-black>Contact and close deals Faster</p>
                </Carousel.Item>
                <Carousel.Item>
                  <img

                    src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png"
                    alt="Third slide"
                    width='100px'
                    height='100px'
                  />
                  <p className='text-black'>Find your all thing at one place</p>
                </Carousel.Item>
              </Carousel>

              {/* --------------------------------------------------------------------- */}
              <div>
                <button className='p-2 m-1 text-center bg-white col-12' style={{ fontWeight: '900', border: '2px solid black', borderRadius: '3px' }}><HiPhone className='mr-3  border border-dark rounded-circle bg-dark text-white ' />Continue with phone No.</button>
                <button onClick={() => { this.props.firebase_login(this.props.history) }} className='p-2 m-1 text-center bg-white col-12' style={{ fontWeight: '900', border: '2px solid black', borderRadius: '3px' }}><FaFacebookF className='mr-3  border border-dark rounded-circle bg-dark text-white ' />Continue with facebook</button>
                <button className='p-2 m-1 text-center bg-white col-12' style={{ fontWeight: '900', border: '2px solid black', borderRadius: '3px' }}><AiOutlineGoogle className='mr-3  border border-dark rounded-circle bg-dark text-white ' />Continue with google</button>
                <button className='p-2 m-1 text-center bg-white col-12' style={{ fontWeight: '900', border: '2px solid black', borderRadius: '3px' }}><HiMail className='mr-3  border border-dark rounded-circle bg-dark text-white ' />Continue with e-mail</button>

              </div>
              <div className='text-center mt-4' style={{ fontSize: '13px' }}>
                <div className='mb-3'>We won't share your personal details with anyone</div>
                <div>If you Continue, you are accepting <a href=""> OLX terms,Conditions and Privacy Policy</a></div>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    );
  }
}

//--------------------------------------import multiple store
const mapStateProps = (state) => ({
  app_name: state.app.app_name,
  classname: state.class.name
})

//-----------------------------------------------------------dispatch

const mapDispatchToProps = (dispatch) => ({
  firebase_login: (history) => dispatch(firebase_login(history))
})

export default connect(mapStateProps, mapDispatchToProps)(Auth);;