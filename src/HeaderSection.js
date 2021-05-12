import React from 'react'
import styled from 'styled-components'
// import sprite from './sprite.svg'
import working from './images/illustration-working.svg'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const StyledImageContainer = styled.div`
  .working {
    width: 300px;
    user-select: none;
    pointer-events: none;
  }
`

const StyledBodyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: hsl(260, 8%, 14%);
    font-weight: 700;
    line-height: 1;
    text-align: center;
    font-size: 2rem;
    margin: 1em auto;
  }

  p {
    font-weight: 500;
    color: hsl(257, 7%, 63%);
    text-align: center;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    padding: 1em 3em;
    margin: 2em auto;
    border: none;
    border-radius: 2em;
    background-color: hsl(180, 66%, 49%);
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
    }
  }
`

const HeaderSection = () => {
  return (
    <StyledSection>
      <StyledImageContainer>
        {/* If I import the image through sprite it does not load correctly, double checked the svg source, remade the sheet, same result. */}
        {/* <svg className='working'>
        <use href={sprite + '#illustration-working'} />
      </svg> */}
        <img
          className='working'
          src={working}
          alt='illustration of a person working on computer'
        />
      </StyledImageContainer>
      <StyledBodyContainer>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </StyledBodyContainer>
    </StyledSection>
  )
}

export default HeaderSection
