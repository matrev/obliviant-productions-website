import React, { useState, useEffect } from 'react';
import { Text } from 'rebass';
import Parser from 'rss-parser';
import EpisodeCollection from '../components/EpisodeCollection';

export default function Home () {
    const [latestEpisodes, setLatestEpisodes] = useState([]);
    async function getEpisodes() {
        let parser = new Parser();
        const feed = await parser.parseURL('https://feeds.simplecast.com/kASbzC1o');
        setLatestEpisodes(feed.items);
        console.log("feed: ", feed.items);
    }

    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <div>
            <Text>
            Howdy! We're the Brother Sister Show, a podcast where two siblings attempt to keep in touch by talking about movies.
            </Text>
            <Text fontWeight='bold' color='primary'>Latest Episodes</Text>
            <br/>
            <iframe height="200px" width="75%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/3f0d92ea-3878-437f-9077-6edcbc6e6002?dark=true"></iframe>
            {/* <EpisodeCollection alignItems='center' episodes={latestEpisodes.slice(0,1)} /> */}
        </div>        
    )
}
