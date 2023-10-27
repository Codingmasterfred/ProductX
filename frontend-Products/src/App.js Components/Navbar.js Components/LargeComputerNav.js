import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';


function LargeComputerNav(props){

  function Redirect() {
    if (props.user) {
      props.logout()
    } else {
      props.loginWithRedirect()
    }
  }

  
  
    return(
        <Navbar expand="lg" style={{  }}>
        <Container fluid style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
          <Navbar.Brand href="#" style={{ fontSize: "40px", marginLeft: "30px", marginBottom: "10px", flex: "1" }}>{props.cart.length}

            {['bottom'].map((placement) => (
              <OverlayTrigger
                rootClose="true"
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`} style={{ minWidth: "100px" }}>
                    <Popover.Header as="h3" className="text-center">Cart</Popover.Header>
                    <Popover.Body>
                      <ListGroup>
                        {props.cart.map(arr => {
                          return (
                            <ListGroup.Item key={arr._id} style={{ display: "flex" }} > <img width="30%" src={arr.Image}></img>
                              <div style={{ width: "60%", marginLeft: "10px" }}>
                                {arr.Title.split("").splice(0, 24)}
                                <br></br>
                                ${arr.Price}

                              </div>
                              <svg onClick={() => props.filterCart(arr)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                              </svg>
                            </ListGroup.Item>
                          )
                        })
                        }
                      </ListGroup>
                      <ListGroup>
                        <Button style={{ margin: "5px auto" }}>Checkout</Button>
                      </ListGroup>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary" style={{backgroundColor:"aqua",color:"black"}}>Products</Button>
              </OverlayTrigger>
            ))}


          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Nav style={{ Height: '100px', width: "40%", display: "flex", justifyContent: "space-evenly" }} navbarScroll>
              <Nav.Link href="/" style={{ fontSize: "20px" }}>Home</Nav.Link>
              <NavDropdown style={{ fontSize: "20px" }} title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Electronics" onClick={()=>props.FilterClickedCategory("electronics")} >Electronics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Books" onClick={()=>props.FilterClickedCategory("books")}>Books</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Clothes" onClick={()=>props.FilterClickedCategory("clothes")}>Clothes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Games" onClick={()=>props.FilterClickedCategory("games")}>Games</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="https://www.linkedin.com/in/fredrick-gentry-43680725b/" style={{ fontSize: "20px" }}>Contact Me</Nav.Link>
            </Nav>
            <div style={{ display: "flex", alignItems: "center", minWidth: "40%", justifyContent: "center", gap: "40px", flex: "1" }}>
              <Form className="d-flex" style={{ minWidth: "250px", flex: ".8", }} onSubmit={props.SearchFunction} >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={props.SearchItem}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    console.log(newValue, "hereee");
                    props.setSearchItem(newValue);

                  }}
                />

                <Button id="SearchBars"  onClick={props.SearchFunction}  >Search</Button>
              </Form>
              <h2 className='SignIn' style={{ marginTop: "6px", borderRadius: "20%", padding: "5px", width: "120px", whiteSpace: 'nowrap' }} onClick={Redirect}>{props.user ? "LogOut" : "Log in"}</h2>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default LargeComputerNav