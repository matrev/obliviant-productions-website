import React from 'react';
import { Stack } from '@fluentui/react';
import { Card } from '@fluentui/react-cards';
import '../pages/pages.css';

export default function EpisodeCollection (props) {
    
    return (
        <Stack vertical horizontalAlign='center' >
            {props.episodes.map((episode, i) => {
                return (
                    <Stack styles={{root: { width: '100%'}}} horizontalAlign='center'>
                        <Card>
                            <Card.Section className='episode-card-title'>
                                {episode.title}
                                <audio controls src={episode.enclosure_url} />
                            </Card.Section>
                            <Card.Section className='episode-card-description'>
                                {episode.description}
                            </Card.Section>
                        </Card>
                    </Stack>
                )
            })}
        </Stack>
    )
}
