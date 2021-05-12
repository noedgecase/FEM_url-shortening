import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import HeaderSection from './HeaderSection'
import URLInputBox from './URLInputBox'

const StyledApp = styled.div`
  padding: 1em;
`

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <HeaderSection />
      <URLInputBox />
    </StyledApp>
  )
}

export default App
