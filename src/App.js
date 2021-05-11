import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const StyledApp = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
  padding: 1em;
  font-family: 'Poppins', sans-serif;
`

const App = () => {
  return (
    <StyledApp>
      <Navbar />
    </StyledApp>
  )
}

export default App