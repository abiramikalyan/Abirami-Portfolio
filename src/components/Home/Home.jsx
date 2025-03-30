import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className='home-container'>
        <div className='home-content'>
            <h2>Designing Your Future Today</h2>
            <p>I am a passionate frontend developer, eager to craft beautiful and intuitive user experiences that captivate and engage . <br/>"The heart of a passionate frontend developer beats for beautiful interfaces and seamless interactions."</p>
        </div>

        <div className='home-img'>
          <div>
          <div className='tech-logo'>
            <img src="reactlogo.png" alt="" />
          </div>
          <img src="my-img.jpeg" alt="" />
          </div>
          
          <div>
          <div className='tech-logo'>
            <img src="htmllogo.png" alt="" />
          </div>
          <div className='tech-logo'>
            <img src="css-logo.png" alt="" />
          </div>
          <div className='tech-logo'>
            <img src="js-logo.png" alt="" />
          </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default Home;