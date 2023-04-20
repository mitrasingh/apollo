import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'


export const CreateTask = () => {
  return (
    <Container className="mt-4">
    <Form>

      <Form.Group className="mb-3" controlId="taskName">
        <Form.Label style={{fontSize: "10px"}} className="fw-bold">Task name</Form.Label>
        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="Enter the name of task" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{fontSize: "10px"}} className="fw-bold">Description of task</Form.Label>
        <Form.Control style={{fontSize: "10px"}} as="textarea" rows={3} placeholder="Give a short description of the task you are requesting."/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="progress">
        <Form.Label style={{fontSize: "10px"}} className="fw-bold">What percent of the task is complete?</Form.Label>
        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="i.e. 25%" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dueDate">
        <Form.Label style={{fontSize: "10px"}} className="fw-bold">Due date</Form.Label>
        <Form.Control style={{fontSize: "10px"}} type="text" placeholder="mm/dd/yyyy" />
      </Form.Group>

      <Button style={{fontSize: "10px", maxHeight: "30px"}} variant="primary" size="sm" type="submit">
        Cancel
      </Button>

      <Button style={{fontSize: "10px", maxHeight: "30px"}} className="ms-2" variant="primary" size="sm" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}
