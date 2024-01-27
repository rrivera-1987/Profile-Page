import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(!isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navbarStyle = scrolled ? { backgroundColor: 'orange' } : {};

    return (
        <Navbar
            className={`py-3 ${scrolled ? 'navbar-scrolled' : 'navbar-custom'}`}
            color="light"
            light expand="lg"
            fixed="top"
            style={navbarStyle}
            id="mainNav">
            <div className="container px-4 px-lg-5 d-flex justify-content-between align-items-center">
                <NavbarBrand tag={Link} to='/' style={{ fontFamiy: 'sans-serif' }}>
                    Ramon A. Rivera
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="ms-auto">
                        <NavItem>
                            <NavLink tag={Link} to='/about'>About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/projects'>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/contact'>Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

export default Header;