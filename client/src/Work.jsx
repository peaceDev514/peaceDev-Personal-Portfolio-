import React from 'react';

const Work = ({ navigate, theMixImg, weatherImg, foodImg, veloraImg, mernAuthImg }) => {
return (
<>
<section className="work" id="work">
<h2 style={{ textAlign: "center" }}>FEATURED WORK</h2>

    {/* The Mix Restaurant - First Project */}
    <div className="project">
      <img src={theMixImg} alt="The Mix Restaurant website" />
      <h3>The Mix Restaurant</h3>
      <p>
        A modern and responsive restaurant website designed to showcase
        the restaurant's menu, dining experience, and food offerings
        through an elegant and user-friendly interface.
      </p>

      <div className="tags">
        <button>React</button>
        <button>CSS</button>
        <button>Responsive Design</button>
        <button>Restaurant Website</button>
      </div>

      <button
        onClick={() => navigate("/the-mix-project")}
        className="view-project"
      >
        View Project
      </button>
    </div>

    {/* Weather Application */}
    <div className="project">
      <img src={weatherImg} alt="Weather Application" />
      <h3>Weather Application</h3>
      <p>
        A modern weather application providing real-time weather
        information and forecasts through a clean, intuitive interface.
      </p>

      <div className="tags">
        <button>React Development</button>
        <button>API Integration</button>
        <button>Responsive Design</button>
        <button>Real-Time Data</button>
      </div>

      <button onClick={() => navigate("/weather-project")} className="view-project">
        View Project
      </button>
    </div>

    {/* SwiftDine */}
    <div className="project">
      <img src={foodImg} alt="SwiftDine website" />
      <h3>SwiftDine</h3>
      <p>
        A modern and responsive restaurant website built to showcase
        the menu and bring the dining experience online.
      </p>

      <div className="tags">
        <button>React</button>
        <button>CSS</button>
        <button>Responsive UI</button>
        <button>Web Development</button>
      </div>

      <button onClick={() => navigate("/swiftdine-project")} className="view-project">
        View Project
      </button>
    </div>

    {/* Velora Beauty Salon */}
    <div className="project">
      <img src={veloraImg} alt="Velora Beauty Salon website" />
      <h3>Velora Beauty Salon</h3>
      <p>
        An elegant digital experience crafted for a modern beauty salon,
        combining refined visuals with a simple and intuitive user experience.
      </p>

      <div className="tags">
        <button>Web Design</button>
        <button>React Development</button>
        <button>UI/UX</button>
        <button>Responsive Design</button>
      </div>

      <button onClick={() => navigate("/velora-project")} className="view-project">
        View Project
      </button>
    </div>

    {/* MERN Authentication Kit */}
    <div className="project">
      <img src={mernAuthImg} alt="MERN Authentication Kit" />
      <h3>MERN Authentication Kit</h3>
      <p>
        A reusable full-stack authentication system built with the MERN
        stack, featuring secure user registration, login, protected routes,
        and session management.
      </p>

      <div className="tags">
        <button>React</button>
        <button>Node.js</button>
        <button>Express</button>
        <button>MongoDB</button>
        <button>JWT Authentication</button>
      </div>

      <button onClick={() => navigate("/auth-kit-project")} className="view-project">
        View Project
      </button>
    </div>
  </section>
</>

);
};

export default Work;
