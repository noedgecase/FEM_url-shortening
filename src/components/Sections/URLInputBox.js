import React, { useState } from 'react'
import styled from 'styled-components'
import formMobileBackground from '../../images/bg-shorten-mobile.svg'
import formDesktopBackground from '../../images/bg-shorten-desktop.svg'

const StyledContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  bottom: 75px;
`

const StyledInputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1em;
  width: clamp(5em, 90%, 1400px);
  background-color: hsl(257, 27%, 26%);
  background-image: url(${formMobileBackground});
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 0.8em;
  @media screen and (min-width: 780px) {
    top: 4rem;
    padding: 2em;
    width: clamp(730px, 70%, 90em);
    background-image: url(${formDesktopBackground});
    background-position: center;
    background-size: cover;
  }
`

const StyledURLInputForm = styled.div`
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
    overflow: hidden;
    ::placeholder {
      color: hsl(257, 7%, 63%);
    }
  }
  button {
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
    transition: background-color 300ms, transform 200ms;
    pointer-events: all;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transition: background-color 300ms;
    }
  }
  @media screen and (min-width: 780px) {
    flex-direction: row;
    input[type='text'] {
      margin: 0 0.5em 0 0;
      flex: 5;
    }
    button {
      margin: 0 0 0 0.5em;
      flex: 1;
      &:hover {
        transform: scale(1.05, 1.05);
        transition: transform 200ms;
      }
    }
  }
`

const StyledGeneratedLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4em;
  text-align: center;
  width: clamp(5em, 100%, 40em);
  margin: 1em auto 0.5em auto;
  height: 4em;
  padding: 0 0 0 2em;
  background-color: #fff;
  .link-button {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .initial-link {
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    width: clamp(10ch, 100%, 40ch);
    color: hsl(257, 27%, 26%);
  }
  .new-link {
    color: hsl(180, 66%, 49%);
    text-align: center;
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    border: none;
    background-color: hsl(180, 66%, 49%);
    padding: 0.4em 2em;
    margin: 0 1em;
    border-radius: 0.2em;
    transition: background-color 300ms, transform 200ms;
    pointer-events: all;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transition: background-color 300ms;
    }
  }
`

const URLInputForm = () => {
  let [linkInput, setLinkInput] = useState('')
  let [newLink, setNewLink] = useState('')
  const [longLink, setLongLink] = useState('')

  const updateInput = (e) => {
    setLinkInput(e.target.value)
  }

  ////////// API fetch //////////
  ///////////////////////////////
  const shortenLink = async () => {
    // add generatedLink component
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${linkInput}`
      )
      const data = await response.json()
      newLink = setNewLink(data.result?.short_link2 || data.error)
      // remove loading animation
    } catch (error) {
      console.error(error)
    }
    setLongLink(linkInput)
    setLinkInput('')
  }
  ////////////////////////////////

  return (
    <StyledContainer>
      <StyledInputBox>
        <StyledURLInputForm>
          <input
            type='text'
            id='longUrl'
            name='longUrl'
            onChange={updateInput}
            value={linkInput}
            placeholder='Shorten a link here...'
          />
          <button onClick={shortenLink} id='shorten-btn'>
            Shorten it!
          </button>
        </StyledURLInputForm>
      </StyledInputBox>
      {/* asta de jos trebuie sa se construiasca cu fiecare link nou generat */}
      <StyledGeneratedLink className='hidden'>
        <h3 className='initial-link'>{longLink}</h3>
        <div className='link-button'>
          <h3 className='new-link'>{newLink}</h3>
          <button id='copy-btn'>Copy</button>
        </div>
      </StyledGeneratedLink>
      {/*  */}
    </StyledContainer>
  )
}

export default URLInputForm
