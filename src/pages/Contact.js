import React, { useState } from 'react';
import { Stack, StackItem, TextField } from '@fluentui/react';
import { Label, Button, Alert, Input } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function Contact () {

    const [name, setName] = useState('');
    const [alertName, setAlertName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isError, setIsError] = useState(false);
    const [isInputNull, setIsInputNull] = useState(null);
    const [isEmailSent, setIsEmailSent] = useState(false);

    function onClick() {
        if(name && email && message !== '') {
            setAlertName(name);
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_API_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_API_KEY, 
                {
                    to_name: "brother and sister",
                    from_name: name + ' (' + email + ')',
                    message: message,
                }, process.env.REACT_APP_EMAILJS_USER_API_KEY
                ).then(() => {
                    setIsEmailSent(true);
                    setEmail('');
                    setMessage('');
                    setName('');
                }).catch((error) => {
                    setIsError(true);
                })
        } else { 
            setIsError(true);
            setIsInputNull(true);
        }
    }
            
    return (
        <div>
            <StackItem className='contact-header' horizontalAlign='start'>
                Contact
            </StackItem>
            <center>
                <div className='contact-text' style={{width: '90%'}}>
                    Need to contact us about a business inquiry? Want to request a movie for us to watch? Have a TikTok you think we'd like? Email us... please
                </div>
            </center>
            <br />
            <Stack horizontalAlign='center'>
                    <Label htmlFor='name' className='home-text'>Name</Label>
                    <Input 
                        id='name'
                        name='name'
                        className='home-text'
                        style={{ color: 'white',
                            backgroundColor: 'black',
                            fontSize: 24,
                            width: '50%' }}
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    ></Input>
                
                    <Label htmlFor='email' className='home-text'>Email</Label>
                    <Input name="text" type='email'
                        id='email'
                        name='email'
                        className='home-text' placeholder='example@mail.com'
                        style={{ color: 'white',
                            backgroundColor: 'black',
                            fontSize: 24,
                            width: '50%'
                        }}
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                   
                    <Label htmlFor='message' className='home-text'>Message</Label>
                    <Input type='textarea'
                        id='message'
                        name='message'
                        className='home-text'
                        style={{ color: 'white',
                            backgroundColor: 'black',
                            fontSize: 24,
                            width: '50%'
                        }}
                        value={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                    ></Input>
                
                { isEmailSent && <Alert color='success'> {alertName}, thanks for your email!</Alert>}
                
                { isError && <Alert color='danger'> {isInputNull ? 'PLEASE ENTER IN VALID INFORMATION' : 'OOPS SOMETHING WENT WRONG ! PLEASE TRY AGAIN'}</Alert>}

            </Stack>
            <br />
            <center>
                <Button className='contact-submit-button' style={{backgroundColor: 'black', color: '#ffb541', fontSize: 24}} onClick={() => onClick()}>Submit</Button>
            </center>
            <br />
        </div>
    )
}
