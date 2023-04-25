import React from 'react'
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap'

export const Filter = () => {
  return (
    <Container>
        <Dropdown as={ButtonGroup}>
        <Button style={{fontSize: "9px", maxHeight: "20px"}} className="d-flex align-items-center" variant="dark">Filter</Button>

        <Dropdown.Toggle style={{maxHeight: "20px"}} className="d-flex align-items-center" split variant="dark" id="dropdown-split-basic" />

        <Dropdown.Menu style={{fontSize: "10px"}}>
            <Dropdown.Item href="#/action-1">by Due Date</Dropdown.Item>
            <Dropdown.Item href="#/action-2">by Percentage</Dropdown.Item>
            <Dropdown.Item href="#/action-3">by Status</Dropdown.Item>
            <Dropdown.Item href="#/action-3">by Name</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>   
    </Container>
  )
}
