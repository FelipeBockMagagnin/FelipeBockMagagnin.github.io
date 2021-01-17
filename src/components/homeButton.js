import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

export default function HomeButton(){
  return (
    <Link  to='/' style={{position:'absolute', left: 40, top: 40}} >
      <FiHome size='30' color='white' title='home' />
    </Link>
  )
}

