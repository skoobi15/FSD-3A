import React from 'react'

import Header from './Components/Header'
import Menus from './Components/Menus'
import Body from './Components/Body'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div style={{gap: "20px", wrap: "wrap", backgroundColor:" #121212", minHeight:"100vh" }}>
      <Header/> <br></br>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
