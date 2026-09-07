import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import weatherImg from './assets/weather.png';
import foodImg from './assets/food.png';
import veloraImg from './assets/gallery.png';
import mernAuthImg from './assets/mern-auth.jpeg';
import Work from './Work';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import mongoLogo from './assets/mongo.png';
import expressLogo from './assets/express.svg';
import nodeLogo from './assets/nodejs.svg';
import cssLogo from './assets/css.svg';
import gitLogo from './assets/git.png';
import htmlLogo from './assets/html.png';
import reactLogo from './assets/react.svg';
import jsLogo from './assets/js.png';
import githubLogo from './assets/github.svg';

import Weather from './projects/Weather';
import SwiftDine from './projects/SwiftDine';
import Velora from './projects/Velora';
import Mern from './projects/Mern';
import Header from './Header';

import { Toaster } from 'react-hot-toast';

const App = () => {

	const navigate = useNavigate();

	const [menuOpen, setMenuOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	return(
		<>

		<Toaster />

		<Routes>

		<Route path="/weather-project" element={<Weather weatherImg={weatherImg} />} />
		<Route path="/swiftdine-project" element={<SwiftDine foodImg={foodImg} />} />
		<Route path="/velora-project" element={<Velora veloraImg={veloraImg} />} />
		<Route path="/auth-kit-project" element={<Mern mernAuthImg={mernAuthImg} />} />

		<Route path="/" element={

		<>

		<Header 
		menuOpen={menuOpen}
		setMenuOpen={setMenuOpen}
		/>
		<section className={menuOpen ? "intro-gone" : "intro"} id="home">
		<h1>
		PEACE OGUNLEYE
		</h1>

		<p>Hi, I’m Peace, a Full-Stack Developer building modern web applications and digital experiences that solve real problems — working with clients and teams worldwide.</p>

		</section>

		<Work 
		navigate={navigate}
		weatherImg={weatherImg}
		foodImg={foodImg}
		veloraImg={veloraImg}
		mernAuthImg={mernAuthImg}
		Routes={Routes}
		/>

		<About 
		mongoLogo={mongoLogo}
		expressLogo={expressLogo}
		nodeLogo={nodeLogo}
		cssLogo={cssLogo}
		gitLogo={gitLogo}
		htmlLogo={htmlLogo}
		reactLogo={reactLogo}
		jsLogo={jsLogo}
		githubLogo={githubLogo}
		/>

		<Services />

		<Contact 
		name={name}
		setName={setName}
		email={email}
		setEmail={setEmail}
		message={message}
		setMessage={setMessage}
		loading={loading}
		setLoading={setLoading}
		/>

		<Footer />

		</>

		} />

		</Routes>
		</>
	);
}

export default App;
