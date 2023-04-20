import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'


export const CreateTask = () => {
  return (
    <Container className="mt-4">
    <Form>
      <Form.Group className="mb-3" controlId="taskName">
        <Form.Label>Task name</Form.Label>
        <Form.Control type="text" placeholder="Enter the name of task" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description of task</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Give a short description of the task you are requesting."/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="progress">
        <Form.Label>What percent of the task is complete?</Form.Label>
        <Form.Control type="text" placeholder="i.e. 25%" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dueDate">
        <Form.Label>Due date</Form.Label>
        <Form.Control type="text" placeholder="mm/dd/yyyy" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}
