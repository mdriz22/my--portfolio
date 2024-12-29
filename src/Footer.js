import React from 'react'
import './Footer.css'
import linkedin  from './Icon/linkedin.svg';
import github from './Icon/github.svg';
import oval from './Icon/oval.svg';
import { useState ,useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Footer = () => {

 
 const [formValue , setFormValue]=useState({
  username : "" ,
  email : "" ,
  msg : ""
 })

 const[error , setError] = useState({})

 const [submitted , setSubmitted]=useState(false)




 const handleInput = (e)=>{
  const {name ,value} = e.target
  setFormValue({...formValue , [name]:value})
 }


 const handleSubmit =(e)=>{
  e.preventDefault()
  const errorValidation ={}

  if(!formValue.username.trim() ){
    errorValidation.username="name is required"
  }
  
  if(!formValue.email.trim()){
    errorValidation.email="email is requried"
  }
  else if(! /\S+@\S+\.\S+/.test(formValue.email)){
    errorValidation.email="Invalid input"
  }

  if(! formValue.msg){
    errorValidation.msg="messsage is requried"
  }

  setError(errorValidation)
 
  if(Object.keys(errorValidation).length === 0){
    sendEmail();
   }

  

  }   


  useEffect(() => {
    const nameline = document.getElementById('fnameline');
    const emailline = document.getElementById('femailline');
    const msgline = document.getElementById('fmsgline');

    if (error.username) {
      nameline.classList.replace('fnameline', 'fnamelineerr');
    } else {
      nameline.classList.replace('fnamelineerr', 'fnameline');
    }

    if (error.email) {
      emailline.classList.replace('femailline', 'femaillineerr');
    } else {
      emailline.classList.replace('femaillineerr', 'femailline');
    }

    if (error.msg) {
      msgline.classList.replace('fmsgline', 'fmsglineerr');
    } else {
      msgline.classList.replace('fmsglineerr', 'fmsgline');
    }
  }, [error]);



  const form = useRef();

  const sendEmail = () => {
    

    emailjs
      .sendForm('service_a6wk589', 'template_rgd609s', form.current, {
        publicKey: 'AP9PMZwsm9mIUdjcI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("message sent")
          setFormValue({ username: '', email: '', msg: '' });
          setSubmitted(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      }

      

  return (
    <div className='Footer' id="Footer">
      
      <div className='fcont'>
      <h1> Contact </h1>
      </div>

      <div className='ftword'>
       <p className='justified-paragraph'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      </div>

     {!submitted ?(
      <div className='fformdiv'>
        <form id="form" ref={form} onSubmit={handleSubmit} >
          
          <div className='NAME-GROUP'>
          <input type='text' placeholder='NAME' name="username" className='f' id='formname' autoComplete="off"  noValidate
          onChange={handleInput}/>
          <div className='fnameline' id="fnameline"></div>
          {error.username && <span className='errormsgname' >{error.username}</span>}
          </div>
          
          <div className='EMAIL-GROUP'>
          <input type='text' placeholder='EMAIL' name="email" className='f' id="formemail" autoComplete="off"  noValidate
          onChange={handleInput}/>
          <div className='femailline' id="femailline"></div>
          {error.email && <span className='errormsgemail' >{error.email}</span>}
          </div>

          <div className='MSG-GROUP'> 
          <textarea rows="4" cols="50" placeholder='MESSAGE' name="msg" className='f' id="formmsg" autoComplete="off"  noValidate onChange={handleInput}></textarea>
          <div className='fmsgline' id="fmsgline"></div>
          {error.msg && <span className='errormsgmsg' >{error.msg}</span>}
          </div>

           <br/><br/>
          <button type='submit' className='fbtn'>SEND MESSAGE</button>
          <div className='fbtnline'></div>
        </form>

      </div>
     ):(
      <div className='submitted-msg-div'>
      <h2 className='submitted-msg'>Thanks for submittion</h2></div>
      )} 
      
      <div className='ftroval1'>
        <img src={oval} alt="oval" className='ho1'/>
       </div>

       <div className='ftroval2'>
        <img src={oval} alt="oval" className='ho2'/>
       </div>
      
       <div className='ftroval3'>
        <img src={oval} alt="oval" className='ho3'/>
       </div>
      
       <div className='ftroval4'>
        <img src={oval} alt="oval" className='ho4'/>
       </div>

       <div className='ftroval5'>
        <img src={oval} alt="oval" className='ho5'/>
       </div>

      <div className='ftlline'></div>

      <div className='ftrsname'> <h3>mohamedriyaz</h3></div>

      <div className='ftrlinkedin'>
     <a href="https://www.linkedin.com/in/mohamed-riyaz-53456123a" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} className="llogo"alt='linkedinlogo'/>
      </a>
     </div>

     <div className='ftrgithub'>
     <a href="https://www.github.com/mdriz22" target="_blank" rel="noopener noreferrer">
      <img src={github} className="glogo"alt='githublogo'/>
      </a>
     </div>
      
      </div>
  )
}

export default Footer