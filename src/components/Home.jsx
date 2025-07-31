import React from 'react';
import Navbar from './Navbar';
import backgroundImg from '../assets/cristina.jpeg'; // adjust path if needed

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="hero-section">
        <h1 className="cristina">CRISTINA</h1>

        <img src={backgroundImg} alt="Cristina" className="center-image" />

        <h1 className="kamuthu">KAMUTHU</h1>
      </div>
    </div>
  );
};

export default Home;
