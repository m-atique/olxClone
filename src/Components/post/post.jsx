import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from '../../config/history'
import './post.css'
import{Container, Col, Row} from 'react-bootstrap'
import {saveCatg,SaveSubcat} from '../../store/actions'

let goto_add = () => {
    history.push('/selleradd')

}

// this.props.saveSubcatg(e.target.innerText)
// let show_subCat = (value) => {

//     var col = document.getElementById('subcat')
//     col.innerText = ""


//     for (let i = 0; i < value.length; i++) {
//         var row = document.createElement('li')
//         row.onclick = (e)=>{ goto_add();}
//         row.setAttribute('class', 'catageries')
//         row.innerText = value[i]
//         col.appendChild(row)

//     }

// }




class Post extends Component {

    
    render() {
       
        return (
            <Container className=" pt-2">
                <h2 className='mt-5 text-light  text-center bg-dark roundB '>Select catagory</h2>
                <Row className="roundB p-5">
                <Col sms={3} sx={3} md={6} lg={6}>
                <ul className=" m-0">
                {this.props.catagery.map((value, key) => {
                         return (<li key={key} 
                              className='catageries pl-4' onClick={(e,v=value.sub) => {this.props.saveCatg(e.target.innerText);
                               
                                var col = document.getElementById('subcat')
                                    
                                    col.innerText = ""
                                    console.log(col)
                                
                                
                                    for (let i = 0; i < v.length; i++) {
                                        var row = document.createElement('li')
                                        row.onclick = (e)=>{ goto_add();this.props.saveSubcatg(e.target.innerText)}
                                        row.setAttribute('class', 'catageries')
                                        row.innerText = v[i]
                                        col.appendChild(row)
                                        console.log('cadim')
                                
                                    }
                              }}>{value.main} 
                         </li>)
                     })}

                </ul>
                </Col>
                <Col sms={6} sx={6} md={6} lg= {6}>
                    <ul id="subcat">
                    </ul>       
                </Col>
                </Row>
               
            </Container>
            
        );
    }
}
const mapStateProps = (state) => ({
    catagery: state.Catagery.Catagery
    

})

const mapDispatchToProps = (dispatch) => ({
    saveCatg: (MainCat) => dispatch(saveCatg(MainCat)),
    saveSubcatg:(subcat)=>dispatch(SaveSubcat(subcat)),
  
})


export default connect(mapStateProps, mapDispatchToProps)(Post);







