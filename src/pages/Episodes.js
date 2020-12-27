import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
import EpisodeCollection from '../components/EpisodeCollection';

export default function Episodes () {

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
            <EpisodeCollection episodes={latestEpisodes} />
        </div>
    )
}
