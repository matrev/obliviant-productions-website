import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavbarBrand, NavLink,
    NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import "../styles/TopNav.css";

export function TopNav (){
    const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });
    
    useEffect(() => {
        if(!isTabletOrMobile && collapsed === false) {
            setCollapsed(true);
        }
    
    }, [isTabletOrMobile, collapsed])
    
    return (
        <Navbar dark>
            <NavbarBrand href="/" className="mr-auto">
                <img src={require("../assets/logo.PNG")} style={{width: 100}} alt="Navigation bar brand logo"/>
            </NavbarBrand>
            {isTabletOrMobile && <NavbarToggler onClick={toggleNavbar} className="mr-2" /> }
            <Collapse isOpen={collapsed} navbar={isTabletOrMobile}>
                <Nav className="ml-auto" navbar={isTabletOrMobile}>
                    <NavItem>
                        <NavLink className='nav-link' href='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' href='/videos'>Videos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' href='/contact'>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>				
        </Navbar>
    )
}
