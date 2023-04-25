import React from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'

export const Login = () => {
  return (
    <>
    <Container>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
        >
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        
        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
    </Container>
    </>
  )
}
