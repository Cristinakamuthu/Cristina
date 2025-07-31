import React from 'react'
import Navbar from './Navbar'
import  jsandpython  from '/home/cristina/Development/code/my_own_projects/cristina-portfolio/src/assets/jsandpython.png'
import  music  from '/home/cristina/Development/code/my_own_projects/cristina-portfolio/src/assets/music.jpeg'

const About = () => {
  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>

      <div className="section-container">
        <div className="section">
          <div className="text">
            <p>
            I'm well conversant with JavaScript, React, Python, and Flask. I especially enjoy backend development using Flask and love building projects in my free time to sharpen my skills and explore new ideas.

            </p>
          </div>
          <div className="image">
            <img src={jsandpython} alt="js/python logo" />
          </div>
        </div>

        <div className="section reverse">
          <div className="image">
            <img src={music} alt="music/logo" />
          </div>
          <div className="text">
            <p>
Outside tech, I’m passionate about music — I write, teach, and conduct, and I love using creativity to connect with others through both code and sound.            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
