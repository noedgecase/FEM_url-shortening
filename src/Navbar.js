import React, { useState } from 'react'
import styled from 'styled-components'
import Burger from './Navbar Components/Burger'
import Logo from './Navbar Components/Logo'
import MobileMenu from './Navbar Components/MobileMenu'

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
