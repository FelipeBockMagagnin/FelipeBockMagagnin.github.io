import React from 'react'
import HomeButton from '../../components/homeButton'
import bethehero from '../../images/print1.png'
import './styles.css'

export default function Projects() {
  return (
    <div className='flexDivCenter'>
      <HomeButton />

      {projects.map(project => {
        console.log(project)
        return (
          <a className='card withoutTextDecoration' href={project.link} target='__blank' >
            <img src={project.image} className='cardImage' alt='project' />
            <div className='cardBody mt-3'>
              {project.nome}
              <div className='tagContainer mt-5'>
                {project.tags.map(tag => {
                  return <div className='tag' >{tag}</div>
                })}
              </div>
            </div>
          </a>
        )
      })}
    </div>
  );
}

const projects = [
  {
    nome: 'Be The Hero',
    image: bethehero,
    link: 'https://github.com/FelipeBockMagagnin/BeTheHero',
    tags: ['Node.js', 'React', 'React Native', 'Expo']
  }
]