import React from 'react'
import { Button, Form, Modal, Stack } from 'react-bootstrap'

type EditTaskModalProps = {
    showEditModal: boolean;
    handleEditModalClose: () => void;
}

export const EditTaskModal = ({showEditModal, handleEditModalClose}: EditTaskModalProps) => {
  return (
        <>
        <Modal show={showEditModal} onHide={handleEditModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Project Name</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{fontSize:"11px"}}>
                <p className="fw-bold" style={{margin: "0px"}}>Current Task Name</p>
                <Form.Group className="mb-3" controlId="progress">
                    <Form.Control style={{fontSize: "10px"}} type="text" value="Project Name" />
                </Form.Group>

                <p className="fw-bold" style={{margin: "0px"}}>Description of Task</p>
                <Form.Group className="mb-3" controlId="progress">
                    <Form.Control 
                        style={{fontSize: "10px"}} 
                        type="text" as="textarea" 
                        rows={3} 
                        value="Here will be the description of the individual task. Will put a limit on how many characters will be in this area. Maybe will implement a scroll feature if it's too long." 
                    />
                </Form.Group>
               
                <p className="fw-bold" style={{margin: "0px"}}>Percent Completed</p>
                <Form.Group className="mb-3" controlId="progress">
                    <Form.Control style={{fontSize: "10px"}} type="text" value="75%" />
                </Form.Group>

                <p className="fw-bold" style={{margin: "0px"}}>Due Date</p>
                <Form.Group className="mb-3" controlId="progress">
                    <Form.Control style={{fontSize: "10px"}} type="text" value="06/14/2023" />
                </Form.Group>

                <Stack direction="horizontal">
                    <img
                        src="public/default-profile.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Apollo Logo"
                    />
                    <p style={{fontSize: "10px"}} className="mt-3 ms-2">Created by: UserName</p>
                </Stack>

            </Modal.Body>

            <Modal.Footer>
                <Button 
                    style={{fontSize: "10px", maxHeight: "30px"}} 
                    className="ms-2" 
                    variant="secondary" 
                    size="sm" 
                    onClick={handleEditModalClose}>
                    Cancel
                </Button>

                <Button 
                    style={{fontSize: "10px", maxHeight: "30px"}} 
                    className="ms-2" 
                    variant="primary" 
                    size="sm" 
                    type="submit">
                     Submit
                </Button>
            </Modal.Footer>
        </Modal>     
        </>
  )
}
