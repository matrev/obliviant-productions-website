import React, { useState, useEffect } from 'react';
import EpisodeCollection from '../components/EpisodeCollection';
import { Label, Input } from '@rebass/forms';
import { Box } from 'rebass';
import { Stack, StackItem } from '@fluentui/react';
import { getEpisodesFromSimplecast } from '../utilities/Simplecast';
import { Button } from 'reactstrap';

export default function Episodes (props) {

    const [episodes, setEpisodes] = useState([]);
    const [searchInputPrev, setSearchInputPrev] = useState('');
    const [searchInput, setSearchInput] = useState('');

    //used for pagination, slices the episodes array into a window of 9 episodes
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(9);

    async function getEpisodes() {
        const simplecastJSON = await getEpisodesFromSimplecast();
        const simplecastOBJ = JSON.parse(simplecastJSON);
        setEpisodes(simplecastOBJ.collection.filter((episode) => {
            if (props.isGuest) {
                return episode.title.toLowerCase().includes('ft.') && episode.title.toLowerCase().includes(searchInput.toLowerCase());
            } else if (props.isAnthony) {
                return episode.description.toLowerCase().includes('anthony\'s pick') && episode.title.toLowerCase().includes(searchInput.toLowerCase());
            } else if (props.isLivia) {
                return (episode.description.toLowerCase().includes('livia\'s pick')) && episode.title.toLowerCase().includes(searchInput.toLowerCase());
            }
            return episode.title.toLowerCase().includes(searchInput.toLowerCase());
        }));
    }

    //get the episodes from simplecast 
    useEffect(() => {
        getEpisodes();
    }, [searchInput]);

    // filter episodes based on the search input
    // useEffect(() => {
    //     setEpisodes(episodes.filter((episode) => {
    //         return episode.title.toLowerCase().includes(searchInput.toLowerCase());
    //     }));
    // }, [searchInput]);
    console.log('episodes', episodes);

    return (
        <div>
            <StackItem className='episodes-header' horizontalAlign='start'>
                Episodes
            </StackItem>
            <Stack horizontalAlign='center' >
                <Box
                    sx={{ 
                    margin: [ 3, 10, 25],
                    width: [ 200 , null, 500]
                }}>
                    <Label htmlFor='search' className='home-text'>Search For an Episode</Label>
                    <Input
                        id='search'
                        name='search'
                        className='home-text'
                        value={searchInput}
                        onChange={(e) => {setSearchInput(e.target.value)}}
                    ></Input>
                </Box>
                <EpisodeCollection episodes={episodes.slice(left,right)} />
                {(left > 0) && <Button  onClick={() => { 
                    setLeft(left-9); 
                    setRight(right-9); 
                }}>Previous Page</Button>}
                {(right <= episodes.length) && <Button  onClick={() => { 
                    setLeft(left+9);
                    setRight(right+9);
                }}>Next Page</Button>}
            </Stack>
            
        </div>
    )
}
