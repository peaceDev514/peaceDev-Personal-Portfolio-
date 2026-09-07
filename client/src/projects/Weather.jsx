import React from 'react';

const Weather = ({ weatherImg }) => {
	return (
		<>
		<h1>Weather Application</h1>                    
		<p>A modern weather application providing real-time weather information and forecasts through a clean, intuitive interface.</p>
                                                
		<div className="tags">                           
		<button>React Development</button>                
		<button>API Integeration</button>
		<button>Responsive Design</button>
		<button>Real-Time Data</button>                  
		</div>

		<div className="project-details">

		<div>
		<h3>Category</h3>
		<p>Web Application</p>
		</div>

		<div>
		<h3>Website</h3>
		<p>PMO Weather</p>
		</div>

		<div>
		<h3>Date</h3>
		<p>Oct 26, 2025</p>
		</div>

		</div>

		<img src={weatherImg} className="project-img"/> <br />

		<h1>Project Overview</h1> <br />
		<p>The Weather App is a clean and responsive web application designed to provide users with real-time weather information in a simple and intuitive way.</p> <br />

		<h1>Highlights:</h1>

		<ul>
		<li>Real-Time Weather Data: Fetches current weather information using a weather API.</li><br />
		<li>Location Search: Users can search for a city and quickly view its current weather conditions.</li><br />
		<li>Responsive Design: The application adapts smoothly to mobile, tablet, and desktop screen sizes.</li><br />
		<li>Simple User Experience: Weather information is presented clearly so users can find what they need without unnecessary complexity.</li>
		</ul> <br />

		<h1>Development Challenges</h1>
		<p>Building the Weather App involved solving several practical challenges, particularly around working with external APIs and presenting changing data in a clear way.</p>
		<h3>Notable Challenges</h3>

		<ul>
		<li>API Integration: Connecting the application to an external weather API and handling the data returned from it.</li><br />
		<li>Loading States: Creating a smooth experience while weather information is being fetched.</li><br />
		<li>Error Handling: Handling situations such as invalid city names, unavailable data, or failed API requests.</li><br />
		<li>Responsive Layout: Making sure the weather interface remained easy to use across different screen sizes.</li><br />
		<li>Data Presentation: Organizing temperature, weather conditions, and other information in a way that is easy to understand at a glance.</li>
		</ul> <br />

		<h1>Outcome</h1>
		<p>The Weather App was successfully developed into a responsive and easy-to-use weather application. The project helped demonstrate my ability to work with React, integrate external APIs, handle asynchronous data, build responsive interfaces, and create a practical application around a real-world use case.</p>

		<p>The project also strengthened my understanding of API integration and building user-friendly experiences with dynamic data.</p>


		<button className="action-btn"><a href="https://pmoweather.netlify.app/" target="_blank" rel="noopener noreferrer">View Live Site</a></button>



		</>
	);
}

export default Weather;
