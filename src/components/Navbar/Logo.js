import React from 'react'
import styled from 'styled-components'
import sprite from '../../sprite.svg'

const StyledLogo = styled.svg`
  fill: #232127;
  width: 6em;
  height: 3em;
  @media screen and (min-width: 780px) {
    width: 10em;
    height: 3em;
    margin: 0 1em;
  }
`

const Logo = () => {
  return (
    <StyledLogo>
      <use href={sprite + '#logo'} />
    </StyledLogo>
  )
}

export default Logo
