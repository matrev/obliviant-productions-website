import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavbarBrand,
    NavbarToggler, Collapse } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import "../styles/TopNav.css";
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { navLinkDefault, navLinkDefaultTabletOrMobile } from '../utilities/constants';

export default function TopNav (){
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

    const [collapsed, setCollapsed] = useState(true);
    const [isAboutClicked, setIsAboutClicked] = useState(false);
    const [isVideoClicked, setIsVideoClicked] = useState(false);
    const [isNewsletterClicked, setIsNewsletterClicked] = useState(false);
    const [isContactClicked, setIsContactClicked] = useState(false);
    const [navLinkStyles, setNavLinkStyles] = useState(isTabletOrMobile ? navLinkDefaultTabletOrMobile : navLinkDefault)
    const pageLocation = useLocation()

    useEffect(() => {
        setIsAboutClicked(false);
        setIsContactClicked(false);
        setIsNewsletterClicked(false);
        setIsVideoClicked(false);
        switch (pageLocation.pathname) {
            case "/about":
                setIsAboutClicked(true);
                if(isTabletOrMobile) setCollapsed(true);
                break;
            case "/videos":
                setIsVideoClicked(true);
                if(isTabletOrMobile) setCollapsed(true);
                break;
            case "/newsletter":
                setIsNewsletterClicked(true);
                if(isTabletOrMobile) setCollapsed(true);
                break;
            case "/contact":
                setIsContactClicked(true);
                if(isTabletOrMobile) setCollapsed(true);
                break;
            default:
                break;
        }
    }, [pageLocation, isTabletOrMobile])

    useEffect(() => {
        setNavLinkStyles(isTabletOrMobile ? navLinkDefaultTabletOrMobile : navLinkDefault)
    }, [isTabletOrMobile])

	const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar className='header-style'>
                <NavbarBrand href="/" className="mr-auto">
                    <img src={require("../assets/obliviantproductions_logo.png")} style={{ width: isTabletOrMobile ? 100 : 200 }} alt="Navigation bar brand logo"/>
                </NavbarBrand>
                {isTabletOrMobile && <NavbarToggler onClick={toggleNavbar} /> }
                <Collapse isOpen={isTabletOrMobile ? !collapsed : true} navbar={isTabletOrMobile}>
                    <Nav className="ml-auto" navbar={isTabletOrMobile}>
                        <Link style={!isAboutClicked ? navLinkStyles : {...navLinkStyles, color: "var(--text-blue)"}} to="/about">About</Link>
                        <Link style={!isVideoClicked ? navLinkStyles : {...navLinkStyles, color: "var(--text-red)"}} to="/videos">Videos</Link>
                        <Link style={!isNewsletterClicked ? navLinkStyles : {...navLinkStyles, color: "var(--text-yellow)"}} to="/newsletter">Newsletter</Link>
                        <Link style={!isContactClicked ? navLinkStyles : {...navLinkStyles, color: "var(--text-blue)"}} to='/contact'>Contact</Link>
                    </Nav>
                </Collapse>
            </Navbar>
            <Outlet />
        </>
    )
}
