// src/pages/home.js
import React from 'react';
import '../styles/home.css';
import sisyphusIcon from '../resources/sisyphusHome.png'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="intro-text">
          <h3>We are the Sisyphus team and we are here to help you get through your fitness journey in an organized, effective, and smart way.</h3>
          <div className='same-line-container'>
            <h3>In the enduring tale of Sisyphus, condemned to eternally roll a boulder up a hill, we find a profound metaphor for the transformative nature of a workout journey. Just as Sisyphus faces a seemingly insurmountable task, embarking on a fitness odyssey often presents challenges that appear overwhelming. The repetitive ascent of the boulder mirrors the daily grind of workouts, each repetition and set symbolizing perseverance in the face of adversity. Sisyphus teaches us that the journey itself holds value, and in the realm of fitness, every drop of sweat, each push against resistance, contributes to the ongoing narrative of personal growth. The struggle against gravity reflects the struggle against self-imposed limitations, pushing our physical boundaries and defying the constraints we once thought unyielding. Much like Sisyphus, whose resilience defies the cruelty of his punishment, a workout journey showcases the indomitable human spirit, proving that in the pursuit of strength and well-being, each uphill battle is a step towards triumph.</h3>
            <img src={sisyphusIcon} alt="Logo"/>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
