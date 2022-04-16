import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar className="shadow-sm" bg="light" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">Click To Splash</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                          
                        </Nav>
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">

                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">
                                <Button className="btn-sm rounded-pill bg-main">Register</Button>
                            </NavLink>
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;