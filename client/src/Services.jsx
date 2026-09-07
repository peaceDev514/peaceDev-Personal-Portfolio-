import React from 'react';

const Services = () => {
	return(
		<>
		<section className="services-sec" id="services">
		<h2>SERVICES</h2>
		<p>I build modern, responsive web experiences and full-stack applications that help ideas and businesses move from concept to reality.</p>

		<div className="line"></div>

		<div className="service">

		<h4>Web Development</h4>
		<p>I create modern, responsive websites designed to look great across phones, tablets, and desktops. From business landing pages to personal and promotional websites, I focus on clean interfaces, smooth interactions, and a great user experience.</p>

		</div>

		<div className="line"></div>

		<div className="service">

		<h4>Full Stack Applications</h4>
		<p>I build complete web applications from the frontend to the backend. Using the MERN stack, I develop applications with responsive interfaces, REST APIs, databases, and the functionality needed to turn an idea into a working product.</p>


		</div>

		<div className="line"></div>

		<div className="service">
		
		<h4>Authenticat- <br /> ion Systems</h4>
		<p>I develop secure authentication systems with features such as user registration, login, protected routes, password handling, and token-based authentication. These systems can be integrated into larger MERN applications or used as a starting point for new projects.</p>

		</div>

		<div className="line"></div>

		<div className="service">

		<h4>API & Backend Development</h4>
		<p>I build reliable backend systems and REST APIs using Node.js and Express. From connecting databases to handling user data and application logic, I create backend systems that are structured to work smoothly with modern frontend applications.</p>

		</div>

		</section>

		</>
	);
}

export default Services;
