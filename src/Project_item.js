import React from 'react'
import { useEffect } from 'react';
import './Project_item.css';


const Project_item = ({project_image,link,project_heading,project_description,tech}) => {


    
 
    

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            entry.target.classList.add('active');
          } else {
            
            entry.target.classList.remove('active');
          }
        });
      },
      {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.25, 
      }
    );

    
    sections.forEach((section) => observer.observe(section));

    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

      
      
      

      
      


 
    



  return (
    <section className='sec '>
        <a href={link} target='blank'><img src={project_image} alt="project image" className='animate'/></a>

        <div className='project_info'>
        <h3 >{project_heading}</h3>
        <p>{project_description}</p>
        <h3><pre>{tech}</pre></h3>
        </div>

    </section>
  )
}

export default Project_item