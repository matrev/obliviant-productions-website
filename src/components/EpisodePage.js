import React, { useState, useEffect } from 'react';
import { Stack } from '@fluentui/react';

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
                    <Stack className='episodes-header' horizontalAlign='center' style={{ textAlign: 'center' }}>
                        {episodes[0].title}
                    </Stack>
                    <Stack className='contact-text' horizontalAlign='center' tokens={{ childrenGap: 50}}>
                        <p style={{width: '75%', textAlign: 'center'}}>
                            {episodes[0].description}
                        </p>
                        <audio controls src={episodes[0].enclosure_url} style={{width: '75%'}}/>
                        <br/>
                    </Stack>
                    <Stack className='home-header' horizontalAlign='center'>
                    Tweet about this episode
                    <Stack horizontal verticalAlign='center' horizontalAlign='center'>
                        <a href={`https://twitter.com/intent/tweet?text=Have%20you%20listened%20to%20The%20Brother%20Sister%20Show%20yet%3F%20Check%20it%20out%20here%3A%20https%3A%2F%2Fthe-brother-sister-show.simplecast.com%2Fepisodes%2F${episodes[0].slug}`} 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <img src={require("../assets/twitterIcon.png")} style={{width: 64}} alt="Twitter Badge" />
                        </a>
                    </Stack>
                    <br/><br/>
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