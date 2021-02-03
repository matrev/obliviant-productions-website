import React from 'react';
import { Stack, Link } from '@fluentui/react';
import '../pages/pages.css';

export default function EpisodeCollection (props) {

    return (
        <Stack vertical horizontalAlign='center' tokens={{ childrenGap: 50 }}>
            {props.episodes.map((episode, i) => {
                return (
                    <div key={i}>
                        <Stack className='episode-card'  styles={{root: { width: '100%'}}} horizontalAlign='center'>
                                <Stack className='episode-card-title' horizontalAlign='center' >
                                    <Link href={`/episodes/episode/${episode.slug}`} style={{color: '#e05a4e', textAlign: 'center'}}>
                                        {episode.title}
                                    </Link>
                                </Stack>
                                <Stack className='episode-card-description'>
                                    {episode.description}
                                </Stack>
                        </Stack>
                    </div>
                )
            })}
        </Stack>
    )
}
