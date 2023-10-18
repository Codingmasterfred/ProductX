import React from "react"
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useMediaQuery } from 'react-responsive';
import { useAuth0 } from "@auth0/auth0-react"

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';


function NavBar1(props) {

  const {
    loginWithRedirect,
    user,
    logout,
  } = useAuth0()

  function Redirect() {
    if (user) {
      logout()
    } else {
      loginWithRedirect()
    }
  }

  const isForPhone = useMediaQuery({ maxWidth: 418 }); // Adjust the breakpoint as needed
  const isSmallScreen = useMediaQuery({ maxWidth: 727, }); // Adjust the breakpoint as needed
  const isSmallComputerScreen = useMediaQuery({ maxWidth: 992, }); // Adjust the breakpoint as needed
  const iaLargeComputerScreen = useMediaQuery({ maxWidth: 1920 }); // Adjust the breakpoint as needed
  return (
    <>
      {isForPhone && <Navbar expand="lg" style={{ border: "10px solid black", display: "flex", justifyContent: "space-evenly" }}>
        <Container fluid style={{ border: "1px solid black", justifyContent: "space-between", width: "100%" }}>
          <Navbar.Brand href="#" style={{ fontSize: "30px", marginBottom: "5px" }}>Products</Navbar.Brand>
          <navbar style={{ padding: "0px", display: "flex", width: "160px", justifyContent: "space-evenly", alignItems: "center" }}>
            <Navbar.Toggle aria-controls="navbarScroll" style={{ height: "40px" }} />
            <h2 style={{ marginTop: "6px", border: "1px solid black", borderRadius: "20%", padding: "3px" }} onClick={Redirect}>{user ? "LogOut" : "Log in"}</h2>
          </navbar>
          <Navbar.Collapse id="navbarScroll" >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '300px', width: "100%", display: "flex", justifyContent: "center" }} navbarScroll>
              <Nav.Link href="#action1" style={{ fontSize: "20px" }}>Home</Nav.Link>
              <Nav.Link href="#" style={{ fontSize: "20px" }}>Link</Nav.Link>
              <NavDropdown style={{ fontSize: "20px", width: "100%" }} title="Dropdown" >
                <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>}


      {isSmallComputerScreen && !isForPhone && !isSmallScreen && <>
        <Navbar expand="lg" style={{ border: "10px solid black", display: "flex", flexDirection: "column" }}>
          <Container fluid style={{ border: "1px solid black", display: "flex", padding: "0px " }}>
            <Navbar.Brand href="#" style={{ fontSize: "40px", maxWidth: "250px", marginBottom: "10px", alignText: "center", flex: ".5", marginLeft: "10px" }}>Products</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" style={{height:"40px"}}/> */}

            {/* <Navbar.Collapse id="navbarScroll" > */}
            <div style={{ display: "flex", alignItems: "center", gap: "30px", minWidth: "450px", flex: "3" }}>
              <Form className="d-flex" style={{ minWidth: "100px", flex: "3" }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <h2 style={{ marginRight: "10px", marginTop: "6px", border: "1px solid black", borderRadius: "20%", padding: "5px" }} onClick={Redirect}>{user ? "LogOut" : "Log in"}</h2>
            </div>
          </Container>
          <Container fluid style={{ border: "1px solid black", justifyContent: "unset" }}>
            <Nav style={{ display: "flex", justifyContent: "unset", width: "100%", flexDirection: "row", justifyContent: "space-evenly", maxHeight: "50px" }} >
              <Nav.Link href="#action1" style={{ fontSize: "20px" }}>Home</Nav.Link>
              <Nav.Link href="#" style={{ fontSize: "20px" }}>Link</Nav.Link>
              <NavDropdown style={{ fontSize: "20px" }} title="Dropdown" >
                <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
          {/* </Navbar.Collapse> */}
        </Navbar>
      </>}



      {isSmallScreen && !isForPhone ? (
        <>
          <Navbar expand="lg" style={{ border: "10px solid black", display: "flex", justifyContent: "space-evenly" }}>
            <Container fluid style={{ border: "1px solid black", justifyContent: "space-between" }}>
              <Navbar.Brand href="#" style={{ fontSize: "40px", marginBottom: "10px" }}>Products</Navbar.Brand>
              <navbar style={{ display: "flex", width: "200px", justifyContent: "space-evenly", alignItems: "center" }}>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ height: "40px" }} />
                <h2 style={{ marginTop: "6px", border: "1px solid black", borderRadius: "20%", padding: "5px" }} onClick={Redirect}>{user ? "LogOut" : "Log in"}</h2>
              </navbar>
              <Navbar.Collapse id="navbarScroll" >
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '300px', width: "100%", display: "flex", justifyContent: "center" }} navbarScroll>
                  <Nav.Link href="#action1" style={{ fontSize: "20px" }}>Home</Nav.Link>
                  <Nav.Link href="#" style={{ fontSize: "20px" }}>Link</Nav.Link>
                  <NavDropdown style={{ fontSize: "20px", width: "100%" }} title="Dropdown" >
                    <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : iaLargeComputerScreen && !isForPhone && !isSmallScreen && !isSmallComputerScreen && (
        <>
          <Navbar expand="lg" style={{ border: "10px solid black", }}>
            <Container fluid style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
              <Navbar.Brand href="#" style={{ fontSize: "40px", marginLeft: "30px", marginBottom: "10px", flex: "1" }}>{props.cart.length}

                {['bottom'].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3" className="text-center">Cart</Popover.Header>
                        <Popover.Body>
                          <ListGroup>
                           { props.cart.map(arr =>{
                              return(
                                <ListGroup.Item> <img src={arr.image}></img> ${arr.price} </ListGroup.Item>
                              )
                           })
                            }
                          </ListGroup>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">Products</Button>
                  </OverlayTrigger>
                ))}


              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <Nav style={{ Height: '100px', width: "40%", display: "flex", justifyContent: "space-evenly" }} navbarScroll>
                  <Nav.Link href="#action1" style={{ fontSize: "20px" }}>Home</Nav.Link>
                  <NavDropdown style={{ fontSize: "20px" }} title="Dropdown" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" style={{ fontSize: "20px" }}>Link</Nav.Link>
                </Nav>
                <div style={{ display: "flex", alignItems: "center", minWidth: "40%", justifyContent: "center", gap: "40px", flex: "1" }}>
                  <Form className="d-flex" style={{ minWidth: "250px", flex: ".8" }}>
                    <Form.Control
                      //  style={{textAlign:"center"}}
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <h2 style={{ marginTop: "6px", borderRadius: "20%", padding: "5px", width: "120px", whiteSpace: 'nowrap' }} onClick={Redirect}>{user ? "LogOut" : "Log in"}</h2>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </>


  );
}

export default NavBar1;