import React from 'react';
import { Stack, Link } from '@fluentui/react';
import '../pages/pages.css';

export default function EpisodeCollection (props) {

    return (
        <Stack vertical horizontalAlign='center' tokens={{ childrenGap: 50 }}>
            {props.episodes.map((episode, i) => {
                return (
                    <div key={i}>
                        <Stack className='episode-card'  styles={{root: { width: '100%'}}} horizontalAlign='center'>
                                <Stack className='episode-card-title' horizontalAlign='center' >
                                    <Link href={`/episodes/episode/${episode.slug}`} style={{color: '#e05a4e'}}>
                                        {episode.title}
                                    </Link>
                                    
                                </Stack>
                                <Stack className='episode-card-description'>
                                    {episode.description}
                                    <Stack horizontal verticalAlign='center' horizontalAlign='center'>
                                        <a href={`https://twitter.com/intent/tweet?text=Have%20you%20listened%20to%20The%20Brother%20Sister%20Show%20yet%3F%20Check%20it%20out%20here%3A%20https%3A%2F%2Fthe-brother-sister-show.simplecast.com%2Fepisodes%2F${episode.slug}`} 
                                            target='_blank' 
                                            rel="noopener noreferrer"
                                            >
                                            <img src={require("../assets/twitterIcon.png")} style={{width: 64}} alt="Twitter Badge" />
                                        </a>
                                    </Stack>
                                </Stack>
                        </Stack>
                    </div>
                )
            })}
        </Stack>
    )
}
