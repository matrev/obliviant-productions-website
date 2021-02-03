import React, { useState, useEffect } from 'react';
import EpisodeCollection from '../components/EpisodeCollection';
import { Label, Input } from '@rebass/forms';
import { Stack, StackItem } from '@fluentui/react';
import { getEpisodesFromSimplecast } from '../utilities/Simplecast';
import { Button } from 'reactstrap';

export default function Episodes (props) {

    const [episodes, setEpisodes] = useState([]);
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
        // eslint-disable-next-line
    }, [searchInput]);

    console.log('episodes', episodes);

    return (
        <div>
            <Stack className='episodes-header' horizontalAlign='center'>
                    Episodes
            </Stack>
            <Stack horizontalAlign='center' tokens={{ childrenGap: 50}}>
                <StackItem>
                    <Label htmlFor='search' className='home-text'>Search For an Episode</Label>
                    <Input
                        id='search'
                        name='search'
                        className='home-text'
                        style={{color: 'white', fontSize: 'calc(5px + 2vw)'}}
                        value={searchInput}
                        onChange={(e) => {setSearchInput(e.target.value)}}
                    ></Input>
                </StackItem>
                <EpisodeCollection episodes={episodes.slice(left,right)} />
                <Stack horizontal tokens={{ childrenGap: 50 }}>
                    {(left > 0) && <Button outline className='episode-paginate-button' style={{backgroundColor: 'black', color: '#e05a4e', fontSize: 24}} onClick={() => { 
                        setLeft(left-9); 
                        setRight(right-9); 
                    }}>Previous Page</Button>}

                    {(right <= episodes.length) && <Button outline className='episode-paginate-button' style={{backgroundColor: 'black', color: '#e05a4e', fontSize: 24}} onClick={() => { 
                        setLeft(left+9);
                        setRight(right+9);
                    }}>Next Page</Button>}
                </Stack>
                <br/>
            </Stack>
            
        </div>
    )
}
