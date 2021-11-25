import React, { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'

import Loading from './svgs/Loading.gif'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [state, handleSubmit] = useForm('mpzbapqv')

    const HandleFormReset = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    useEffect(() => {
        if (state.succeeded) {
            setLoading(false)
            HandleFormReset()
            setAlertMessage('Email successfully sent. x')
            document.querySelector('.alert-span').style.display = 'block'
        }
    }, [state.succeeded])
    return (
        <div className='contact-div' id='contact'>
            <h1>Get in touch</h1>
            <div className='alert'>
                <span className='alert-span' onClick={() => (document.querySelector('.alert-span').style.display = 'none')}>
                    {alertMessage}
                </span>
            </div>
            {loading ? (
                <img src={Loading} alt='Loading' />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className='wrapper'>
                        <div>
                            <label htmlFor='name'>Name*</label>
                            <input
                                className=''
                                type='text'
                                name='name'
                                id='full-name'
                                value={name}
                                onChange={(event) => {
                                    setError('')
                                    setName(event.target.value)
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor='email'>Email*</label>
                            <input
                                className=''
                                type='email'
                                name='email'
                                id='email'
                                value={email}
                                onChange={(event) => {
                                    setError('')
                                    setEmail(event.target.value)
                                }}
                                required
                            />
                            <ValidationError prefix='Email' field='email' errors={state.errors} />
                        </div>
                    </div>

                    <label htmlFor='message'>Message*</label>
                    <textarea
                        name='message'
                        id='message'
                        rows='5'
                        value={message}
                        onChange={(event) => {
                            setError('')
                            setMessage(event.target.value)
                        }}
                        required
                    />
                    <ValidationError prefix='Message' field='message' errors={state.errors} />
                    <small>{error}</small>
                    <button disabled={state.submitting}>Send</button>
                </form>
            )}
        </div>
    )
}

export default Contact
