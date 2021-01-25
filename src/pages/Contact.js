import React, { useState } from 'react';
import { Stack } from '@fluentui/react';
import { Input, Label, Button } from 'reactstrap';

export default function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState(['General Feedback', 'Other'])

    function onClick() {
        console.log('name: ', name, 'email: ', email, 'subject: ', subject);
    }
    return (
        <Stack>
            <Stack className='contact-header' horizontalAlign='start'>
                Contact
            </Stack>
            <Stack>
                <Label htmlFor='name' >Name</Label>
                <Input
                    id='name'
                    name='name'
                    className='home-text'
                    style={{color: 'white', fontSize: 'calc(5px + 2vw)'}}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                ></Input>
                <Label htmlFor='email' >Email</Label>
                <Input
                    id='email'
                    name='email'
                    className='home-text'
                    style={{color: 'white', fontSize: 'calc(5px + 2vw)'}}
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                ></Input>
                <Label htmlFor='subject' >Subject</Label>
                <Input
                    id='subject'
                    name='subject'
                    className='home-text'
                    style={{color: 'white', fontSize: 'calc(5px + 2vw)'}}
                    value={subject}
                    onChange={(e) => {setSubject(e.target.value)}}
                ></Input>
            </Stack>
            <Button onClick={() => onClick()}>Submit</Button>
        </Stack>
    )
}
