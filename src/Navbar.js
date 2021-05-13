import React, { useState } from 'react'
import styled from 'styled-components'
import Burger from './Navbar Components/Burger'
import Logo from './Navbar Components/Logo'
import MobileMenu from './Navbar Components/MobileMenu'

const StyledNav = styled.nav`
  width: clamp(5em, 90%, 80em);
  margin: 0 auto;
  padding: 1em;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 960px) {
    width: clamp(5em, 70%, 80em);
  }
`

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledNav>
      <Logo />
      <MobileMenu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </StyledNav>
  )
}

export default Navbar
