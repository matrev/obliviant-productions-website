import React from 'react';
import { Card, Heading, Link } from 'rebass';

export default function EpisodeCard (props) {
    let t = 'testing';
    t.substr(0,10)
    return (
            <Card width={256}>
                <Link target='_blank' href={props.episode.href} variant='nav' >
                    <Heading>{props.episode.title}</Heading>
                </Link>
                <br/>
                {props.episode.description >= 100 ? 
                    props.episode.description.substr(0,100) + '...' 
                    : props.episode.description}
            </Card>
    )
}
