import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
import EpisodeCollection from '../components/EpisodeCollection';
import { Label, Input } from '@rebass/forms';
import { Box, Flex } from 'rebass';

export default function Episodes () {

    const [latestEpisodes, setLatestEpisodes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    async function getEpisodes() {
        let parser = new Parser();
        const feed = await parser.parseURL('https://feeds.simplecast.com/kASbzC1o');
        setLatestEpisodes(feed.items.filter((episode) => {
            console.log(searchInput);
            return episode.title.toLowerCase().includes(searchInput.toLowerCase());
        }));
        console.log("feed: ", feed.items);
    }

    useEffect(() => {
        getEpisodes();
    }, [searchInput]);
    // console.log(searchInput);
    return (
        <div>
            <center>
            <Box
                sx={{ 
                margin: [ 3, 10, 25],
                width: [ 200 , null, 500]
            }}>
                <Label htmlFor='search'>Search For an Episode</Label>
                <Input
                    id='search'
                    name='search'
                    value={searchInput}
                    onChange={(e) => {setSearchInput(e.target.value)}}
                ></Input>
            </Box>
            </center>
            <EpisodeCollection episodes={latestEpisodes} />
        </div>
    )
}
