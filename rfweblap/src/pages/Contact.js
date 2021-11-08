import { margin } from '@mui/system';
import React from 'react'
import App from './form';
import App2 from './form2';
import "../styles/Contact.css";


function Contact() {

    

    return (
        <div className="contact">
            <div className="left">
                <App/>     
                <App2/>
            </div>
            
        </div>
    )
}

export default Contact ;
