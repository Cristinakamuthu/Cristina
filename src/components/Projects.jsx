import React from 'react'
import Navbar from './Navbar'
import Template from './Template'
const Projects = () => {
  return (
    <div className="home-page">
      <header>
      <Navbar/>
    </header>
    <div>
      <h1 className='page-title'>Here are some of the projects i have made </h1>
      <p className="instruction-text">Click the title to get more info</p>

      <Template />
    </div>

    </div>
  )
}

export default Projects