import zIndex from '@material-ui/core/styles/zIndex';
import React, { Component } from 'react';
import './sellad.css'
import { BiImageAdd } from 'react-icons/bi'
import { connect } from 'react-redux'
import { PostData } from '../../store/actions'
import { storage } from '../../config/firebase'


class index extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      urls: [],
      upload: ''
    }
  }


  async image_to_Firebase() {
    let images = this.state.images;
    let upload = 'done'
    let urls = this.state.urls

    for (let i = 0; i < images.length; i++) {

      const uploadTask = storage.ref(`/images/${images[i].name}`).put(images[i]);

       uploadTask.on('state_changed',
        (snapshot) => {


          var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;



          //--------------------------------------------------------to take out Url from firebase
          if (percentage !== 100) {
            console.log('wait')
          }
          else {
            storage.ref('images').child(images[i].name).getDownloadURL()
              .then(fireBaseUrl => {

                urls.push(fireBaseUrl);
                this.state.upload = '100'
              })
          }
        }
      )
    }
  }



  render() {
    console.log(this.state)
    let title = '';
    let description = '';
    let price = '';
    let location = '';
    let images = this.state.images;
    let upload = 'done'
    let urls = this.state.urls
    let image_btn = <div className='imgDiv'>

      <input className='imgBtn' type="file" style={{ zIndex: '-1', opacity: 0 }} id=""
        // onClick={ (e)=>{console.log(images)}} 
        onChange={(e) => { this.state.images.push(e.target.files[0]) }}
      />
    </div>

    //----------------------------------------------------- function to upload images on firebase


    //  image_to_Firebase() {
    // 
    //   for(let i=0;i<images.length;i++){
    //     // let img =images[i]
    //     const uploadTask =  await storage.ref(`/images/${images[i].name}`).put(images[i]);

    //     uploadTask.on('state_changed', 
    //     () => {

    //     //--------------------------------------------------------to take out Url from firebase
    //     storage.ref('images').child(images[i].name).getDownloadURL()
    //     .then(fireBaseUrl=>{

    //       urls.push(fireBaseUrl);
    //       console.log(urls)
    //     })
    //     }
    //        )
    //   }
    // }






    return (
      <div style={{ fontFamily: "Segoe UI" }}>
        <center>
          <h2 className='mt-5 text-light bg-dark roundB p-3'>Post Your ADD</h2>
        </center>
        <div className="container   mt-5 p-5 text-left" >
          <div className='roundB p-3'>
            <h5 className='heading'>SELECTED CATAGORY</h5>
            <span className="p-2">{this.props.mainCatg}</span>/
        <span className="p-2">{this.props.subcatg}</span>
            <button className='chngBtn bg-secondary text-light'>Change</button>
          </div>
          <div className='roundB p-3'>
            <div>
              <h5 className='heading text-center'>DETAIL OF YOUR ADD</h5>
            </div>
            <hr />

            <div>
              <h6 className='heading'>*Add title</h6>
              <input type="text" class='col-10 bg-white roundB ' onChange={(e) => { title = e.target.value }} />
              <p>Mention the key feature of your item e.g(brand, modal and type</p>
            </div>
            <hr />
            <div>
              <h6 className='heading'>*Description</h6>
              <textarea name="" id="" cols="20" rows="5" className='col-10' onChange={(e) => { description = e.target.value }}></textarea>
              <p>Include condition, feature and resson of selling</p>
            </div>
            <hr />

            <div>
              <h4 className='heading'> Set a Price</h4>
              <input type="text" placeholder='Rs.' className='col-10' onChange={(e) => { price = e.target.value }} />
            </div>
            <hr />
            <div>
              <h4 className='heading'>UPLOAD PHOTOS</h4>
              <center>
                <div className='col-5 m-5 p-2 ' style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}
                  {image_btn}

                </div>
              </center>
            </div>
            <hr />

            <div>
              <h4 className='heading'>CONFIRM YOUR LOCATION</h4>
              <input type="text" className='col-10' onChange={(e) => { location = e.target.value }} />
            </div>
            <hr />
            <div>
              <h4 className='heading' >Confirm your Detail</h4>
              <div className="userinfo col-12">

                <div style={{ display: 'flex', paddingLeft: '15px' }}>
                  <img src="https://static.thenounproject.com/png/348334-200.png" alt="" className='userpic' />
                  <div style={{ paddingTop: '15px', paddingLeft: '10px' }}>
                    <h5 >Muhammad Atique</h5>
                    <h6>member since  1990</h6>
                    <h6>03338722136</h6>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <hr />
            <div>
              <button className='btn col-3 bg-dark text-light'
                onClick={
                  (new_add) => {
                    this.image_to_Firebase();

                    this.props.postData(new_add = {
                      catagory: this.props.mainCatg,
                      subcatg: this.props.subcatg,
                      title: title,
                      detail: description,
                      price: price,
                      location: location,
                      pic: urls

                    })
                  }


                }>
                Post
                            </button>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
const mapStateProps = (state) => ({
  catagery: state.Catagery.Catagery,
  mainCatg: state.add.current_add.catagory,
  subcatg: state.add.current_add.subcatg,


})

const mapDispatchToProps = (dispatch) => ({
  postData: (new_add) => dispatch(PostData(new_add))


})


export default connect(mapStateProps, mapDispatchToProps)(index);

