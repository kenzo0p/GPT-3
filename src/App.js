import React from 'react'
import { Brand, CTA, Navbar } from './components'
import { Footer, Header, Features, WHATGPT3, Blog, Posibility } from './containers'
import './App.css'


function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WHATGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>

    // 2:11
  )
}

export default App