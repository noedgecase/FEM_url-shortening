import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.div`
  z-index: 1;
  font-weight: 700;
  top: 4em;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: hsl(257, 27%, 26%);
  border-radius: 1em;
  width: 100%;
  padding: 0 0 2em 0;
  user-select: none;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transform: ${({ open }) => (open ? 'translateY(0px)' : 'translateY(-50px)')};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
  transition: opacity 300ms 150ms ease-out, transform 400ms ease-in-out;
  ul {
    margin: 1em auto;
    li {
      text-align: center;
      color: white;
      list-style: none;
      margin: 1.5em 0 0 0;
      &:hover {
        cursor: pointer;
        color: hsl(0, 0%, 75%);
      }
    }
  }
`

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  div {
    background-color: hsl(0, 0%, 75%);
    height: 1px;
    width: 80%;
    margin: 1em auto;
    opacity: 0.2;
  }
  a {
    margin: 1em auto 0 auto;
    text-decoration: none;
    color: white;
    &:hover {
      color: hsl(0, 0%, 75%);
    }
  }
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    padding: 0.8em;
    margin: 1em auto;
    border: none;
    border-radius: 2em;
    background-color: hsl(180, 66%, 49%);
    width: 80%;
    &:hover {
      cursor: pointer;
      background-color: hsl(180, 72%, 80%);
    }
  }
`

const MobileMenu = (props) => {
  return (
    <StyledMenu open={props.open}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <StyledLogin>
        <div />
        <a href='/#'>Login</a>
        <button>Sign Up</button>
      </StyledLogin>
    </StyledMenu>
  )
}

export default MobileMenu
