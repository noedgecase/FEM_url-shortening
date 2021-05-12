import React from 'react'
import styled from 'styled-components'
import boostBackground from './images/bg-boost-mobile.svg'

const StyledFooter = styled.footer``
const StyledTopSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em 0;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${boostBackground});
  background-repeat: no-repeat;
  background-position: center right;
  h1 {
    text-align: center;
    color: white;
    font-size: 1.5rem;
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    padding: 0.8em 3em;
    margin: 1em auto;
    border: none;
    border-radius: 2em;
    background-color: hsl(180, 66%, 49%);
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTopSide>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </StyledTopSide>
    </StyledFooter>
  )
}

export default Footer
