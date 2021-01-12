import React, { useState, useEffect } from 'react';
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
            Howdy! We're the Brother Sister Show, a podcast where two siblings attempt to keep in touch by talking about movies.
            <br/>
            <iframe height="200px" width="75%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/417cffe7-6511-4d45-83a2-f3ac7d14208c?dark=true"></iframe>
            {/* <EpisodeCollection alignItems='center' episodes={latestEpisodes.slice(0,1)} /> */}
        </div>        
    )
}
