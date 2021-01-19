import React from 'react';
import EpisodeCard from './EpisodeCard';
import { Box} from 'rebass';

export default function EpisodeCollection (props) {
    
    return (
        <Box
            px={3}
            sx={{
                display: 'grid',
                alignItems: 'center',
                gridGap: 40,
                gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
            }}>
            {props.episodes.map((episode, i) => {
                return (<center>
                    <iframe height="200px" width="100%" frameborder="no" scrolling="no" seamless src={`https://player.simplecast.com/${episode.id}?dark=true`}></iframe>
                    </center>)
            })}
        </Box>
    )
}
