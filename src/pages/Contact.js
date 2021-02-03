import React, { useState } from 'react';
import { Stack, StackItem} from '@fluentui/react';
import { Label, Button, Alert, Input } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';

export default function Contact () {

    const [name, setName] = useState('');
    const [alertName, setAlertName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isError, setIsError] = useState(false);
    const [isInputNull, setIsInputNull] = useState(null);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });

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
            <Stack className='contact-header' horizontalAlign='center'>
                Contact
            </Stack>
            <Stack horizontal={isDesktopOrLaptop} horizontalAlign='center' verticalAlign='space-around'  tokens={{childrenGap: 20}} >
                <Stack horizontalAlign='end'  style={{ textAlign: 'center' }} className='contact-text'>
                    Need to contact us about a business inquiry? <br />
                    Want to request a movie for us to watch? <br />
                    Have a TikTok you think we'd like? <br />
                    Email us... please.

                </Stack>
                <Stack horizontalAlign='center' tokens={{childrenGap: 20}} style={{width: isDesktopOrLaptop ? '50%' : '90%'}}>
                    <Stack horizontalAlign='center' style={{width: '100%'}} >
                        <Label htmlFor='name' className='home-text'>Name</Label>
                        <Input 
                            id='name'
                            name='name'
                            className='home-text' placeholder='first and last name'
                            style={{ color: 'white',
                                backgroundColor: 'black',
                                fontSize: 24,
                                width: isDesktopOrLaptop ? '50%' : '90%'
                            }}
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        ></Input>
                    </Stack>
                    
                    <Stack horizontalAlign='center' style={{width: '100%'}}>
                        <Label htmlFor='email' className='home-text'>Email</Label>
                        <Input type='email'
                            id='email'
                            name='email'
                            className='home-text' placeholder='example@mail.com'
                            style={{ color: 'white',
                                backgroundColor: 'black',
                                fontSize: 24,
                                width: isDesktopOrLaptop ? '50%' : '90%'
                            }}
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </Stack>
                    
                    <Stack horizontalAlign='center' style={{width: '100%'}}>
                        <Label htmlFor='message' className='home-text'>Message</Label>
                        <Input type='textarea'
                            id='message'
                            name='message'
                            className='home-text'
                            style={{ color: 'white',
                                backgroundColor: 'black',
                                fontSize: 24,
                                height: 100,
                                width: isDesktopOrLaptop ? '50%' : '90%',
                                height: '20vh'
                            }}
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)}}
                        ></Input>
                    </Stack>
                    
                    <Stack horizontalAlign='center' style={{width: '100%'}}>
                        { isEmailSent && <Alert color='success'> {alertName}, thanks for your email!</Alert>}
                        
                        { isError && <Alert color='danger'> {isInputNull ? 'PLEASE ENTER IN VALID INFORMATION' : 'OOPS SOMETHING WENT WRONG ! PLEASE TRY AGAIN'}</Alert>}
                        
                        <Button className='contact-submit-button' style={{backgroundColor: 'black', color: '#ffb541', fontSize: 24}} onClick={() => onClick()}>Submit</Button>
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}
