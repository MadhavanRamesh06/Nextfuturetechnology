import React, { useState } from 'react';
import Joi from 'joi-browser';
import { FaMapMarkerAlt, FaPhoneAlt,FaMobileAlt,FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import {ContactContainer, ContactHeadingDiv, ContactHeading, ContactDetailFormDiv, ContactInfoDiv, ContactInfo, ContactForm, ContactDetailDiv, ContactFormFieldDiv, ContactFormFieldHeader, ContactFormInput,
    ContactFormButtonDiv, ContactFormButton, ContactFormMessageInput, ContactHeaderDiv, ContactHeader, ContactFormFieldError, ContactInfoLink, WhatsAppBtn, ContactDetailTopDiv, ContactInfoDiv2
} from './ContactElements';



const Contact = () => {

    //input info
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState({});

    //DATA VALIDATION BY JOI IS RENDERED INVALID COZ OF THE USE OF FORMSUBMIT API! UPGRADE IT IN V2
    const schema = {
        name: Joi.string().min(2).max(30).required().label('Name'),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: Joi.string().required(),
        message: Joi.string().min(2).max(500).required(),
    }

    const validate = () => {
        const details = { name, email, phone, message }
        const result = Joi.validate(details, schema, { abortEarly: false });
        if (!result.error) submitForm();
        const errors = {}
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message
        }

        return errors;

    }


    const submitForm = () => {
        console.log('Submitted');
        setError({})
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000);
        //  emailjs.sendForm("aerogue_service_b@o!@wt", "template_le1xcje", e.target, "6Lx9zWggWqC2C1xMP")
        //  .then(res => console.log('Success', res))
        //  .catch(err => console.log('Error', err))
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }


    return (
        <ContactContainer id={"contact"} >


            <ContactHeadingDiv>
                <ContactHeading> Contact Us. </ContactHeading>
            </ContactHeadingDiv>

            <ContactDetailFormDiv>

                <ContactDetailDiv>

                    <ContactDetailTopDiv>
                        <ContactInfoDiv style={{ cursor: 'pointer' }} target='_blank' href='https://maps.app.goo.gl/ro8rvPQfTTqG7d4C8'>
                            <ContactHeaderDiv>
                                <FaMapMarkerAlt />
                                <ContactHeader> India Location </ContactHeader>
                            </ContactHeaderDiv>
                            <ContactInfo>Flat No 4, Annai Muthammaal Nagar, Mariyamman Kovil, Thanjavur, TamilNadu, India </ContactInfo>
                        </ContactInfoDiv>
                        <ContactInfoDiv>
                            <ContactInfo style={{ cursor: 'pointer' }} target='_blank' href="tel:+918072022595"><FaMobileAlt/> +91 8072022595 </ContactInfo>
                            <ContactInfo style={{ cursor: 'pointer' }} target='_blank' href="tel:+9104362267330"> <FaPhoneAlt/> +91 04362-267330 </ContactInfo>
                        </ContactInfoDiv>
                        <WhatsAppBtn target='_blank' href='https://api.whatsapp.com/send/?phone=918072022595'> <FaWhatsapp /> India</WhatsAppBtn>

                        <ContactInfoDiv style={{ cursor: 'pointer' }} target='_blank' href='https://www.google.com/maps/place/Al+Shaiba+Building+-+2nd+Floor,+Dubai+Outsource+Zone+-+Manama+St+-+Academic+City+-+Dubai/@25.1270534,55.4236481,17z/data=!4m15!1m8!3m7!1s0x3e5f63bdea4f9971:0x4c2543ce56a1636e!2sAl+Shaiba+Building+-+2nd+Floor,+Dubai+Outsource+Zone+-+Manama+St+-+Academic+City+-+Dubai!3b1!8m2!3d25.1270534!4d55.426223!16s%2Fg%2F12vskgyw6!3m5!1s0x3e5f63bdea4f9971:0x4c2543ce56a1636e!8m2!3d25.1270534!4d55.426223!16s%2Fg%2F12vskgyw6'>
                            <ContactHeaderDiv>
                                <FaMapMarkerAlt />
                                <ContactHeader> UAE Location </ContactHeader>
                            </ContactHeaderDiv>
                            <ContactInfo> Al Shaiba Building, Academic City,<></> Dubai, United Arab Emirates </ContactInfo>
                        </ContactInfoDiv>
                        <ContactInfoDiv>
                            <ContactInfo style={{ cursor: 'pointer' }} target='_blank' href="tel:+971523949324"><FaMobileAlt/> +971 52394 9324 </ContactInfo>
                        </ContactInfoDiv>
                        <WhatsAppBtn target='_blank' href='https://api.whatsapp.com/send/?phone=971523949324'> <FaWhatsapp /> UAE</WhatsAppBtn>
                    </ContactDetailTopDiv>

                    <ContactInfoDiv2 href='mailto:info@nextfuturetechnology.com'>
                        <ContactHeaderDiv style={{ cursor: 'pointer' }}>
                            <MdEmail />
                            <ContactHeader> Email </ContactHeader>
                        </ContactHeaderDiv>
                        <ContactInfoLink target='_blank' href='mailto:info@nextfuturetechnology.com'> <MdEmail /> Email us </ContactInfoLink>
                    </ContactInfoDiv2>

                </ContactDetailDiv>

                <ContactForm action="https://formsubmit.co/info@nextfuturetechnology.com" method="POST">

                    <ContactFormFieldDiv>
                        <ContactFormFieldHeader> Name </ContactFormFieldHeader>
                        <ContactFormInput value={'' || name} name="name" onChange={e => { setName(e.target.value) }} />
                        {error.name ? <ContactFormFieldError>  {error.name}  </ContactFormFieldError> : null}
                    </ContactFormFieldDiv>

                    <ContactFormFieldDiv>
                        <ContactFormFieldHeader> Phone </ContactFormFieldHeader>
                        <ContactFormInput value={'' || phone} name="phone" onChange={e => setPhone(e.target.value)} />
                        {error.phone ? <ContactFormFieldError>  {error.phone}  </ContactFormFieldError> : null}
                    </ContactFormFieldDiv>

                    <ContactFormFieldDiv>
                        <ContactFormFieldHeader> Email </ContactFormFieldHeader>
                        <ContactFormInput value={'' || email} name="email" onChange={e => setEmail(e.target.value)} />
                        {error.email ? <ContactFormFieldError>  {error.email}  </ContactFormFieldError> : null}
                    </ContactFormFieldDiv>

                    <ContactFormFieldDiv>
                        <ContactFormFieldHeader> Message </ContactFormFieldHeader>
                        <ContactFormMessageInput value={'' || message} name="message" onChange={e => setMessage(e.target.value)} />
                        {error.message ? <ContactFormFieldError>  {error.message}  </ContactFormFieldError> : null}
                    </ContactFormFieldDiv>

                    {show ? <h4> Your Message has been sent successfully!</h4> : null}

                    <ContactFormButtonDiv>
                        <ContactFormButton type='submit' target='_blank'> Submit </ContactFormButton>
                    </ContactFormButtonDiv>

                </ContactForm>

            </ContactDetailFormDiv>

        </ContactContainer>
    );
}

export default Contact;
