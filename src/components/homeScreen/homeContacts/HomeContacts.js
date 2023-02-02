import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./HomeContacts.css";

const HomeContacts = () => {
  const [checkError,setCheckError]=useState(true);
  const form = useRef();
  const success = <i className="fa-regular fa-circle-check"></i>;
  const wrong = <i className="fa-regular fa-circle-xmark"></i>;

  // Mail Validation
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    
    } else {
      setError(null);     
    }

    setMessage(event.target.value);
  };

  // end Mail validation

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p0fhj1m",
        "template_oiftrsi",
        form.current,
        "1vf0w9hnwjypnt2ch"
      )
      .then(
        (result) => {
          toast.info("We Received Your Email !", {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
            icon: success
          });
          e.target.reset();
        }
      );
  
  };



  return (
    <div className="contacts w-full py-24">

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="contact"></div>
        <div className="bg-[#45AEFF] mx-auto md:w-11/12 lg:w-4/5 xl:w-3/5 2xl:w-2/4 p-8">
          <div className="bg-white mx-auto pt-5 px-10">
            <div className="py-10">
              <p className="text-lg font-semibold uppercase text-sky-500">
                Contacts with us
              </p>
              <p className="text-4xl">Start new project</p>
              <form ref={form} onSubmit={sendEmail}>

                <input
                  required
                  name="user_name"
                  placeholder="Your Name *"
                  type="text"
                  className="mt-6 w-full px-3 py-4 pl-5 bg-[#F3F3F3] text-base focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                />{" "}
                <br />
                <input
                  required
                  name="user_email"
                  placeholder="Email Address *"
                  type="email"

                  id="message"
                  value={message}
                  onChange={handleChange}

                  className="mt-3 w-full px-3 py-4 pl-5 bg-[#F3F3F3] text-base focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />{" "}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <br />
                <textarea
                  required
                  name="message"
                  placeholder="Write Message *"
                  className="mt-3 w-full px-3 pb-10 py-2 pl-5 mb-6 bg-[#F3F3F3] text-base focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                />{" "}
                <br />


                <button
                disabled={error? true:false}
                  type="submit"
                  value="Send"
                  className="text-lg font-semibold uppercase px-6 py-2 mb-3 border-4 border-black hover:text-white hover:border-[#45AEFF] hover:bg-[#45AEFF] transition-all"
                >
                  send message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContacts;
