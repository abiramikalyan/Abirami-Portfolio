import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section className='home-container'>
        <div className='home-content'>
            <h2>Designing Your Future Today</h2>
            <p>I am a passionate frontend developer, eager to craft beautiful and intuitive user experiences that captivate and engage . <br/>"The heart of a passionate frontend developer beats for beautiful interfaces and seamless interactions."</p>
            <a
  href="/Abirami_K_Resume.pdf"
  download
  className="download-btn"
>
  📄 Download CV
</a>
        </div>

        <div className='home-img'>
          <div>
          <div className='tech-logo'>
            <img src="reactlogo.png" alt="" />
          </div>
          <img src="myself.jpeg" alt=""  height={550} />
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