import React from 'react'
import styled from 'styled-components'
import formMobileBackground from './images/bg-shorten-mobile.svg'
import formDesktopBackground from './images/bg-shorten-desktop.svg'

const StyledFormContainer = styled.section`
  margin: 0 auto;
  padding: 1em;
  width: clamp(5em, 90%, 40em);
  position: relative;
  top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${formMobileBackground});
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 0.8em;
  @media screen and (min-width: 780px) {
    top: 4rem;
    padding: 2em;
    width: clamp(5em, 70%, 90em);
    background-image: url(${formDesktopBackground});
    background-position: center;
    background-size: cover;
  }
`

const StyledURLInputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  input[type='text'] {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4em;
    border-radius: 0.4em;
    margin: 0 0 0.5em 0;
    padding: 0.8em;
    border: none;
    ::placeholder {
      color: hsl(257, 7%, 63%);
    }
  }
  input[type='submit'] {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    width: 100%;
    border: none;
    background-color: hsl(180, 66%, 49%);
    padding: 0.8em;
    margin: 0.5em 0 0 0;
    border-radius: 0.4em;
    transition: transform 300ms;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transform: scale(1.05, 1.05);
      transition: transform 100ms;
    }
  }
  @media screen and (min-width: 780px) {
    flex-direction: row;
    input[type='text'] {
      margin: 0 0.5em 0 0;
      flex: 5;
    }
    input[type='submit'] {
      margin: 0 0 0 0.5em;
      flex: 1;
    }
  }
`

const URLInputForm = () => {
  return (
    <StyledFormContainer>
      <StyledURLInputForm>
        <input
          type='text'
          id='longUrl'
          name='longUrl'
          placeholder='Shorten a link here...'
        />
        <input type='submit' value='Shorten It!' />
      </StyledURLInputForm>
    </StyledFormContainer>
  )
}

export default URLInputForm
