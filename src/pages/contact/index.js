import React from 'react'
import HomeButton from '../../components/homeButton';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact(){
  return (
    <div className='flexDivCenter'>
      <HomeButton />
      <div>
        <div style={{flex: 1}}>
          <FiMail /> 
          <label>felipebmagagnin@gmail.com</label>
        </div>

        <br></br>

        <div style={{flex: 1, color: 'white'}}>
          <a href='https://www.linkedin.com/in/felipe-magagnin/' target='__blank' className='withoutTextDecoration' > <FiLinkedin color='white'/> </a>
          <a href='https://github.com/FelipeBockMagagnin' target='__blank' className='withoutTextDecoration' > <FiGithub color='white'/> </a>
        </div>
      </div>
      
    </div>
  );
}