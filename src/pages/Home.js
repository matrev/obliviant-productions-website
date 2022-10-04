import React from 'react';
import { Stack} from '@fluentui/react';

export default function Home () {


    return (
            <Stack vertical horizontalAlign='space-between' tokens={{childrenGap: 20}}>
                <Stack className='home-header' horizontalAlign='center' tokens={{ childrenGap: 20 }} >
                    <div>
						Follow Us
					</div>
                    <Stack horizontal verticalAlign='center' horizontalAlign='space-between' tokens={{childrenGap: 30}}>
						<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' rel="noopener noreferrer" style={{paddingRight: '5px'}}>
							<img className="home-spotify-icon" src={require("../assets/spotifyIcon.png")} alt="Spotify Badge" />
						</a>

						<a href='https://twitter.com/brosisshow' target='_blank' rel="noopener noreferrer">
							<img className="home-twitter-icon" src={require("../assets/twitterIcon.png")} alt="Twitter Badge" />
						</a>

						<a href='https://instagram.com/brothersistershow' target='_blank' rel="noopener noreferrer">
							<img className="home-instagram-icon" src={require("../assets/instaIcon.png")} alt="Instagram Badge" />
						</a>

						<a href='https://discord.gg/QY2BMPeE' target='_blank' rel="noopener noreferrer" style={{paddingLeft: 5, paddingTop: 5}}>
							<img className="home-discord-icon" src={require("../assets/discordIcon.png")} alt="Discord Badge" />
						</a>

						<a href='https://www.youtube.com/channel/UCZ67yGlb_0Dfl3-KvuQjXKQ' target='_blank' rel="noopener noreferrer" style={{paddingLeft: 5, paddingBottom: 5}}>
							<img className="home-youtube-icon" src={require("../assets/yt.png")} alt="Youtube Badge" />
						</a>
					</Stack>
                </Stack>
            </Stack>    
    )
}
