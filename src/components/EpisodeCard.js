import React from 'react';
import { Card, Heading, Link } from 'rebass';

export default function EpisodeCard (props) {
    let t = 'testing';
    t.substr(0,10)
    return (
            <Card width={256}>
                <Link target='_blank' href={props.episode.link} variant='nav' >
                    <Heading>{props.episode.title}</Heading>
                </Link>
                <br/>
                {props.episode.content.length >= 100 ? 
                    props.episode.content.substr(0,100) + '...' 
                    : props.episode.content}
            </Card>
    )
}
