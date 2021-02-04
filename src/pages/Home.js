import React, { useState, useEffect} from 'react';
import { Stack} from '@fluentui/react';
import { getEpisodesFromSimplecast } from '../utilities/Simplecast';

export default function Home () {

	const [latestEpisode, setLatestEpisode] = useState();

	useEffect(() => {
        async function getEpisodes() {
            const simplecastJSON = await getEpisodesFromSimplecast();
			const simplecastOBJ = JSON.parse(simplecastJSON);
			setLatestEpisode(simplecastOBJ.collection[0].id);
        }
        getEpisodes();
	}, []);

    return (
            <Stack vertical horizontalAlign='space-between' tokens={{childrenGap: 20}}>
                <Stack className='home-header' horizontalAlign='center' tokens={{ childrenGap: 20 }} >
                    <div>
						Latest Episode
					</div>
                    <iframe title='latest-episode' height="200px" width="50%" frameBorder="no" scrolling="no" seamless src={`https://player.simplecast.com/${latestEpisode}?dark=true`}></iframe>
                </Stack>
                <Stack className='home-header' horizontalAlign='center' tokens={{ childrenGap: 20 }} >
                    <div>
						Follow Us
					</div>
                    <Stack horizontal verticalAlign='center' horizontalAlign='space-between' tokens={{childrenGap: 30}}>
							<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' rel="noopener noreferrer" style={{paddingRight: '5px'}}>
								<img src={require("../assets/spotifyIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://twitter.com/brosisshow' target='_blank' rel="noopener noreferrer">
								<img src={require("../assets/twitterIcon.png")} style={{width: 64}} alt="Twitter Badge" />
							</a>

							<a href='https://instagram.com/brothersistershow' target='_blank' rel="noopener noreferrer">
								<img src={require("../assets/instaIcon.png")} style={{width: 64}} alt="Instagram Badge" />
							</a>

							<a href='https://discord.gg/QY2BMPeE' target='_blank' rel="noopener noreferrer" style={{paddingLeft: 5, paddingTop: 5}}>
								<img src={require("../assets/discordIcon.png")} style={{width: 58, height: 64}} alt="Discord Badge" />
							</a>
					</Stack>
                </Stack>
            </Stack>    
    )
}
