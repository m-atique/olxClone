import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



//---------------------------------------------------Components import
import Footer from './Components/footer/footer'
import Navbar from './Components/navbar/Navbar'
import Catheader from './Components/catlog/catheader'
import Cards from './Components/addcards/cards'
import Fcard from './Components/addcards/fcard'
import Largeadd from './Components/adds/largeadd'
import Smalladd from './Components/adds/smalladd'
// import Auth from './Components/auth/auth'

import Approuter from './config/router'
//--------------------------------------------store 
// import { connect } from 'react-redux'
// import {firebase_login} from './store/actions'


class App extends Component {
 render(){
  console.log(this.props)
 
  return (
    
    <div className="App">
      {/* <Auth></Auth> */}
      {/* <button onClick = {()=>{this.props.firebase_login()}}>firebase_login</button> */}
        {/* <Navbar></Navbar>
        <Catheader></Catheader>
        <Largeadd></Largeadd>
        <Smalladd></Smalladd>
        <Cards></Cards>
        <Fcard></Fcard>
        <Smalladd></Smalladd>
        <Footer></Footer> */}
      <Approuter></Approuter>
    </div>
  );
}
}
// //--------------------------------------import multiple store
// const mapStateProps=(state)=>({
//   app_name: state.app.app_name,
//   classname: state.class.name
// })

// //-----------------------------------------------------------dispatch

// const mapDispatchToProps=(dispatch)=>({
//   firebase_login :(data)=> dispatch(firebase_login())
// })

// export default connect(mapStateProps,mapDispatchToProps)(App);
export default App;
