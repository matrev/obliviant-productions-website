import React, { useState } from 'react';
import { Stack, StackItem, TextField } from '@fluentui/react';
import { Label, Button, Alert } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function Contact () {

    const [name, setName] = useState('');
    const [alertName, setAlertName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isError, setIsError] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    function onClick() {
        setAlertName(name);
        
        emailjs.send(
            "service_k2egvcs","template_yxyi0fw",{
                to_name: "brother and sister",
                from_name: name + '( ' + email + ')',
                message: message,
                }, 'user_fyEvKIMkjfSlu5DTVEuVR'
        ).then(() => {
            setIsEmailSent(true);
            setEmail('');
            setMessage('');
            setName('');
        }).catch((error) => {
            setIsError(true);
        })
    }

    return (
        <div>
            <StackItem className='contact-header' horizontalAlign='start'>
                Contact
            </StackItem>
            <center>
                <div className='home-text' style={{width: '75%'}}>
                    Need to contact us about a business inquiry? Want to request a movie for us to watch? Have a TikTok you think we'd like? Email us... please
                </div>
            </center>
            <br />
            <Stack horizontalAlign='center' tokens={{ childrenGap: 10 }}>
                <StackItem>
                    <Label htmlFor='name' className='home-text'>Name</Label>
                    <TextField
                        id='name'
                        name='name'
                        className='home-text'
                        style={{ color: 'white', backgroundColor: 'black', fontSize: 24 }}
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    ></TextField>
                </StackItem>
                <StackItem>
                    <Label htmlFor='email' className='home-text'>Email</Label>
                    <TextField
                        id='email'
                        name='email'
                        className='home-text'
                        style={{ color: 'white', backgroundColor: 'black', fontSize: 24 }}
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    ></TextField>
                </StackItem>
                <StackItem>    
                    <Label htmlFor='message' className='home-text'>Message</Label>
                    <TextField multiline resizable={false}
                        id='message'
                        name='message'
                        className='home-text'
                        rows={6}
                        style={{ color: 'white', backgroundColor: 'black', fontSize: 24 }}
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                    ></TextField>
                </StackItem>
                { isEmailSent && <Alert color='success'> {alertName}, thanks for your email!</Alert>}
                { isError && <Alert color='danger'> OOPS SOMETHING WENT WRONG ! PLEASE TRY AGAIN</Alert>}
                <Button onClick={() => onClick()}>Submit</Button>
                <br/>
            </Stack>
        </div>
    )
}
