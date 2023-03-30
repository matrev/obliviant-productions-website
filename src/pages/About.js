import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import '../styles/pages.css';

export default function About () {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' }); 
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 850px)' });

    return (
        <div className="page">
            <div className='about-header'>
                About
            </div>
            
            {(isTabletOrMobile || isTabletOrMobileDevice) && 
                <p className='home-text' style={{width: '90%'}}>
                    The Brother Sister Show is a podcast in which two siblings keep in touch by talking about movies.
                </p>
            }
            {(isDesktopOrLaptop && !isTabletOrMobile) && 
                <p className='home-text'>
                    The Brother Sister Show is a podcast in which two siblings keep in touch by talking about movies.
                </p>
            }
            <br></br>
            {(isDesktopOrLaptop && !isTabletOrMobile)
                && <Container className='home-text'>
                <Row>
                    <Col xs="6">
                        <div>
                            <img src={require("../assets/livia.jpg")} alt='livia'></img>
                            <p>
                                Hi! My name is Livia. When I’m not the better host of The Brother Sister Show, I’m a <a href='https://liviatrevino.me' rel='noopener noreferrer' target='_blank'>content specialist</a>. Don’t know what that is? Nobody does. In my free time, I like to <a href='https://avitalash.com' rel='noopener noreferrer' target='_blank'>design websites</a>, produce web series, write, and watch movies. I have a cat named Ari (after Ari Aster) and live in Austin with my boyfriend and producer of the pod, Sebastian.
                            </p>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div>
                            <img src={require('../assets/anthony.jpg')} alt='anthony'></img>
                            <p>
                                Hello, Im Anthony. Outside of this podcast, I'm a Junior in college studying Computer Science. I also stream on <a href='https://twitch.tv/matrev_' rel="noopener noreferrer" target='_blank'>Twitch</a> (T/R/F) and occasionally make <a href="https://www.youtube.com/channel/UCDEAk4BVjNOky_zN0yLxfyQ" rel='noopener noreferrer' target='_blank'>YouTube videos</a>. I live in College Station with my girlfriend and producer of the pod, Keila. That is all... good day.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>}
            {(isTabletOrMobile || isTabletOrMobileDevice) && 
                <div className='home-text'>
                    <div>
                        <img style={{width: '90%'}} src={require("../assets/livia.jpg")} alt='livia'></img>
                        <p style={{width: '75%'}}>
                            Hi! My name is Livia. When I’m not the better host of The Brother Sister Show, I’m a <a href='https://liviatrevino.me' rel='noopener noreferrer' target='_blank'>content specialist</a>. Don’t know what that is? Nobody does. In my free time, I like to <a href='https://avitalash.com' rel='noopener noreferrer' target='_blank'>design websites</a>, produce web series, write, and watch movies. I have a cat named Ari (after Ari Aster) and live in Austin with my boyfriend and producer of the pod, Sebastian.
                        </p>
                    </div>
                    <div>
                        <img style={{width: '90%'}} src={require('../assets/anthony.jpg')} alt='anthony'></img>
                        <p style={{width: '75%'}}>
                            Hello, Im Anthony. Outside of this podcast, I'm a Junior in college studying Computer Science. I also stream on <a href='https://twitch.tv/matrev_' rel="noopener noreferrer" target='_blank'>Twitch</a> (T/R/F) and occasionally make <a href="https://www.youtube.com/channel/UCDEAk4BVjNOky_zN0yLxfyQ" rel='noopener noreferrer' target='_blank'>YouTube videos</a>. I live in College Station with my girlfriend and producer of the pod, Keila. That is all... good day.
                        </p>
                    </div>
                </div>
            }
        </div>

    )
}
