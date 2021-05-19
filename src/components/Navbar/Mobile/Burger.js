import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
  height: 16px;
  width: 20px;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 780px) {
    display: none;
  }
  span {
    display: block;
    position: absolute;
    height: 4px;
    background-color: hsl(0, 0%, 75%);
    opacity: 1;
    left: 0;
    transition: 250ms ease-in-out;
    width: 100%;
    transform-origin: left center;
    border-radius: 2px;

    &:nth-child(1) {
      top: 0;
      transform: ${({ open }) => (open ? 'rotate(35deg)' : 'rotate(0deg)')};
      width: ${({ open }) => (open ? '106%' : '100%')};
    }
    &:nth-child(2) {
      top: 6px;
      opacity: ${({ open }) => (open ? '0' : '1')};
      width: ${({ open }) => (open ? '0' : '100%')};
    }
    &:nth-child(3) {
      bottom: 0;
      transform: ${({ open }) => (open ? 'rotate(-35deg)' : 'rotate(0deg)')};
      width: ${({ open }) => (open ? '106%' : '100%')};
    }
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Hamburger
