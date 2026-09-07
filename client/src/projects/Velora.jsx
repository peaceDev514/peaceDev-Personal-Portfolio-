import React from 'react';

const Velora = ({ veloraImg }) => {
	return(
                <>
		<h1>Velora Beauty Salon</h1>                               
		<p>An elegant digital experience crafted for a modern beauty salon, combining refined visuals with a simple and intuitive user experience.</p>

                <div className="tags">
                <button>Web Design</button>                
		<button>React Development</button>            
		<button>UI/UX</button>                     
		<button>Responsive Design</button>                 
		</div>

                <div className="project-details">

                <div>
                <h3>Category</h3>
                <p>Beauty Salon Website</p>
                </div>                                                 
                <div>
                <h3>Website</h3>
		<p>Velora</p>
                </div>                                                 
                <div>
                <h3>Date</h3>
                <p>July 23, 2026</p>
                </div>                                                 
                </div>                                                 
                <img src={veloraImg} className="project-img"/> <br />

                <h1>Project Overview</h1> <br />
                <p>Velora is an elegant and responsive website designed for a modern beauty salon. The project focuses on creating a refined digital experience that showcases the salon's services while making it easy for visitors to explore the business.
		</p> <br />
                                                                                       <h1>Highlights:</h1>
                <ul>
                <li>Elegant Visual Design: A clean and sophisticated interface created to reflect the beauty and premium feel of the salon.</li><br />
                <li>Service Showcase: Presents the salon's services in a clear and visually appealing way.
		</li><br />
                <li>Responsive Design: Optimized for mobile, tablet, and desktop devices.</li><br />
                <li>Intuitive Navigation: Simple navigation allows visitors to easily explore the different sections of the website.</li>
                </ul> <br />                                           
                <h1>Development Challenges</h1>
                <p></p>      
                <h3>Notable Challenges</h3>

                <ul>
                <li>Responsive Layout: Adapting the design to different screen sizes while maintaining its visual quality.</li><br />
                <li>Visual Consistency: Maintaining consistent typography, spacing, imagery, and layout throughout the website.
                </li><br />
                <li>Content Structure: Organizing services and business information so visitors can quickly find what they need.</li><br />
                <li>Mobile Experience: Ensuring that navigation and interactive elements remained easy to use on smaller screens.</li><br />
                </ul> <br />

                <h1>Outcome</h1>
                <p>Velora was developed into a polished and responsive beauty salon website that combines an elegant visual identity with a simple user experience. The project demonstrates my ability to create modern business websites that are both visually engaging and functional.</p>

                <button className="action-btn"><a href="https://velorabeautysalon.vercel.app/" target="_blank" rel="noopener noreferrer">View Live Site</a></button>
                </>
        );
}

export default Velora;
