import React, { useState, useEffect } from 'react';
import { Stack, StackItem } from '@fluentui/react';

import { getEpisodesFromSimplecast } from '../utilities/Simplecast';
import { Spinner } from 'reactstrap';

export default function EpisodePage (props) {
    
    const [episodes, setEpisodes] = useState([]);

	async function getEpisodes() {
        const simplecastJSON = await getEpisodesFromSimplecast();
        const simplecastOBJ = JSON.parse(simplecastJSON);
        setEpisodes(simplecastOBJ.collection.filter((episode) => {
            return episode.slug.includes(window.location.pathname.substr(18,100));
        }));
	}
	
	//get the episodes from simplecast 
    useEffect(() => {
        getEpisodes();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {episodes[0] ? 
                <div>
                    <StackItem className='episodes-header' horizontalAlign='start'>
                            {episodes[0].title}
                    </StackItem>
                    <Stack className='contact-text' horizontalAlign='center' tokens={{ childrenGap: 50}}>
                        <p style={{width: '75%'}}>
                            {episodes[0].description}
                        </p>
                        <audio controls src={episodes.enclosure_url} />
                        <br/>
                    </Stack>
                    <Stack className='home-header' horizontalAlign='center'>
                    Follow Us
                    <Stack horizontal verticalAlign='center' horizontalAlign='space-between' tokens={{childrenGap: 10}}>
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
                </div> 
                : 
                <Stack  style={{  height: '10em'}} horizontalAlign='center' verticalAlign='center'>
                    <Spinner color='light'/>
                </Stack>
            }
        </div>
    )
}