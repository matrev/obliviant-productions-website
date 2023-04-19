import React, { useState } from 'react';
import { Navbar, Nav, NavbarBrand,
    NavbarToggler, Collapse } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import "../styles/TopNav.css";
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { navLinkDefault } from '../utilities/constants';

export default function TopNav (){
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

    const [collapsed, setCollapsed] = useState(false);
    const [isAboutClicked, setIsAboutClicked] = useState(false);
    const [isVideoClicked, setIsVideoClicked] = useState(false);
    const [isNewsletterClicked, setIsNewsletterClicked] = useState(false);
    const [isContactClicked, setIsContactClicked] = useState(false);
    
    const pageLocation = useLocation()

    React.useEffect(() => {
        setIsAboutClicked(false);
        setIsContactClicked(false);
        setIsNewsletterClicked(false);
        setIsVideoClicked(false);
        switch (pageLocation.pathname) {
            case "/about":
                setIsAboutClicked(true);
                break;
            case "/videos":
                setIsVideoClicked(true);
                break;
            case "/newsletter":
                setIsNewsletterClicked(true);
                break;
            case "/contact":
                setIsContactClicked(true);
                break;
            default:
                break;
        }
    }, [pageLocation])

	const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <>
            <Navbar className='header-style'>
                <NavbarBrand href="/" className="mr-auto">
                    <img src={require("../assets/logo.PNG")} style={{width: 100}} alt="Navigation bar brand logo"/>
                </NavbarBrand>
                {isTabletOrMobile && <NavbarToggler className="hamburger" onClick={toggleNavbar} /> }
                <Collapse isOpen={isTabletOrMobile ? collapsed : true} navbar={isTabletOrMobile}>
                    <Nav className="ml-auto" navbar={isTabletOrMobile}>
                        <Link style={!isAboutClicked ? navLinkDefault : {...navLinkDefault, color: "var(--text-blue)"}} to="/about">About</Link>
                        <Link style={!isVideoClicked ? navLinkDefault : {...navLinkDefault, color: "var(--text-red)"}} to="/videos">Videos</Link>
                        <Link style={!isNewsletterClicked ? navLinkDefault : {...navLinkDefault, color: "var(--text-yellow)"}} to="/newsletter">Newsletter</Link>
                        <Link style={!isContactClicked ? navLinkDefault : {...navLinkDefault, color: "var(--text-blue)"}} to='/contact'>Contact</Link>
                    </Nav>
                </Collapse>
            </Navbar>
            <Outlet />
        </>
    )
}
