import React from 'react';
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
                return (
                    <center>
                        <iframe title={i} key={i} height="200px" width="100%" frameBorder="no" scrolling="no" seamless src={`https://player.simplecast.com/${episode.id}?dark=true`}></iframe>
                    </center>
                )
            })}
        </Box>
    )
}
