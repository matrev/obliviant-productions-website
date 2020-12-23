import React from 'react';
import { Card, Heading} from 'rebass';

export default function EpisodeCard (props) {
    return (
        <div>
            <Card width={256}>
                <Heading>{props.episode.title}</Heading>
                {props.episode.content}
            </Card>
        </div>
    )
}
