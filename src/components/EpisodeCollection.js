import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import { Stack, Link } from '@fluentui/react';


import '../pages/pages.css';

export default function EpisodeCollection (props) {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <Stack vertical horizontalAlign='center' tokens={{ childrenGap: 50 }}>
            {props.episodes.map((episode, i) => {
                return (
                    <div>
                        <Stack className='episode-card'  styles={{root: { width: '100%'}}} horizontalAlign='center'>
                                <Stack className='episode-card-title' horizontalAlign='center' >
                                    <Link onClick={toggle} style={{color: '#e05a4e'}}>
                                        {episode.title}
                                    </Link>
                                </Stack>
                                <Stack className='episode-card-description'>
                                    {(episode.description.length > 10) ? episode.description.slice(0,70) + '...': episode.description}
                                </Stack>
                        </Stack>
                        <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle}>{episode.title}</ModalHeader>
                            <ModalBody>
                                {episode.description}
                                <audio controls src={episode.enclosure_url} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>Back</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                )
            })}
        </Stack>
    )
}
