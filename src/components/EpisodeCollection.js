import React, { useState } from 'react'
import EpisodeCard from './EpisodeCard'

export default function EpisodeCollection (props) {

    
    return (
        <div>
            {props.episodes.map((episode, i) => {
                return <EpisodeCard key={i} episode={episode} />
            })}
        </div>
    )
}
