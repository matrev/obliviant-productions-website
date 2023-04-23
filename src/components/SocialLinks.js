import React from 'react';
import '../styles/components.css';

export default function SocialLinks() {
  return (
    <div className="social-links">
        <h3 className="social-links-header">Follow Us</h3>
        <div className="social-links-icons">
            <a href='https://twitter.com/obliviantprod' target='_blank' rel="noopener noreferrer">
                <img className="home-twitter-icon" src={require("../assets/twitterIcon.png")} alt="Twitter Badge" />
            </a>

            <a href='https://instagram.com/obliviantproductions' target='_blank' rel="noopener noreferrer">
                <img className="home-instagram-icon" src={require("../assets/instaIcon.png")} alt="Instagram Badge" />
            </a>

            <a href='https://www.youtube.com/channel/UCHLxXaCaURI9P0b-jpfv3yg' target='_blank' rel="noopener noreferrer" style={{paddingLeft: 5, paddingBottom: 5}}>
                <img className="home-youtube-icon" src={require("../assets/yt.png")} alt="Youtube Badge" />
            </a>
        </div>
    </div>
  )
}
