import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import HeaderSection from './HeaderSection'
import URLInputBox from './URLInputBox'
import AdvanedSection from './AdvancedSection'
import Footer from './Footer'

const StyledApp = styled.div`
  padding: 0;
`

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <HeaderSection />
      <URLInputBox />
      <AdvanedSection />
      <Footer />
    </StyledApp>
  )
}

export default App
