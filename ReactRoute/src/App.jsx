import React from 'react'
function Home() {
  return  <h1>This is my Home Page</h1>
}
function About() {
  return <h1>This is my About Us page</h1>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
      </nav>
      </BrowserRouter>
    </div>
  )
}

export default App