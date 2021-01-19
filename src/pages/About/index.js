import React from 'react'
import HomeButton from '../../components/homeButton'

export default function About(){
  return (
    <div className='flexDivCenter'>
      <HomeButton />
      <div className='w-70'>
        Meu nome é <span className='colorGradient'>Felipe Bock Magagnin</span>. 
        <br></br>
        <br></br>
        Sou um desenvolvedor <span className='colorGradient'>Full Stack</span> apaixonado por Web e Mobile. 
        <br></br>
        <br></br>
        Estou cursando <span className='colorGradient'>'Análise e Desenvolvimento de Sistemas'</span> no IFRS.
        <br></br>
        <br></br>
        Adoro desenvolver <span className='colorGradient'>aplicações</span> e estudar novas <span className='colorGradient'>tecnologias</span> em minhas horas vagas.
      </div>
    </div>
  );
}