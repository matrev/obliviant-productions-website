import React from 'react';
import { Stack } from '@fluentui/react';
import './pages.css';

export default function About () {
    return (
        <div>
            <Stack className='about-header' horizontalAlign='start'>
                About
            </Stack>
            <Stack className='home-text' horizontalAlign='center'>
                The Brother Sister Show is a podcast in which two siblings keep in touch by talking about movies.
            </Stack>
            <Stack className='home-text'>
                <Stack horizontalAlign='center' horizontal>
                    <div className='episodes-header'>Livia</div>
                    <div className='episodes-header'>Anthony</div>
                </Stack>
                <Stack horizontalAlign='center' horizontal>
                    <p>
                        Hi! My name is Livia. When I’m not the better host of The Brother Sister Show, I’m a content specialist. Don’t know what that is? Nobody does. In my free time, I like to design websites, produce web series, write, and watch movies. I have a cat named Ari (after Ari Aster) and live in Austin with my boyfriend and producer of the pod, Sebastian.
                    </p>
                    <p>
                        Hello, Im Anthony. Outside of this podcast, I'm a Junior in college studying Computer Science. I also stream on <a href='https://twitch.tv/matrev_' rel="noopener noreferrer" target='_blank'>Twitch</a> (T/R/F) and occasionally make <a href="https://www.youtube.com/channel/UCDEAk4BVjNOky_zN0yLxfyQ" rel='noopener noreferrer' target='_blank'>YouTube videos</a>. I live in College Station with my girlfriend, Keila.
                    </p>
                </Stack>
            </Stack>
        </div>

    )
}
