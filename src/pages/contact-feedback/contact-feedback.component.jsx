import React from "react";
import './contact-feedback.styles.scss'
import FeedBack from "../../components/feedback/feedback.component";

import Contact from "../../components/contact/contact.component";

const ContactFeedback = () => (
   <div className='contactfeedback'>
    <FeedBack />
    <Contact />
    </div>
);


export default ContactFeedback;