import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    background:f9f9f9;
    margin: 50px auto;
    padding: 25px;
    justify-content: center;
    align-items: center;
`

export const ContactHeadingDiv = styled.div`
    align-items: center;
    margin-bottom: 40px;
`

export const ContactHeading = styled.h2`
    font-size: 40px;
    margin: 10px 0;
    display: flex;


    @media screen and (max-width:768px) {
        font-size: 32px;
    }
`

export const ContactDetailFormDiv = styled.div`
    display: flex;
    width: 100%;
    border-radius: 10px;
    box-shadow: 20px 20px 36px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 20px 20px 36px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 20px 20px 36px 0px rgba(0,0,0,0.6);

    @media screen and (max-width:960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const ContactDetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    border: 3px solid #333;
    border-radius: 10px;
    padding: 40px;
    margin: 20px;
    

    @media screen and (max-width:768px) {
        min-width: 80%;
    }

    @media screen and (max-width:480px) {
        min-width: 80%;
    }
`

export const ContactInfoDiv= styled.a`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: black;
    margin: 10px 0;
    transition: transform 1s;
    text-decoration: none;
    
    &:hover{
        transform: scale(1.07);
    }

    @media screen and (max-width:768px) {
        font-size: 18px;
        
    }

    @media screen and (max-width:480px) {
        font-size: 16px;
    }
`

export const ContactInfoDiv2= styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: black;
    margin: 20px 0;

    @media screen and (max-width:768px) {
        font-size: 18px;
        
    }

    @media screen and (max-width:480px) {
        font-size: 16px;
    }
`



export const ContactHeaderDiv = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    
    @media screen and (max-width:768px) {
        margin-bottom: 15px;
    }

`

export const ContactHeader = styled.span`
    font-size: 25px;
    font-weight: 500;
    margin-left: 10px;

    @media screen and (max-width:768px) {
        font-size: 20px;
    }

    @media screen and (max-width:768px) {
        font-size: 17px;
    }
`

export const ContactInfo = styled.a`
    font-size: 18px;
    margin-left: 10px;
    text-decoration: none;
    color:#000;
    transition: transform 1s;
    line-height: 2rem;
    &:hover{
        transform: scale(1.07);
    }


    @media screen and (max-width:768px) {
        font-size: 15px;
    }

    @media screen and (max-width:768px) {
        font-size: 13px;
    } 
`


export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    border: 3px solid #333;
    border-radius: 10px;
    padding: 40px;
    margin: 20px;

    @media screen and (max-width:768px) {
        border-radius: none;
        min-width: 80%;
    }
    
    @media screen and (max-width:768px) {
        border-radius: none;
        min-width: 80%;
    }

    @media screen and (max-width:768px) {
        border-radius: none;
        min-width: 80%;
    }
`

export const ContactFormFieldDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ContactFormFieldHeader = styled.label`
    font-size: 14px;
    margin:10px 0;

    @media screen and (max-width:768px) {
        font-size: 12px;
    }
`

export const ContactFormInput = styled.input`
    width: 100%;
    background-color: rgba(172, 231, 194, 0.4);
    color: black;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 20px;
    font-size: 18px;

    @media screen and (max-width:768px) {
        font-size: 14px;
        padding: 10px;
    }
`

export const ContactFormButtonDiv = styled.div`
    margin: 10px 0;
`

export const ContactFormButton = styled.button`
    border-radius: 7px;
    background-color: #20b7af;
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    margin-right: 20px;

    &:hover{
        transition: all 0.2s ease-in-out;

    }

    @media screen and (max-width: 768px) {
        padding: 12px 18px;
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        padding: 10px 14px;
        font-size: 10px;
    }

    @media screen and (max-width: 250px) {
        padding: 5px 8px;
        font-size: 10px;
    }
`

export const ContactFormMessageInput = styled.textarea`
    background-color: rgba(172, 231, 194, 0.4);
    color: black;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    padding: 20px;
    min-height: 125px;
    max-height: 250px;
    max-width: 430px;
`
export const ContactFormFieldError = styled.div`
    margin-bottom: 10px;
    color: white;
    background-color: #d0423c ;
    border-radius: 5px;
    padding: 10px;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 13px;
    }

    @media screen and (max-width: 250px) {
        font-size: 11px;
    }

`

export const WhatsAppBtn = styled.a`
    border-radius: 7px;
	background-color:#25D366;
	color:white;
	border: none;
    color: white;
    padding: 15px 12px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    margin: 10px 10px;
    text-decoration: none;
    text-align: center;
    transition: transform 0.5s;
    width: 60%;

    &:hover{
        background-color: #20b7af;
        transform: scale(1.07);
    }

    @media screen and (max-width: 768px) {
        padding: 12px 18px;
        font-size: 12px;
        width: 50%;
    }

    @media screen and (max-width: 480px) {
        padding: 10px 14px;
        font-size: 10px;
        width: 70%;
    }

    @media screen and (max-width: 280px) {
        padding: 5px 8px;
        font-size: 10px;
        width: 100%;
    }
`

export const ContactInfoLink = styled.a`
    border-radius: 7px;
	background-color: #20b7af;
	color:white;
	border: none;
    color: white;
    padding: 10px 18px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;
    text-decoration: none;
    text-align: center;
    transition: transform 0.5s;
    width: 40%;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: #20b7af;
        transform: scale(1.07);
    }

    @media screen and (max-width: 768px) {
        padding: 12px 18px;
        font-size: 12px;
        width: 50%;
    }

    @media screen and (max-width: 480px) {
        padding: 10px 14px;
        font-size: 10px;
        width: 70%;
    }

    @media screen and (max-width: 280px) {
        padding: 5px 8px;
        font-size: 10px;
        width: 100%;
    }

`

export const ContactDetailTopDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and (max-width: 280px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }



`
export const ContactH3 = styled.h3`
    font-size: 15px;
    font-weight:500;
    

    @media screen and (max-width:768px) {
        font-size: 20px;
    }
`