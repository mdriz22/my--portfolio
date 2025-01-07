import React from 'react'
import { useEffect } from 'react';
import './Project_item.css';


const Project_item = ({project_image,link,project_heading,project_description,tech}) => {


    
 
    

    useEffect(() => {
        const sections = document.querySelectorAll('section');
      
        const handleScroll = () => {
          const top = window.scrollY;
          
          sections.forEach((sect) => {
            const offsetTop = sect.offsetTop+ window.innerHeight * 0.25;
            const offsetBottom = sect.offsetTop + sect.offsetHeight;
      
            // If the top of the section has scrolled past the top of the viewport
            if (top >= offsetBottom) {
              sect.classList.add('active');
            } else if (top < offsetTop + sect.offsetHeight && top + window.innerHeight > offsetTop) {
              // Add .active if the section is in the visible area
              sect.classList.remove('active');
            }
          });
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
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