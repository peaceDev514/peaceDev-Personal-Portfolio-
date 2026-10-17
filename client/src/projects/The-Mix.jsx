import React from 'react';

const TheMix = ({ theMixImg }) => {
return (
<>
<h1>The Mix Restaurant</h1>

  <p>
    A modern restaurant website designed to showcase The Mix's dining
    experience, food menu, and lounge offerings through an elegant and
    user-friendly digital experience.
  </p>

  <div className="tags">
    <button>React</button>
    <button>CSS</button>
    <button>Responsive UI</button>
    <button>Restaurant Website</button>
  </div>

  <div className="project-details">
    <div>
      <h3>Category</h3>
      <p>Restaurant Website</p>
    </div>

    <div>
      <h3>Website</h3>
      <p>The Mix Restaurant</p>
    </div>

    <div>
      <h3>Date</h3>
      <p>October 2026</p>
    </div>
  </div>

  <img
    src={theMixImg}
    alt="The Mix Restaurant website preview"
    className="project-img"
  />

  <br />

  <h1>Project Overview</h1>
  <br />

  <p>
    The Mix Restaurant website was developed to give the restaurant a
    professional online presence where visitors can explore its food
    offerings, browse the menu, and learn more about its dining and
    lounge experience. The website combines an elegant visual design
    with a responsive layout to make browsing convenient across devices.
  </p>

  <br />

  <h1>Highlights</h1>

  <ul>
    <li>
      Modern Visual Design: An elegant interface designed to reflect
      the restaurant's identity and create a welcoming first impression.
    </li>
    <br />

    <li>
      Menu Showcase: Organizes food and drink offerings so visitors can
      explore the available selections.
    </li>
    <br />

    <li>
      Full Menu Experience: Provides visitors with a dedicated menu
      page to explore the restaurant's offerings in greater detail.
    </li>
    <br />

    <li>
      Responsive Design: Adapts the website layout to desktop, tablet,
      and mobile screens.
    </li>
    <br />

    <li>
      Intuitive Navigation: Helps visitors move between the homepage,
      menu, and other important sections.
    </li>
    <br />

    <li>
      User-Friendly Experience: Uses clear content organization and
      interactive elements to make the website easy to explore.
    </li>
  </ul>

  <br />

  <h1>Development Challenges</h1>

  <p>
    Developing The Mix website involved balancing an attractive
    restaurant presentation with clear menu organization and a
    consistent experience across different screen sizes.
  </p>

  <h3>Notable Challenges</h3>

  <ul>
    <li>
      Content Organization: Structuring the restaurant's food and
      drink offerings to make the menu easy to navigate.
    </li>
    <br />

    <li>
      Responsive Layout: Ensuring that the website remains visually
      appealing and functional on mobile devices and larger screens.
    </li>
    <br />

    <li>
      Visual Consistency: Maintaining a cohesive design through
      typography, spacing, imagery, and the restaurant's colour palette.
    </li>
    <br />

    <li>
      Navigation Experience: Making it straightforward for visitors
      to access the menu and explore the website.
    </li>
    <br />

    <li>
      Image Handling: Organizing and displaying menu and restaurant
      imagery appropriately throughout the interface.
    </li>
  </ul>

  <br />

  <h1>Outcome</h1>

  <p>
    The Mix Restaurant website provides the business with a dedicated
    digital presence for presenting its menu and dining experience.
    The project demonstrates my ability to develop responsive
    restaurant websites with organized content, consistent styling,
    and an intuitive user experience.
  </p>

  <button className="action-btn">
    <a
      href="https://the-mix-eight.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Live Site
    </a>
  </button>
</>

);
};

export default TheMix;
