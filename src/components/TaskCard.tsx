import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export const TaskCard = () => {
  return (
    <Container className="mt-4">
        <Card>
            <Card.Header style={{fontSize: "9px", height: "30px"}}>Task ID: 432564363</Card.Header>
            <Card.Body>
                <Row style={{fontSize: "9px"}} className="fw-bold">
                    <Col xs lg="5">Name</Col>
                    <Col xs lg="3">Status</Col>
                    <Col xs lg="2">Percentage</Col>
                    <Col xs lg="2">Due</Col>
                </Row>
                <Row style={{fontSize: "12px"}}>
                    <Col xs lg="5">Administer employee benefits</Col>
                    <Col xs lg="3">In Progress</Col>
                    <Col xs lg="2">75%</Col>
                    <Col xs lg="2">June 14, 2023</Col>
                </Row>
                <Row style={{height: "55px"}}>
                    <hr className="mt-2"></hr>
                    <Col xs lg="10" className="d-flex">
                        <img
                            src="public/default-profile.png"
                            width="35"
                            height="35"
                            className="d-inline-block align-top"
                            alt="Apollo Logo"
                            />
                        <p style={{fontSize: "10px"}} className="mt-2 ms-2">Created by: UserName</p>
                    </Col>
                    <Col xs lg="2" className="d-flex mt-1">
                        <Button style={{fontSize: "10px", maxHeight: "30px"}} variant="primary" size="sm" className="px-3">View</Button>
                        <Button style={{fontSize: "10px", maxHeight: "30px"}} variant="primary" size="sm" className="px-3 ms-2">Edit</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
  )
}
