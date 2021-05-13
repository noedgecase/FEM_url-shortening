import React from 'react'
import sprite from '../sprite.svg'

const Logo = () => {
  const logo = {
    fill: '#232127',
    width: '6em',
    height: '3em',
  }

  return (
    <svg style={logo}>
      <use href={sprite + '#logo'} />
    </svg>
  )
}

export default Logo
