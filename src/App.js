import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import HeaderSection from './components/Sections/HeaderSection'
import AdvanedSection from './components/Sections/AdvancedSection'
import Footer from './components/Footer/Footer'

const StyledApp = styled.main`
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  max-width: 2400px;
  margin: 0 auto;
  padding: 0;
`

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <HeaderSection />
      <AdvanedSection />
      <Footer />
    </StyledApp>
  )
}

export default App
