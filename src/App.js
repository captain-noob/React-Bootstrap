import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Nav ,Form ,InputGroup ,FormControl,Navbar,Image, FormGroup, Container, Row ,Col,Dropdown,NavDropdown } from 'react-bootstrap';



function App() {
  return (
    <div className="main">
      <Navbar expand="lg" fixed="top" className=" navbar-b navbar-trans  border" id="mainNav">
        <Container fluid>
          <Navbar.Brand className="js-scroll pt-3" href="#page-top"><i className="fa fa-bug text-danger" /> ShopFolio</Navbar.Brand>
          <Navbar.Toggle  className="collapsed bg-transparent btn-outline-light" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </Navbar.Toggle>
          <Navbar.Collapse className="pt-2 justify-content-between" id="navbarDefault">
            <Nav className="navbar-nav justify-content-start">
              <Nav.Item>
                <Nav.Link className=" js-scroll active" href="index.html"> Home</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link className="js-scroll" href="#about">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className=" js-scroll" href="#service">Store</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className=" js-scroll" href="#work">Vacancies</Nav.Link>
              </Nav.Item>
              <Nav.Item className="pr-5 mr-4">
                <Nav.Link className=" js-scroll" href="#blog">Pricing Plan</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {/* <Form.Group className="form-group"> */}
                <Nav.Item>
                  <InputGroup className=" input-group-sm mb-3">
                    <InputGroup.Prepend >
                      <InputGroup.Text style={inplabel} className="font-weight-bold ">Zip Code</InputGroup.Text>
                      
                      <select style={inplabel1} name="zip" id="zip">
                        <option style={inplabel1}  value="100" selected>1233</option>
                        <option value="101">1232</option>
                        <option value="102">1236</option>
                      </select>

                    </InputGroup.Prepend>

                    <FormControl style={input} type="text" className="form-control" name="cid" placeholder />
                    <InputGroup.Append className="input-group-append">
                      <Button type="submit" style={signup} variant="outline-warning"  className=""><i className="fa fa-search" /></Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Nav.Item>
              </Nav.Item>
                <Row>
                  <a className="js-scroll" href="#"><Button style={login,border} variant="outline-warning" size="sm" className="mb-2 ml-4 ">Login</Button></a>
                  <a className="js-scroll" href="#"><Button style={signup,border} variant="warning" size="sm" className="mb-2 ml-4">SignUp</Button></a>
                  <a className="js-scroll" href="#"><Button variant="light" size="sm" className="mb-2 ml-4 text-secondary "><span><i className="fa fa-shopping-cart" /> Cart</span></Button></a>
                </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ======= Header ======= */}
      <main>
        <div  className=" fa-expand slider-area hero-bg1 hero-overly">
          <div className="single-slider hero-overly  slider-height1 d-flex align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col xl={10} lg={10} >
                  {/* Header Caption */}
                  <div className="hero__caption pt-100">
                    <h1 className="mb-3">Get our best advices</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, explicabo adipisci
                      reiciendis quasi inventore soluta laboriosam, quos repellendus facere laborum
                      repudiandae amet consectetur praesentium voluptatibus officiis itaque nostrum ipsa
                      dolorem! amet consectetur praesentium
                    </p>
                  </div>
                  {/*Header form */}
                  <Form action="#" className="search-box mb-100">
                    <Col md={8} className="input-form">
                      <input type="text" placeholder="Enter Your Email" />
                    </Col>
                    <Col md={4} style={mainbutton} className="search-form ">
                      <Nav.Link href="#"><i className /> Subscribe</Nav.Link>
                    </Col>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
      {/* footer part start*/}
      <section className="footer-area section_padding">
        <Container expand="lg">
          <Row>
            <Col lg={3} sm={6} md={3} className="mb-4 mb-xl-0 single-footer-widget">
              <ul>
                <li><a href="#"><b>COMPANY</b></a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6} md={3} className=" mb-4 mb-xl-0 single-footer-widget">
              <ul>
                <li><a href="#"><b>CONTACT</b></a></li>
                <li><a href="#">Help &amp; support</a></li>
                <li><a href="#">Partner with Us</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6} md={3} className="mb-4 mb-xl-0 single-footer-widget">
              <ul>
                <li><a href="#"><b>LEGAL</b></a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Refunds &amp; Cancellation</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie policy</a></li>
              </ul>
            </Col>
            <Col lg={3} sm={6} md={3} className=" mb-4 mb-xl-0 single-footer-widget">
              <ul>
                <li>
                  <a href="#">
                    <Image src="assets/img/app.svg" alt="" style={{width:150}} />
                  </a>
                </li>
                <br />
                <li><a href="#">
                    <Image  src="assets/img/play.svg" style={{width:150}} alt="" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <footer style={{backgroundColor:"black"}} className="copyright_part  text-white p-4">
        <Container>
          <hr color="white"/>
          <Row className=" align-items-center">
            <Col lg={12} md={12} className="footer-text m-0  text-center">
              Copyright ©All rights reserved
            </Col>
          </Row>
        </Container>
      </footer>
      {/* footer part end*/}
    </div>
  );
}

export default App;
export const main1blue="#2c3e50";
export const main2orange="#ff9900";
const number=15;

const login = {
  color: main2orange,
  backgroundColor: "white",
  borderColor: main2orange,
  
};

const inplabel={
  borderBottomColor: main2orange,
  borderLeftColor: main2orange,
  borderTopColor: main2orange,
  borderRightColor: "white",
  backgroundColor:"white"
};
const inplabel1={
  borderBottomColor: main2orange,
  borderLeftColor: "white",
  borderTopColor: main2orange,
  borderRightColor: main2orange,
  backgroundColor:"white"
};

const border ={
  borderBottomLeftRadius: number,
  borderBottomRightRadius: number,
  borderTopLeftRadius: number,
  borderTopRightRadius: number,
};
const signup = {
  backgroundColor: main2orange,
  color:"white"
};
const input = {
  color: "black",
  backgroundColor: "white",
  borderColor: main2orange
};

const mainbutton = {
  color: "white",
  backgroundColor: main1blue,
  borderColor: main1blue
};