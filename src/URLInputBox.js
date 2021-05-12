import React from 'react'
import styled from 'styled-components'
import formBackground from './images/bg-shorten-mobile.svg'

const StyledFormContainer = styled.section`
  position: relative;
  top: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${formBackground});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: contain;
  border-radius: 1em;
`

const StyledURLInputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
  input[type='text'] {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4em;
    border-radius: 0.4em;
    margin: 0.5em 0;
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
    margin: 0.5em 0;
    border-radius: 0.4em;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
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
