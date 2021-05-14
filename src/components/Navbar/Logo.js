import React from 'react'
import styled from 'styled-components'
import sprite from '../../sprite.svg'

const StyledLogo = styled.svg`
  fill: #232127;
  width: 6em;
  height: 3em;
`

const Logo = () => {
  return (
    <StyledLogo>
      <use href={sprite + '#logo'} />
    </StyledLogo>
  )
}

export default Logo
