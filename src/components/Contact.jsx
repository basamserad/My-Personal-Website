import React, { useRef, useState } from 'react';
import styles from '../style';
import Button from './Button';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSend } from 'react-icons/ai';

const Contact = () => {
  const formRef = useRef();
  const [data, setData] = useState({
    name: '',
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
      <section
        id="contact"
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2}`}>Contact Me With!</h2>
          <form ref={formRef} onSubmit={formSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  required
                  autoComplete="email"
                  type="text"
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div className="my-5">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  required
                  autoComplete="email"
                  type="email"
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="my-5">
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={InputEvent}
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  required
                  type="message"
                  rows="8"
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm text-primary font-medium
                rounded-md text-white bg-blue-gradient"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <AiOutlineSend className="h-5 w-5" aria-hidden="true" />
                </span>
                Send Message
              </button>
            </div>
          </form>
          {/* <form ref={formRef} onSubmit={formSubmit}>
            <div className="input">
              <span>YOUR NAME</span>
              <input
                type="text"
                name="email"
                value={data.email}
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
          </form> */}
        </div>

        <div
          className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 flex-1 flex flex-col`}
        >
          <Button />
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
