import React from 'react';
import './Skill.css';
import html from './Icon/html-5.svg'
import css from './Icon/css3.svg'
import js from './Icon/javascript.svg'
import react from './Icon/react.svg'

const Skill = () => {
  return (
    <div className='Skill'> 
    
    <div className='skline'> </div>

    <div className='skill-cont'>
      <div className='row1'>
     <p className='s1'style={{ display: 'flex', alignItems: 'center' }}><img src={html} alt='HTML-5 logo'/>HTML</p>
      <p className='s2'style={{ display: 'flex', alignItems: 'center' }}><img src={css} alt='HTML-5 logo'/>CSS</p>
      </div>
      <div className='row2'>
      <p className='s3'style={{ display: 'flex', alignItems: 'center' }}><img src={js} alt='HTML-5 logo'/>JAVASCRIPT</p>
      <p className='s4'style={{ display: 'flex', alignItems: 'center' }}><img src={react} alt='HTML-5 logo'style={{width:'48px'}}/>REACT</p>
      </div>

    </div>
    

    </div>
  )
}

export default Skill