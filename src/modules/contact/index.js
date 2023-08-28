import './index.css'
import React,{useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Toast from './Toast'

export default ()=>{
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const nameref=useRef()
    const emailref=useRef()
    const messageref=useRef()
    
    const formref=useRef()

    const handleSend=(e)=>{
      e.preventDefault()
      const email=emailref.current.value
      const username=nameref.current.value
      const message=messageref.current.value

      if (username===""){setErrMsg('Name field empty');return;}
      else if(email===""){setErrMsg('Email field empty');return;}
      else if(message===""){setErrMsg('Message field is empty');return;}
      else if(!email.includes('@')){setErrMsg('Invalid email');return}

      emailjs.sendForm('service_24ffibm', 'template_cf4by18', formref.current, 'z7zWwEQvkgG0YyrnJ')
      .then((result) => {
          setSuccessMsg('email sent succesfully')
      }, (error) => {
          console.log(error.text);
          setSuccessMsg('email unsuccessful')
      });

      emailref.current.value=""
      nameref.current.value=""
      messageref.current.value=""
    }
console.log("-----------",errMsg,successMsg)
    return <div className='mt-4 ' id="Contact">
    <section
      id="y"
      className="contact-section contact-form mx-auto py-20"
    >
      <h6 className='text-center fw-light pink-color'>-- connect with me --</h6>
      <h1 className='text-center mb-5'>Let's Connect</h1>
      <div className="w-100">
          <div className="contact-form-1 w-100 d-flex flex-column gap-8 rounded p-4">
            <form ref={formref} onSubmit={handleSend} className="w-100 d-flex flex-column gap-4">
              <div className="d-flex flex-column gap-4">
                <p className="">
                  Name
                </p>
                <input
                  ref={nameref}
                  name="from_name"
                  type="text"
                />
              </div>
              <div className="d-flex flex-column gap-4">
                <p className="">
                  Email ID
                </p>
                <input
                  ref={emailref}
                  name="from_email"
                  type="email"
                />
              </div>
              <div className="d-flex flex-column gap-4">
                <p className="">
                  Message
                </p>
                <textarea
                  name="message"
                  ref={messageref}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-100">
                <button
                  type="submit"
                  className="d-block mx-auto rounded  text-white">
        
                  Send Message
                </button>
              </div>
              <Toast message={errMsg?errMsg:successMsg} color={errMsg?"red":"green"} show={(errMsg|| successMsg)?true:false} />

            </form>
          </div>
      </div>
    </section>
    <Toast />
  </div>
}
