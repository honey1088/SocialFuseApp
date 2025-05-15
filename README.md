# SocialFuseApp

## Overview
SocialFuseApp is a full-stack social media application designed to facilitate user interactions through posts, stories, and authentication mechanisms. The project is structured with a clear separation between the backend and frontend components, promoting modularity and scalability.

## Features
- User Authentication: Secure login and registration functionalities.
- Post Management: Create, read, update, and delete posts.
- Story Feature: Share ephemeral content through stories.
- Responsive Design: Optimized for various device sizes.
- Modular Codebase: Organized folders for models, routes, components, and styles.
  
## Project Structure
```bash
SocialFuseApp/
├── BackEnd/
│   ├── models/           # Contains data models (e.g., User, Post, Story)
│   ├── routes/           # API endpoints for posts, stories, authentication
|   ├── middlewares/      # Authentication, error handlers, etc
|   ├── controllers/      # Request logic and route handling
|   └── index.js          # Entry point of the backend
├── FrontEnd/
|   ├── public
|   |   └──index.html
|   └── src
│       ├── components/       # Reusable UI components
│       ├── pages/            # Page-level components (e.g., Home, Profile)
│       ├── styles/           # CSS/SCSS files for styling the application
|       ├── App.js
|       ├── index.js
|       └── firebase.js
├── .gitattributes
├── .gitignore.txt
└── README.md
```

## Technologies Used
### Backend:
- **Node.js** -> JavaScript runtime environment.
- **Express.js** -> Web framework for Node.js.
- **MongoDB** -> NoSQL database for storing user data, posts, and stories.
- **Mongoose** -> ODM for MongoDB, facilitating schema definitions.

### Frontend:
- **React.js** -> JavaScript library for building user interfaces.
- **React Router** -> Declarative routing for React applications.
- **CSS/SCSS** -> Styling the application components.


## Installation
```bash
# 1. Clone the repository
git clone https://github.com/honey1088/SocialFuseApp.git
cd SocialFuseApp

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```
App will run at http://localhost:3000/.
