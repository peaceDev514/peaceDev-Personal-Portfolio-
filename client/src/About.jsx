import React from 'react';

const About = ({ mongoLogo, expressLogo, nodeLogo, cssLogo, gitLogo, htmlLogo, reactLogo, githubLogo, jsLogo }) => {
	return(
		<>
		<section id="about">
		<h2>ABOUT</h2>
		<p style={{ fontSize: "18px" }}>
		I'm a Full-Stack Developer passionate about turning ideas into modern, functional web applications. I enjoy building clean and responsive interfaces on the frontend and developing reliable APIs and backend systems that power them.
		<br /><br /><br />
My main stack is MongoDB, Express, React, and Node.js. I've built a range of projects including business websites, weather applications, authentication systems, and full-stack applications, constantly challenging myself to learn, build, and improve.
		<br /><br /><br />
I care about creating digital experiences that aren't just visually appealing, but intuitive, responsive, and genuinely useful.
		</p>
		<br />
		<br />

		<h3>Technologies I work With</h3><br />
		<div className="tech">
		<img src={mongoLogo} />
		<img src={expressLogo} />
		<img src={reactLogo} />
		<img src={nodeLogo} />
		<img src={jsLogo} />
		<img src={cssLogo} />
		<img src={gitLogo} />
		<img src={htmlLogo} />
		<img src={githubLogo} style={{ backgroundColor: "white" }} />

		</div>

		<br />
		<br />
		<br />

		</section>

		</>
	);
}

export default About;
