import React, { useState, useEffect } from 'react';
import EpisodeCollection from '../components/EpisodeCollection';
import { Label, Input } from '@rebass/forms';
import { Box } from 'rebass';
import { Stack } from '@fluentui/react';
import { getEpisodesFromSimplecast } from '../utilities/Simplecast';

export default function Episodes () {

    const [episodes, setEpisodes] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    async function getEpisodes() {
        const simplecastJSON = await getEpisodesFromSimplecast();
        const simplecastOBJ = JSON.parse(simplecastJSON);
        setEpisodes(simplecastOBJ.collection.filter((episode) => {
            return episode.title.toLowerCase().includes(searchInput.toLowerCase());
        }));
    }
    
    useEffect(() => {
        getEpisodes();
        // eslint-disable-next-line
    }, [searchInput]);
    // console.log(searchInput);

    return (
        <div>
            <Stack className='episodes-header' horizontalAlign='start'>
                Episodes
            </Stack>
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
            <EpisodeCollection episodes={episodes} />
        </div>
    )
}
