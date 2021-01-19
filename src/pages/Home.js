import React from 'react';
import { Stack} from '@fluentui/react';

export default function Home () {

    return (
            <Stack vertical horizontalAlign='space-between' tokens={{childrenGap: 10}}>
                <Stack className='home-header' horizontalAlign='center'>
                    Latest Episode
                    <iframe title='latest-episode' height="200px" width="75%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/417cffe7-6511-4d45-83a2-f3ac7d14208c?dark=true"></iframe>
                </Stack>
                <Stack className='home-header' horizontalAlign='center'>
                    Follow Us
                    <Stack horizontal verticalAlign='center' horizontalAlign='space-evenly' tokens={{childrenGap: 10}}>
							<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' style={{paddingRight: '5px'}}>
								<img src={require("../assets/spotifyIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://twitter.com/brosisshow' target='_blank'>
								<img src={require("../assets/twitterIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://instagram.com/brothersistershow' target='_blank'>
								<img src={require("../assets/instaIcon.png")} style={{width: 80}} alt="Spotify Badge" />
							</a>

							<a href='https://discord.gg/QY2BMPeE' target='_blank'>
								<img src={require("../assets/discordIcon")} style={{width: 80}} alt="Spotify Badge" />
							</a>
						</Stack>
                </Stack>
            </Stack>    
    )
}
