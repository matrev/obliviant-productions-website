import React, { useState } from 'react';
import { Navbar, Nav, NavbarBrand, NavLink,
    NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import "../styles/TopNav.css";

export function TopNav (){
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

    const [collapsed, setCollapsed] = useState(false);
	const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <Navbar className='header-style'>
            <NavbarBrand href="/" className="mr-auto">
                <img src={require("../assets/logo.PNG")} style={{width: 100}} alt="Navigation bar brand logo"/>
            </NavbarBrand>
            {isTabletOrMobile && <NavbarToggler className="hamburger" onClick={toggleNavbar} /> }
            <Collapse isOpen={isTabletOrMobile ? collapsed : true} navbar={isTabletOrMobile}>
                <Nav className="ml-auto" navbar={isTabletOrMobile}>
                    <NavItem className='nav-link'>
                        <NavLink className='nav-link' href='/'>Home</NavLink>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <NavLink href='/videos'>Videos</NavLink>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <NavLink href='/contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>				
        </Navbar>
    )
}
