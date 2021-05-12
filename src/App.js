import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import HeaderSection from './HeaderSection'

const StyledApp = styled.div`
  padding: 1em;
`

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <HeaderSection />
    </StyledApp>
  )
}

export default App
