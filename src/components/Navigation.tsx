import React from 'react'
import { Col, Container, Nav, Navbar } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
            <Col xs lg="2">
                <Navbar.Brand href="#home">
                    <img
                    src="public/rocket.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Apollo Logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand className="fw-bold" href="#home">Apollo</Navbar.Brand>
            </Col> 
            <Col md="auto">   
                <Nav style={{fontSize: "11px"}} className="me-auto fw-bold mt-1">
                    <Nav.Link href="#home">Create Task</Nav.Link>
                    <Nav.Link href="#features" className="ms-2">Shout Board</Nav.Link>
                </Nav>
            </Col>
            <Col xs lg="2">
                <Nav>
                <Nav.Link style={{fontSize: "10px"}} className="fw-bold mt-1" href="#pricing">Hello, Mitch!</Nav.Link>
                    <Navbar.Brand href="#home">
                        <img
                        src="public/default-profile.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Apollo Logo"
                        />
                    </Navbar.Brand>
                </Nav>
            </Col>
        </Container>
    </Navbar>
  )
}

