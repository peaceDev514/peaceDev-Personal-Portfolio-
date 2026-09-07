import React from 'react';

const SwiftDine = ({ foodImg }) => {
	return(
		<>
		<h1>SwiftDine</h1>                                                     <p>A modern and responsive restaurant website built to showcase the menu and bring the dining experience online.</p>

                <div className="tags">
                <button>React</button>                                                 <button>CSS</button>                                                   <button>Responsive UI</button>                                         <button>Web Development</button>                                       </div>

		<div className="project-details">    

		<div>                                            
		<h3>Category</h3>                               
		<p>Restaurant Website</p>
                </div>                                                                                                                
		<div>                                             
		<h3>Website</h3>                                   
		<p>SwiftDine</p>                               
		</div>                                                                                                             
		<div>                                              
		<h3>Date</h3>                                     
		<p>July 20, 2026</p>                                          
		</div>                                                                                                                    
		</div>                                                                                                                   
		<img src={foodImg} className="project-img"/> <br />

		<h1>Project Overview</h1> <br />
		<p>SwiftDine is a modern and responsive restaurant website designed to bring the dining experience online. The website provides visitors with an engaging way to explore the restaurant, discover menu offerings, and get essential information through a clean and intuitive interface.</p> <br />
                                                                                       <h1>Highlights:</h1>                                  
		<ul>
                <li>Modern Visual Design: A polished interface designed to create an appealing and memorable first impression.</li><br />
                <li>Menu Showcase: Presents food and menu offerings in a clear and visually engaging layout.</li><br />                      
		<li>Responsive Design: Optimized for desktops, tablets, and mobile devices to provide a consistent experience across screen sizes.Intuitive Navigation: Simple navigation makes it easy for visitors to explore different sections of the website.</li><br />            
		<li>Call-to-Action Elements: Strategically placed buttons and sections encourage visitors to explore the menu and take action.</li>                           
		</ul> <br />                                                                                                              
		<h1>Development Challenges</h1>                  
		<p>Building SwiftDine involved several design and development challenges focused on creating an attractive restaurant experience while keeping the website responsive and easy to navigate.</p>                     
		<h3>Notable Challenges</h3>

		<ul>
		<li>Responsive Layout: Ensuring that the design maintained its visual quality and usability across different screen sizes.</li><br />
                <li>Content Organization: Structuring the restaurant's information, menu items, and sections in a way that was easy for visitors to understand.
		</li><br />             
		<li>Visual Balance: Combining imagery, typography, spacing, and other design elements without making the interface feel overwhelming.</li><br />
                <li>Navigation Experience: Creating a smooth and intuitive navigation system that allows visitors to quickly move through the website.</li><br />      
		<li>Performance: Optimizing images and frontend elements to maintain a smooth browsing experience.</li>
                </ul> <br />

		<h1>Outcome</h1>
		<p>SwiftDine was developed into a modern, responsive restaurant website that combines visual appeal with a straightforward user experience. The project demonstrates my ability to transform a design concept into a functional web experience while paying attention to responsiveness, layout, navigation, and overall usability.</p>

		<button className="action-btn"><a href="https://swiftdine.vercel.app/" target="_blank" rel="noopener noreferrer">View Live Site</a></button>
		</>
	);
}

export default SwiftDine;
