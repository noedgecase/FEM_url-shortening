import React from 'react'
import styled from 'styled-components'
import mobileBoostBackground from '../../images/bg-boost-mobile.svg'
import desktopBoostBackground from '../../images/bg-boost-desktop.svg'
import sprite from '../../sprite.svg'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`
const StyledTopSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em 0;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${mobileBoostBackground});
  background-repeat: no-repeat;
  background-position: center right;

  h2 {
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
    transition: transform 300ms, background-color 300ms, box-shadow 300ms;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
      transform: scale(1.05, 1.05);
      transition: transform 100ms, background-color 300ms, box-shadow 100ms;
      box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.3);
    }
  }
  @media screen and (min-width: 780px) {
    background-image: url(${desktopBoostBackground});
    background-position: center;
    background-size: cover;
    padding: 2em;
    h2 {
      text-align: center;
      color: white;
      font-size: 2.3rem;
    }
  }
`

const StyledBottomSide = styled.div`
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: hsl(260, 8%, 14%);

  .logo {
    width: 100px;
    height: 30px;
    fill: white !important;
    margin: 1em auto;
  }
  .links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .section {
      margin: 1em 2em;
      h3 {
        text-align: center;
        color: white;
        margin: 0 auto 1em auto;
        font-size: 1.2rem;
      }
      ul {
        margin: 0.5em auto;
        li {
          cursor: pointer;
          text-align: center;
          list-style: none;
          margin: 0.2em 0;
          color: hsl(257, 7%, 63%);
          transition: color 200ms;
          &:hover {
            color: hsl(180, 66%, 49%);
            transition: color 100ms;
          }
        }
      }
    }
  }
  .socials-container {
    margin: 2em auto 0 auto;
    display: flex;
    .icon {
      fill: white;
      margin: 0.5em;
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: fill 200ms;
      &:hover {
        fill: hsl(180, 66%, 49%);
        transition: fill 100ms;
      }
    }
  }
  @media screen and (min-width: 560px) {
    .links-container {
      flex-direction: row;
      align-items: flex-start;
    }
  }
  @media screen and (min-width: 960px) {
    padding: 5em 2vw;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    .logo {
      flex: 1;
    }
    .links-container {
      flex: 2;
      justify-content: center;
      flex-direction: row;
      align-items: flex-start;
      .section {
        margin: 0 2vw;
        min-width: 130px;
      }
    }
    .socials-container {
      flex: 1;
      margin: 0 auto;
      justify-content: center;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTopSide>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </StyledTopSide>
      <StyledBottomSide>
        <svg className='logo'>
          <use href={sprite + '#logo'} />
        </svg>
        <div className='links-container'>
          <div className='section'>
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className='section'>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className='section'>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className='socials-container'>
          <svg className='icon'>
            <use href={sprite + '#icon-facebook'} />
          </svg>
          <svg className='icon'>
            <use href={sprite + '#icon-twitter'} />
          </svg>
          <svg className='icon'>
            <use href={sprite + '#icon-pinterest'} />
          </svg>
          <svg className='icon'>
            <use href={sprite + '#icon-instagram'} />
          </svg>
        </div>
      </StyledBottomSide>
    </StyledFooter>
  )
}

export default Footer
