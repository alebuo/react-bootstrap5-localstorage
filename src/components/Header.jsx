import React from "react";
import {Navbar, Nav, NavDropdown, Button, Container} from 'react-bootstrap';
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Header = () => {
    function cambioTema() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);
    }

    return (
        <header className="sticky-top">
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="/index.html">Medical Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbars1"/>
                    <Navbar.Collapse id="navbars1">
                        <Nav className="me-auto mb-2 mb-md-0">
                            <Nav.Link href="/index.html" active>Home</Nav.Link>
                            <Nav.Link href="/#registerform">
                                <i className="bi bi-pencil-square"></i> Contact Us
                            </Nav.Link>
                            <NavDropdown title="Social Networks" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <FaTwitter/> Twitter
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://instagram.com/" target="_blank" rel="noreferrer">
                                    <FaInstagram/> Instagram
                                </NavDropdown.Item>
                                <NavDropdown.Item href="https://facebook.com/" target="_blank" rel="noreferrer">
                                    <FaFacebookF/> Facebook
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Button onClick={cambioTema} variant="dark" size="sm"
                                        className="btn-secondary px-1 me-sm-3">
                                    Dark/Light
                                </Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default Header;