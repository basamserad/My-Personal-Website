import React, { useRef, useState } from 'react';
import styles from '../style';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSend } from 'react-icons/ai';
import { facebook, linkedin, email } from '../assets';
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
        </div>

        <div className="sm:ml-10 ml-10 sm:mt-0 hidden flex-1 md:flex flex-col">
          <h2 className={`${styles.heading2}`}>Contact Information</h2>
          <p className="text-white">
            I'm open for any suggestion or job offer. Feel free to contact me.
          </p>
          <div className="pl-3 mt-5 space-y-6">
            <span className="flex flex-row justify-start text-white">
              <img
                src={facebook}
                className="w-[21px] h-[21px] object-contain mr-2"
              />
              Facebook:
              <p className="text-black ml-2">
                https://www.facebook.com/basam.serad.1998
              </p>
            </span>
            <span className="flex flex-row justify-start text-white">
              <img
                src={email}
                className="w-[21px] h-[21px] object-contain mr-2"
              />
              Email:
              <p className="text-black ml-2"> basamserad1223@gmail.com </p>
            </span>
            <span className="flex flex-row justify-start text-white">
              <img
                src={linkedin}
                className="w-[21px] h-[21px] object-contain mr-2"
              />
              linkedin:
              <p className="text-black ml-2">
                https://www.linkedin.com/in/basam-serad-19599823a/
              </p>
            </span>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
