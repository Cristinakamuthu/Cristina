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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa perspiciatis provident et dolore eos rerum optio, dolorum distinctio. Laboriosam.
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veniam consectetur eaque eum aliquam sed ut obcaecati quam fugit sit!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
