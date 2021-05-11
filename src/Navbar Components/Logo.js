import React from 'react'
import sprite from '../images/sprite.svg'

const Logo = () => {
  const logo = {
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
