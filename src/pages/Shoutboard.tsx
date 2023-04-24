import React from 'react'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap'

export const Shoutboard = () => {
  return (
    <>
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Row className="px-2 py-2">

            <Col xs lg="1" className="d-flex justify-content-end">
              <img
                src="public/default-profile.png"
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="Apollo Logo"
              />
            </Col>

            <Col>
              <Row>
                <Stack direction="horizontal">
                  <p style={{fontSize: "12px"}} className="fw-bold">UserName</p>
                  <p style={{fontSize: "8px"}} className="ms-2">12:05PM</p>
                </Stack>
              </Row>
              <Row style={{fontSize: "10px"}}>
                <p>Message will appear in this area. Character limit to be determined.</p>
                <p style={{fontSize: "8px"}} className="fw-bold">Thumbs Up Icon</p>
              </Row>
            </Col>
            <hr></hr>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}
