import React, { useEffect, useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from 'react-icons/fa';
import {AiOutlineArrowLeft,
  AiOutlineArrowRight} from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

import siteQuote from '../site-quote';

import navbar_data from '../data/navbar-data.json'
import social_data from '../data/social-media.json'

import Button from '../../button'


import './index.css'
import SiteQuote from '../site-quote';


const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);



  const handleGmailButtonClick = () => {
    let mobile_link="mailto:menjithchandra2000@gmail.com"

    if (isMobile) {
      // Open Gmail app
      window.open(mobile_link);
    } else {
      // Open Gmail website with pre-filled "to" email
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=menjithchandra2000@gmail.com');
    }
  };

  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector(".header").classList.add("header-opacity")
    },1500)
  },[])


  return (
    <div className={`${isMobile?"py-2":""} header px-4 top-0 position-fixed w-100`}>
       {!isMobile && <SiteQuote />}
        <div className=' d-flex justify-content-between align-items-center text-white-50 w-100'>
        {isMobile?<div className='wrapper mobile'>
          <h1>MENJITH PORTFOLIO</h1>
        </div>:
        <p className='p-3 p-md-0 logo fw-bold my-name text-white'>MENJITH PORTFOLIO</p>}
        
          {/* menu */}
      <ul className='laptop-menu d-none d-md-flex'>
        {navbar_data.map((item,index)=>
        <li key={index} className={`${item.link}`}>
          <Link to={item.link}
                    activeClass="active"
                    className="p-3 text-white-50"
                    spy={true}
                    offset={-75}
                    smooth={true} duration={50}>
            {item.link}
          </Link>
        </li>)}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='d-md-none hamburger'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'd-none'
            : 'd-md-none mobile-menu position-absolute top-0 start-0 w-100 bg-dark d-flex flex-column justify-content-center align-items-center'
        }
      >.
                {navbar_data.map((item,index)=>
                <li key={index} className='py-6 fs-1' onClick={()=>setMenu(prev=>!prev)}>
                <Link to={item.link}
                activeClass="active"
                spy={true}
                offset={-100}
                onClick={()=>setNav(prev=>!prev)}
                smooth={true} duration={500}>
                {item.link}
                </Link>
                </li>
                )}
      </ul>

      {/* Social icons */}

      <div className='d-lg-flex position-fixed flex-column social-icons-head start-0'>
        <ul className='social-icons'>
            <li className='p-0 bg-transparent arrow-bar d-flex justify-content-around align-items-center'>
            <Button
              className={`not-show  d-flex justify-content-between align-items-center`}
              onClick={()=>setMenu(prev=>!prev)}
            >
               <AiOutlineArrowLeft className={`${Menu ?"rotate-button":""}`}size={20}/>
            </Button>
          </li>

            {
                social_data.map((item,index)=>
                <li style={{translate:Menu && "-1000px 0px"}} className={`p-2 ${item.media} d-flex justify-content-between align-items-center`} key={index}>
                    <a
                    className='d-flex justify-content-around align-items-center w-100 text-white fw-bold'
                    href={item.media==="Email"?"#":item.link}
                    onClick={item.media==="Email"?handleGmailButtonClick:()=>{}}
                    target="_blank"
                    download={item.media==="Resume"?"Menjith_resume.pdf":undefined}
                    >
                        {item.media}
              {item.media==="Linkedin" && <FaLinkedin size={30} />}
              {item.media==="Github" && <FaGithub size={30} />}
              {item.media==="Email" && <HiOutlineMail size={30} />}
              {item.media==="Resume" && <BsFillPersonLinesFill size={30} />}
            </a>
                </li>
                    
                )
            }
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
