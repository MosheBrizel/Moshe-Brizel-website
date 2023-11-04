
# Portfolio Website

This project contains the code for my personal portfolio website showcasing my projects and skills as a web developer. 

## Contents

- `index.js`: Server code with Express.js serving project images and gif files
- `App.css`: CSS stylesheet for overall styling
- `App.jsx`: Main React component holding site content
- `dataProjects.js`: Data on projects displayed on site  
- `Project.jsx`: React component to display each project box

### Components

- `AboutMe.jsx`: Renders the About Me section
- `Links.jsx`: Contains the links in the footer
- `ResumePage.jsx`: Displays the resume download links
- `Skills.jsx`: Renders the Skills section
    - `Skill.jsx`: Renders each individual skill logo and name 
- `ConnectLinks.jsx`: Holds the social media links

The main **App** component contains different sections rendered using the above components:

- About Me
- Resume  
- Skills
- Projects
- Links
- Footer

The **Skills** section maps over the skills data to generate Skill components for each entry.

**Skill** displays the skill logo image, name, and styles the container.

The **index.js** server handles requests for images stored in `/media` and serves them.

Overall, this app demonstrates skills in:

- Building complete React apps with components  
- Creating responsive styling
- Fetching data from API endpoints
- Server creation with Node.js and Express

The end result is a fast, polished portfolio site showcasing my projects and abilities as a developer.
