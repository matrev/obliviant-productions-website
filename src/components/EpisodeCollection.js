import React from 'react';
import { Stack } from '@fluentui/react';
import '../pages/pages.css';

export default function EpisodeCollection (props) {
    
    return (
        <Stack vertical horizontalAlign='center' tokens={{ childrenGap: 50 }}>
            {props.episodes.map((episode, i) => {
                return (
                    <Stack className='episode-card'  styles={{root: { width: '100%', borderBottomColor: 'white'}}} horizontalAlign='center'>
                            <Stack className='episode-card-title' horizontalAlign='center'>
                                {episode.title}
                                <audio controls src={episode.enclosure_url} />
                            </Stack>
                            <Stack className='episode-card-description'>
                                {episode.description}
                            </Stack>
                    </Stack>
                )
            })}
        </Stack>
    )
}
