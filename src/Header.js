import React from 'react'
import './Header.css';
import bgremovedpp from './Image/bgremovedpp.png';
import linkedin  from './Icon/linkedin.svg';
import github from './Icon/github.svg';
import oval from './Icon/oval.svg';

const Header = () => {
  return (
    <div className= 'Header'>

     <div className='hdrsname'> <h3>mohamedriyaz</h3></div>
      <div className='hdrname'>
     <h1>Nice to meet you!<br/>I'm Mohamed Riyaz</h1></div>
     <div className='hdrline'></div>


     <div className='block2'>
     <div className='hdrlinkedin'>
     <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} className="llogo"alt='linkedinlogo'/>
      </a>
     </div>

     <div className='hdrgithub'>
     <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
      <img src={github} className="glogo"alt='githublogo'/>
      </a>
     </div>

     <div className='hdrdpbackg'>
     </div>

     <div className="image-container">
        <img src={bgremovedpp} alt="Description of the image" />
    </div>

    </div>

     <div className='hdrbio'>
      <p className='justified-paragraph'>Experienced frontend developer with a strong programming background. Committed to continuous learning, I aspire to leverage my skills in web development to build a successful career. Passionate about crafting intuitive and visually appealing user interfaces.</p>
     </div>
     
     <div className='hdrcontact'>
      <a>CONTACT ME</a>
       </div>

       <div className='hdrcline'></div>

       <div className='hdroval1'>
        <img src={oval} alt="oval" className='ho1'/>
       </div>

       <div className='hdroval2'>
        <img src={oval} alt="oval" className='ho2'/>
       </div>
      
       <div className='hdroval3'>
        <img src={oval} alt="oval" className='ho3'/>
       </div>
      
       <div className='hdroval4'>
        <img src={oval} alt="oval" className='ho4'/>
       </div>

       <div className='hdroval5'>
        <img src={oval} alt="oval" className='ho5'/>
       </div>

    </div>
  )
}

export default Header