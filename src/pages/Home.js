import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

export default function Home () {
    const [latestEpisodes, setLatestEpisodes] = useState({});
    async function getEpisodes() {
        let parser = new Parser();
        const feed = await parser.parseURL('https://feeds.simplecast.com/kASbzC1o');
        setLatestEpisodes({ feed });
        console.log("feed: ", feed);
    }

    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <div>
            Home
        </div>
    )
}
