import React, { useState } from 'react'
import styled from 'styled-components'
import formMobileBackground from '../../images/bg-shorten-mobile.svg'
import formDesktopBackground from '../../images/bg-shorten-desktop.svg'
import sprite from '../../sprite.svg'

const StyledContainer = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  position: relative;
  bottom: 75px;

  .visible {
    opacity: 1 !important;
    transition: opacity 350ms ease-in-out, min-height 400ms ease-in-out,
      max-height 400ms ease-in-out;
    max-height: 28px !important;
    min-height: 28px !important;
  }
  .red-border {
    input[type='text'] {
      border: 3px solid hsl(0, 87%, 67%);
    }
  }
  .unclickable {
    pointer-events: none;
  }
  .unclickable-button {
    background-color: hsl(257, 7%, 63%);
    pointer-events: none;
  }
`

const StyledInputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0.5em 1.5em;
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

const StyledURLInputForm = styled.form`
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 1em 0;
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
    border: 3px solid transparent;
    transition: border 200ms;
    ::placeholder {
      user-select: none;
      color: hsl(257, 7%, 63%);
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    width: 100%;
    min-height: 50px;
    border: none;
    background-color: hsl(180, 66%, 49%);
    padding: 0.8em;
    margin: 0.5em 0 0 0;
    border-radius: 0.4em;
    transition: background-color 300ms, transform 200ms;
    pointer-events: all;
    &:active {
      background-color: hsl(257, 7%, 63%);
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        cursor: pointer;
        background-color: hsl(180, 72%, 80%);
        transform: scale(1.05, 1.05);
        transition: transform 100ms, background-color 300ms, box-shadow 100ms;
        box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.4);
      }
    }
  }
  #error-message {
    user-select: none;
    color: hsl(0, 87%, 67%);
    font-weight: 500;
    font-style: italic;
    max-height: 0px;
    min-height: 0px;
    opacity: 0;
    transition: opacity 350ms ease-in-out, min-height 400ms ease-in-out,
      max-height 400ms ease-in-out;
    user-select: none;
  }
  .loading-animation {
    position: absolute;
    width: 40px;
    height: 40px;
    fill: white;
    animation: loading 1500ms linear infinite;
  }
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 780px) {
    padding: 0;
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
    #error-message {
      position: absolute;
      bottom: -32px;
      transition: opacity 350ms ease-in-out, min-height 400ms ease-in-out,
        max-height 400ms ease-in-out;
      min-height: 25px;
      max-height: 25px;
    }
  }
`

const StyledGeneratedLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4em;
  text-align: center;
  width: clamp(5em, 90%, 1400px);
  margin: 1em auto 0.5em auto;
  background-color: #fff;
  padding: 0 0 0.5em 0;
  h3 {
    font-size: 0.8rem;
    font-weight: 500;
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    border: none;
    background-color: hsl(180, 66%, 49%);
    padding: 0.4em 2em;
    margin: 0.5em;
    border-radius: 0.5em;
    transition: background-color 300ms, transform 200ms;
    width: clamp(8em, 80%, 25em);
    height: 3em;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transition: background-color 300ms;
    }
  }
  .link-button {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .initial-link {
    text-align: center;
    margin: 1em auto;
    flex: 2;
    padding: 0 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: clamp(10ch, 100%, 80ch);
    color: hsl(257, 27%, 26%);
  }
  .new-link {
    color: hsl(180, 66%, 49%);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1em;
  }
  .separator {
    width: 100%;
    height: 2px;
    background-color: hsla(0, 0%, 26.666666666666668%, 0.103);
  }
  .copied {
    background-color: hsl(257, 27%, 26%);
    user-select: none;
    pointer-events: none;
  }
  @media screen and (min-width: 780px) {
    width: clamp(730px, 70%, 90em);
    flex-direction: row;
    padding: 0.8em 1em;
    button {
      margin: 0 1em;
      width: clamp(8em, 90%, 10em);
    }
    .new-link {
      margin: 0 1em;
    }
    .separator {
      display: none;
    }
    .link-button {
      flex-direction: row;
    }
    .initial-link {
      text-align: left;
      margin: 0;
    }
  }
`

const URLInputBox = () => {
  let [linkInput, setLinkInput] = useState('')
  let [newLink, setNewLink] = useState('')
  const [longLink, setLongLink] = useState('')
  const [displayError, setDisplayError] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [copied, setCopied] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [renderTab, setRenderTab] = useState(false)

  const updateInput = (e) => {
    setLinkInput(e.target.value)
  }

  const copyClick = () => {
    navigator.clipboard.writeText(newLink)
    setCopied(true)
    setTimeout(function () {
      setCopied(false)
    }, 3000)
  }

  // render error message /////////
  const showError = () => {
    setDisplayError(true)
    setTimeout(function () {
      setDisplayError(false)
    }, 2000)
  }

  const errorCheck = (error) => {
    if (error) console.log(error.error)

    switch (error.error_code) {
      case 2:
        setErrorMessage('Invalid URL submitted')
        break
      case 4:
        setErrorMessage('IP Adress blocked')
        break
      case 6:
        setErrorMessage('Unknown Error')
        break
      case 10:
        setErrorMessage('Disallowed link')
        break
      default:
        setErrorMessage('Something went terribly wrong')
    }
    showError()
  }
  // /////////////////////////////////////

  const succesfulCall = (data) => {
    setRenderTab(true)
    setLongLink(linkInput)
    setNewLink(data.result.full_short_link2)
  }

  ////////// API fetch //////////
  const shortenLink = async (e) => {
    e.preventDefault()
    if (fetching) return false //to prevent requesting until response arrives
    if (displayError) return false //to prevent sending request while error is displayed
    if (linkInput.length === 0) {
      setErrorMessage('Please add a link')
      showError()
    } else {
      setFetching(true)
      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${linkInput}`,
          {
            method: 'GET',
            credentials: 'same-origin',
          }
        )
        const data = await response.json()
        data.result ? succesfulCall(data) : errorCheck(data)
      } catch (error) {
        console.log(error)
      }
      setLinkInput('')
      setFetching(false)
    }
  }

  ///////////////////////////////////

  return (
    <StyledContainer>
      <StyledInputBox className={displayError ? 'red-border' : null}>
        <StyledURLInputForm onSubmit={shortenLink}>
          <input
            type='text'
            aria-label='initial link to shorten'
            id='longUrl'
            name='longUrl'
            onChange={updateInput}
            value={linkInput}
            placeholder='Shorten a link here...'
            className={fetching ? 'unclickable' : null}
          />
          <h4 id='error-message' className={displayError ? 'visible' : null}>
            {errorMessage}
          </h4>
          <button
            type='button'
            onClick={shortenLink}
            className={`${fetching ? 'unclickable-button' : null} ${
              displayError ? 'unclickable-button' : null
            }`}
            id='shorten-btn'>
            {fetching ? (
              <svg className='loading-animation'>
                <use href={sprite + '#cog'} />
              </svg>
            ) : (
              'Shorten it!'
            )}
          </button>
        </StyledURLInputForm>
      </StyledInputBox>
      {renderTab ? (
        <StyledGeneratedLink className=''>
          <h3 className='initial-link'>{longLink}</h3>
          <div className='separator'></div>
          <div className='link-button'>
            <h3 className='new-link' id='generated-link'>
              {newLink}
            </h3>
            <button onClick={copyClick} className={copied ? 'copied' : null}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </StyledGeneratedLink>
      ) : null}
    </StyledContainer>
  )
}

export default URLInputBox
