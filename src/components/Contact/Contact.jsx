import React, { useRef, useState } from 'react';
import contact1 from './My-Logo.png';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiGmail } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';

const Contact = () => {
  const formRef = useRef();
  const [data, setData] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const notify = () => {
    toast.success('Email Sent', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_e6qoud8',
        'template_fldn3ew',
        formRef.current,
        '0eF5FLYRaa01rSqJc'
      )
      .then(
        (result) => {
          console.log(result.text);
          notify(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <div className="title_contact">Contact Me With</div>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="c_logo">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Basam C. Serad</h1>
                  <p className="c_title">Software Developer/Web Developer</p>
                  <p>
                    I am currently looking for work. Connect with me via and
                    call in to my account.
                  </p>
                  <br />
                  <p>Phone: (+63) 970 462 0231</p>
                  <p>Email: basamserad1223@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <a
                      href="mailto:basamserad1223@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn_shadow">
                        <SiGmail />
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/basamserad/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn_shadow">
                        <BsLinkedin />
                      </button>
                    </a>
                    <a
                      href="https://www.facebook.com/basam.serad.1998"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn_shadow">
                        <BsFacebook />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={formRef} onSubmit={formSubmit}>
                <div className="input">
                  <span>YOUR NAME</span>
                  <input
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <button type="submit" className="btn_shadow">
                  Send Message
                  <i>
                    <AiOutlineSend />
                  </i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
