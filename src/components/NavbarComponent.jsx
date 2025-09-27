import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap";

function NavbarComponent(){
    return(
        <Navbar expand="lg" sticky="top"
        style={{
            background: "linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%)",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
        }}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4"  style={{ color: "#4a4a4a" }}>Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" 
                        style={{
                            color: "#4a4a4a",
                            fontWeight: "500",
                            marginRight: "1rem"
                        }}
                        >Home</Nav.Link>
                        <Nav.Link href="#posts" style={{ color: "#4a4a4a", fontWeight: "500" }}>Posts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;