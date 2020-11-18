import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'
import './catheader.css'
import {Container, Col, Row} from 'react-bootstrap'

class Catheader extends Component {
  render() {
    return (
      <Container className ='m-0'>
        <Row>
          <Dropdown>
            <Dropdown.Toggle variant='white' id="dropdown-basic" style ={{fontWeight:'600'}}>
              ALL CATAGORIES
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <div style={{ display: "flex", justifyContent: 'space-between' }}>

                <div>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </div>

                <div>

                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                </div>
                <div>

                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                </div>
                <div>

                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        
       
        <div className='menu'>
          <a href="">Mobile Phones</a>
          <a href="">Car</a>
          <a href="">Motorcyles</a>
          <a href="">Houses</a>
          <a href="">Tv - Videos - Audio</a>
          <a href="">Tablet</a>
          <a href="">Land & Plots</a>

        </div>
        </Row>
        </Container>
    );
  }
}

export default Catheader;