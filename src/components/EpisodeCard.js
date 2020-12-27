import React from 'react';
import { Card, Heading, Box, Flex, Link } from 'rebass';
// import { Tiles } from '@rebass/layout';

export default function EpisodeCard (props) {
    let t = 'testing';
    t.substr(0,10)
    return (
        <Box
            sx={{
                display: 'grid',
                gridGap: 3,     // theme.space[3]
                gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
            }}
        >
            <Card width={256}>
                <Link target='_blank' href={props.episode.link} variant='nav' >
                    <Heading>{props.episode.title}</Heading>
                </Link>
                <br/>
                {props.episode.content.length >= 100 ? 
                    props.episode.content.substr(0,100) + '...' 
                    : props.episode.content}
            </Card>
        </Box>
    )
}
