import React from "react"
import logo from "./images/logo.svg"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Header() {
    return (
        <header>
            <Navbar className="navbar-expand-lg navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt=""></img>Azgaar
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#character">Character</Nav.Link>
                        <Nav.Link href="#items">Combat</Nav.Link>
                        <Nav.Link href="#items">Skills</Nav.Link>
                        <Nav.Link href="#items">Items</Nav.Link>
                        <Nav.Link href="#map">Map</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
