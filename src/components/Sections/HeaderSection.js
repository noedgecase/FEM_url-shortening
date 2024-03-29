import React from 'react'
import styled from 'styled-components'
// import sprite from './sprite.svg'
import working from '../../images/illustration-working.svg'

const StyledSection = styled.section`
  position: relative;
  height: clamp(35em, 70vw, 45em);
  width: clamp(20em, 100%, 1600px);
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (min-width: 520px) {
    height: clamp(20em, 50vw, 30em);
    margin: 0 auto 5vw auto;
  }
`

const StyledImageContainer = styled.div`
  .working {
    position: absolute;
    right: -5em;
    top: 0;
    display: flex;
    width: clamp(380px, 70vw, 800px);
    height: auto;
    user-select: none;
    pointer-events: none;
    margin: 0;
  }
  @media screen and (min-width: 520px) {
    .working {
      right: -10em;
    }
  }
`

const StyledBodyContainer = styled.div`
  position: absolute;
  top: 15em;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  h1 {
    color: hsl(260, 8%, 14%);
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin: 1em auto 0.5em auto;
    width: 15ch;
  }
  p {
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    font-weight: 500;
    color: hsl(257, 7%, 63%);
    text-align: center;
    width: clamp(30ch, 60%, 40ch);
    /* padding: 1em; */
    margin: 0 auto;
  }
  button {
    user-select: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    padding: 0.8em 3em;
    margin: 2em auto;
    border: none;
    border-radius: 2em;
    background-color: hsl(180, 66%, 49%);
    transition: transform 300ms, background-color 600ms, box-shadow 300ms;
    &:active {
      background-color: hsl(257, 7%, 63%);
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        cursor: pointer;
        background-color: hsl(180, 72%, 80%);
        transform: scale(1.05, 1.05);
        transition: transform 100ms, background-color 300ms, box-shadow 100ms;
        box-shadow: 0 5px 15px hsla(0, 0%, 18%, 0.2);
      }
      &:active {
        background-color: hsl(257, 7%, 63%);
      }
    }
  }

  @media screen and (min-width: 520px) {
    padding: 0 7vw;
    width: 50%;
    top: 4vw;
    left: 0;
    h1 {
      text-align: left;
      margin: 0 0 1rem 0;
    }
    p {
      text-align: left;
      margin: 0 0 2rem 0;
      width: clamp(30ch, 100%, 80ch);
    }
    button {
      margin: 0 auto 0 0;
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
