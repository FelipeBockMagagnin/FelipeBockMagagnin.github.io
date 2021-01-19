import React from 'react'
import HomeButton from '../../components/homeButton'
import bethehero from '../../images/print1.png'
import dinheiroAgora from '../../images/dinheiroagora.png'
import nodejsadvanced from '../../images/nodejs-advanced.png'
import estewebsite from '../../images/Estewebsite.png'
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
  },
  {
    nome: 'Dinheiro Agora',
    image: dinheiroAgora,
    link: 'https://github.com/FelipeBockMagagnin/DinheiroAgora-App',
    tags: ['React Native', 'Expo', 'JavaScript']
  },
  {
    nome: 'Node.js Avançado',
    image: nodejsadvanced,
    link: 'https://github.com/FelipeBockMagagnin/DinheiroAgora-App',
    tags: ['Express', 'Node', 'TDD', 'Typescript', 'Design Patterns']
  },
  {
    nome: 'Portfólio',
    image: estewebsite,
    link: 'https://github.com/FelipeBockMagagnin/FelipeBockMagagnin.github.io',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', "Responsividade"]
  },

]