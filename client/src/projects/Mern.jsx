import React from 'react';

const Mern = ({ mernAuthImg }) => {
        return(
                <>
                <h1>MERN Authentication Kit</h1>         
		<p>A reusable full-stack authentication system built wi
th the MERN stack, featuring secure user registration, login, protected routes, and session management.</p>

                <div className="tags">
                <button>React</button>                           
		<button>Node.js</button>                       
		<button>Express</button>                 
		<button>Mongo DB</button> 
		<button>JWT Authentication</button>
		</div>

                <div className="project-details">

                <div>
                <h3>Category</h3>
                <p>Authentication System</p>
                </div>                                                 
                <div>
                <h3>Website</h3>
                <p>MERN Authentication Kit</p>
                </div>                                                 
                <div>
                <h3>Date</h3>
                <p>Nov 13, 2025</p>
                </div>                                                 
                </div>                                                 
                <img src={mernAuthImg} className="project-img"/> <br />

                <h1>Project Overview</h1> <br />
                <p>The MERN Authentication Kit is a reusable authentication starter designed to simplify the process of adding user authentication to MERN applications. It provides a structured foundation that developers can build upon when creating applications that require user accounts and authentication.</p> <br />
                                                                                       <h1>Highlights:</h1>
                <ul>
                <li>User Authentication: Provides the core functionality needed for registering and authenticating users.</li><br />
                <li>MERN Stack: Built using MongoDB, Express.js, React, and Node.js.</li><br />
                <li>Reusable Structure: Designed as a starter that can be adapted and integrated into different MERN projects.</li><br />
                <li>Frontend & Backend Integration: Demonstrates communication between the React frontend and Node.js/Express backend.</li>
		<li>API-Based Architecture: Uses backend API endpoints to handle authentication-related operations.</li>
                </ul> <br />                                           
                <h1>Development Challenges</h1>
                <p>Building the authentication kit involved connecting the frontend and backend into a reliable authentication flow while keeping the project organized and reusable.</p>      
                <h3>Notable Challenges</h3>

                <ul>
                <li>Frontend-Backend Communication: Connecting React components to authentication API endpoints.</li><br />
                <li>Authentication Flow: Managing registration, login, and authentication states across the application.</li><br />
                <li>Database Integration: Connecting the backend to MongoDB and working with stored user data.</li><br />
                <li>Error Handling: Handling invalid credentials, failed requests, and other authentication-related errors.</li><br />
                <li>Project Structure: Organizing the codebase so that the authentication system can be reused and extended in other MERN applications.</li>
                </ul> <br />

                <h1>Outcome</h1>
                <p>The MERN Authentication Kit was developed as a reusable foundation for authentication in MERN applications. The project demonstrates my experience working across the frontend and backend, integrating APIs with React, connecting applications to MongoDB, and building structured authentication workflows.</p>

                <button className="action-btn"><a href="https://mern-auth-taupe-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">View Live Site</a></button>
                </>
        );
}

export default Mern;
