import React, { useState } from 'react';
import EpisodeCard from './EpisodeCard';
import { Box } from 'rebass';

export default function EpisodeCollection (props) {

    
    return (
        <Box
            px={3}
            margin={[ 0, 1, 2 ]}
            px={[1,100,200]}
            sx={{
                display: 'grid',
                gridGap: 40,
                gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
            }}>
            {props.episodes.map((episode, i) => {
                return <EpisodeCard key={i} episode={episode} />
            })}
        </Box>
    )
}
