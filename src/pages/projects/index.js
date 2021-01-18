import React from 'react'
import HomeButton from '../../components/homeButton'
import bethehero from '../../images/print1.png'
import './styles.css'

export default function Projects() {
  return (
    <div className='flexDivCenter'>
      <HomeButton />


      <a className='card withoutTextDecoration' href='https://github.com/FelipeBockMagagnin/BeTheHero' target='__blank' >
        <img src={bethehero} className='cardImage' />

        <div className='cardBody'>
          BeTheHero

          <div className='tagContainer'>
            <div className='tag'>
              Node.js
            </div>

            <div className='tag'>
              React
            </div>

            <div className='tag'>
              React Native
            </div>

            <div className='tag'>
              Expo
            </div>
          </div>

        </div>
      </a>
    </div>
  );
}