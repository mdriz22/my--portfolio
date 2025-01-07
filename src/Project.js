import React from 'react'
import './Project.css';
import Project_item from './Project_item';
import project1 from './Image/Portfolio_project_1.png'
import project2 from './Image/sample_form_project2.png'
import project3 from './Image/qr_code_Generator_project3.png'


const Project = ()=>{
    return(
        <div className='Project'>
            
       <div className="prjt_head">
        <h2>Projects</h2>
       </div>

         <div className="prjt_body">

          <Project_item
          project_image={project1}
          link=""
          project_heading="Portfolio"
          project_description="A personal portfolio website showcasing projects, skills, and contact information."
          tech="HTML CSS JavaScript React"
          
          />
          <Project_item
          project_image={project2}
          link="https://mdriz22.github.io/sample_form/"
          project_heading="Sample Form"
          project_description=" A responsive React contact form that collects user details with real-time validation and feedback."
          tech="HTML Bootstrap JavaScript React"
          
          />
          <Project_item
          project_image={project3}
          link="https://mdriz22.github.io/qr_code_generator/"
          project_heading="QR Code Generator"
          project_description="A React-based QR Code generator that allows users to create custom QR codes from text or URLs."
          tech="HTML Bootstrap JavaScript React"
          
          />
          

         </div>


        </div>
    )
} 
   export default Project
