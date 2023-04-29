import React from 'react'
import { Col, Container, Dropdown, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" className="px-5">
        <Container fluid>
            <Col xs lg="2">
                <Navbar.Brand href="/">
                    <img
                    src="public/rocket.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="apollo logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="fw-bold" href="/">Apollo</Navbar.Brand>
            </Col> 
            
            <Col md="auto">   
                <Nav style={{fontSize: "11px"}} className="me-auto fw-bold mt-1">
                    <Nav.Link href="/" className="me-2">Home</Nav.Link>
                    <Nav.Link href="/createtask">Create Task</Nav.Link>
                    <Nav.Link href="/shoutboard" className="ms-2">Shout Board</Nav.Link>
                </Nav>
            </Col>
            
            <Col xs lg="2" className="d-flex justify-content-end">  
                <Nav>
                <Nav.Link style={{fontSize: "8px"}} className="fw-bold ">Hello, <br></br>Mitch!</Nav.Link>
                    <Navbar.Brand>
                        <img
                        src="public/default-profile.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="user image"
                        />
                    </Navbar.Brand>
                    <NavDropdown drop="down-centered" title="" menuVariant="light">
                            <NavDropdown.Item style={{fontSize: "9px"}} href="">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: "9px"}} href="">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>
        </Container>
    </Navbar>
  )
}

