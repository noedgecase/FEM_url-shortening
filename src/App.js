import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import HeaderSection from './components/Sections/HeaderSection'
import URLInputBox from './components/Sections/URLInputBox'
import AdvanedSection from './components/Sections/AdvancedSection'
import Footer from './components/Footer/Footer'

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
