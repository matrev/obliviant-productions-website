import React from 'react';
import { Stack } from '@fluentui/react';


export default function EpisodeCollection (props) {
    
    return (
        <Stack  horizontal horizontalAlign='center' >
            {props.episodes.map((episode, i) => {
                return (
                    <center>
                        {episode.title}
                        {/* <iframe title={i} key={i} height="200px" width="100%" frameBorder="no" scrolling="no" seamless src={`https://player.simplecast.com/${episode.id}?dark=true`}></iframe> */}
                    </center>
                )
            })}
        </Stack>
    )
}
