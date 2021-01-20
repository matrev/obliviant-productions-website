import React, { useState, useEffect } from 'react';
import EpisodeCollection from '../components/EpisodeCollection';
import { Label, Input } from '@rebass/forms';
import { Box } from 'rebass';
import { Stack } from '@fluentui/react';
import { getEpisodesFromSimplecast } from '../utilities/Simplecast';
import { Button } from 'reactstrap';

export default function Episodes (props) {

    const [episodes, setEpisodes] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const [episodeOffset, setEpisodeOffset] = useState(0);

    async function getEpisodes() {
        const simplecastJSON = await getEpisodesFromSimplecast(episodeOffset);
        const simplecastOBJ = JSON.parse(simplecastJSON);
        setEpisodes(simplecastOBJ.collection.filter((episode) => {
            if (props.isGuest) {
                return episode.title.toLowerCase().includes('ft.') && episode.title.toLowerCase().includes(searchInput.toLowerCase());
            } else if (props.isAnthony) {
                return episode.description.toLowerCase().includes('anthony\'s pick') && episode.title.toLowerCase().includes(searchInput.toLowerCase());
            } else if (props.isLivia) {
                return episode.description.toLowerCase().includes('livia\'s pick') && episode.title.toLowerCase().includes(searchInput.toLowerCase());
            }
            return episode.title.toLowerCase().includes(searchInput.toLowerCase());
        }));
    }
    
    useEffect(() => {
        getEpisodes();
        // eslint-disable-next-line
    }, [searchInput, episodeOffset]);
    console.log('episodeOffset: ', episodeOffset);
    console.log('episodes.length', episodes.length)

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
            {!(episodeOffset <= 0) && <Button  onClick={() => {setEpisodeOffset(episodeOffset - 9)}}> Previous Page</Button>}
            {!(episodes.find((episode) => {
                return episode.title.toLowerCase().includes('stuber')
                })) && 
                <Button  onClick={() => {setEpisodeOffset(episodeOffset + 9)}}> Next Page</Button>
                }
            
        </div>
    )
}
