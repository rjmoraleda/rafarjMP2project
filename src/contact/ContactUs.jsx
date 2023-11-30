import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';
import './contact.css'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9dnlyx9', 'template_9pzxehm', form.current, 'XPUufuYCGqOhBw3_d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"}/>
      <div className='contact section-bg'>
            <div className="container">
            <form ref={form} onSubmit={sendEmail}>
       <label>Name</label>
       <input type="text" name="user_name" />
       <label>Email</label>       <input type="email" name="user_email" />
       <label>Message</label>
       <textarea name="message" />
       <input type="submit" value="Send" />
     </form>
        </div>
    </div>
    </div>
  );
};
export default ContactUs