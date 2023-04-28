import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

export const Login = () => {

    const [signUp, setSignUp] = useState(false)

    const handleUserSignUp = () => {
        setSignUp(true)
    }

    return (

        signUp ? (
            <>
            <Container style={{fontSize: "10px", maxWidth: "400px"}} className="mt-4">
                <Card className="px-4 py-4">
                    <h4 className="fw-bold d-flex justify-content-center">Sign Up</h4>
                    <p className="d-flex justify-content-center">Already registered?&nbsp; 
                        <span className="link-primary fw-bold" style={{cursor: "pointer"}} onClick={() => setSignUp(false)}>Sign In</span> 
                    </p>

                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>First Name</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter first name" />
                    </Form.Group>

                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Last Name</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter last name" />
                    </Form.Group>

                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Company Title</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter your title" />
                    </Form.Group>

                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Email Address</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter email" />
                    </Form.Group>
    
                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Password</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter password" />
                    </Form.Group>

                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Re-enter Password</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Re-enter password" />
                    </Form.Group>
    
                    <Button 
                        style={{fontSize: "10px", maxHeight: "30px"}} 
                        variant="primary"  
                        size="sm" 
                        type="submit">
                        Create Account
                    </Button>

                    <Button 
                        style={{fontSize: "10px", maxHeight: "30px"}}
                        className="mt-2" 
                        variant="secondary"  
                        size="sm" 
                        type="submit"
                        onClick={() => setSignUp(false)}>
                        Cancel
                    </Button>
    
                    <p className="d-flex justify-content-center link-primary mt-3">Forgot password?&nbsp;</p>
                </Card>
            </Container>
            </>

        ) : (

            <>
            <Container style={{fontSize: "10px", maxWidth: "400px"}} className="mt-4">
                <Card className="px-4 py-4">
                    <h4 className="fw-bold d-flex justify-content-center">Sign In</h4>
                    <p className="d-flex justify-content-center">Not registered?&nbsp; 
                        <span className="link-primary fw-bold" style={{cursor: "pointer"}} onClick={handleUserSignUp}>Sign Up</span> 
                    </p>
                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Email Address</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter email" />
                    </Form.Group>

                    <p className="fw-bold mb-1" style={{fontSize: "10px", margin: "0px"}}>Password</p>
                    <Form.Group className="mb-3" controlId="progress">
                        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter password" />
                    </Form.Group>

                    <Button 
                        style={{fontSize: "10px", maxHeight: "30px"}} 
                        variant="primary"  
                        size="sm" 
                        type="submit">
                        Login
                    </Button>

                    <p className="d-flex justify-content-center link-primary mt-3">Forgot password?&nbsp;</p>
                </Card>
            </Container>
            </>
        )
    )
}

