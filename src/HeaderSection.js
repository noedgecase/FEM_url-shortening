import React from 'react'
import styled from 'styled-components'
// import sprite from './sprite.svg'
import working from './images/illustration-working.svg'

const StyledSection = styled.section`
  width: clamp(20em, 100%, 40em);
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 620px) {
    flex-direction: row-reverse;
    width: clamp(45em, 100%, 150em);
  }
`

const StyledImageContainer = styled.div`
  .working {
    position: relative;
    right: -5em;
    display: flex;
    width: clamp(380px, 20vw, 1600px);
    user-select: none;
    pointer-events: none;
    margin: 0;
  }
  @media screen and (min-width: 620px) {
    .working {
      width: clamp(420px, 50vw, 800px);
      height: auto;
      right: -5vw;
    }
  }
`

const StyledBodyContainer = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  h1 {
    color: hsl(260, 8%, 14%);
    font-weight: 700;
    text-align: center;
    font-size: clamp(2rem, 8vw, 3rem);
    margin: 0.5em auto;
    width: 15ch;
  }
  p {
    font-size: clamp(0.8rem, 5vw, 1rem);
    font-weight: 500;
    color: hsl(257, 7%, 63%);
    text-align: center;
    width: clamp(30ch, 80%, 50ch);
    padding: 1em;
    margin: 0 auto;
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    padding: 0.8em 3em;
    margin: 2em auto 2em auto;
    border: none;
    border-radius: 2em;
    background-color: hsl(180, 66%, 49%);
    transition: transform 300ms;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transform: scale(1.05, 1.05);
      transition: transform 100ms;
    }
  }

  @media screen and (min-width: 620px) {
    justify-content: left;
    align-items: flex-start;

    h1 {
      font-size: clamp(2rem, 8vw, 3rem);
      line-height: 1.2;
      text-align: left;
      margin: 1em auto 0.5em 3em;
    }
    p {
      text-align: left;
      width: clamp(30ch, 80%, 40ch);
      padding: 0;
      margin: 0;
    }
    button {
      margin: 1.5em 0;
    }
  }
`

const HeaderSection = () => {
  return (
    <StyledSection>
      <StyledImageContainer>
        {/* If the image is imported from sprite it does not load correctly (gradients disappear), double checked the svg source, remade the sheet, same result.*/}
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
