import React from 'react'

const Template = () => {
  const apis = {
    moringaLostAndFound: {
      title: "Moringa Lost and Found",
      link: "https://github.com/Cristinakamuthu/moringa-lost-and-found-backend-1",
      description: "A Flask API that allows users to report lost or found items within the Moringa community. It includes user authentication, item management, and admin controls.",
      features: {
        "User Authentication with JWT": "Users can create accounts and log in. JWT tokens are used to protect routes and maintain secure sessions.",
        "Lost & Found Management": "Logged-in users can create, update, or delete item reports. All items are stored and retrieved through API endpoints.",
        "Admin Controls": "Admins can manage user accounts and moderate reported content.",
        "RESTful Routes": "The API uses HTTP methods (GET, POST, PUT, DELETE) following REST principles.",
        "Password Security": "User passwords are hashed before being stored to improve security.",
        "CORS Configuration": "CORS is enabled to allow safe communication between the frontend and backend.",
        "Database Management": "Uses SQLite for local data storage, and Flask-Migrate to handle database migrations."
      }
    },

    farmart: {
      title: "Farmart Backend",
      link: "https://github.com/Cristinakamuthu/farmat-backend",
      description: "Backend API for an online marketplace that connects farmers with buyers. It supports user roles, product listings, orders, and authentication.",
      features: {
        "User and Farmer Accounts": "Both buyers and farmers can register and log in securely using JWT tokens.",
        "Animal Listings (CRUD)": "Farmers can post, update, or remove animal listings from the platform.",
        "Cart and Checkout System": "Buyers can add animals to their cart and complete orders.",
        "Admin Dashboard": "Admins have access to manage users, products, and order history.",
        "RESTful API Design": "Follows REST conventions to make frontend integration easier.",
        "Data Security": "Sensitive routes are protected using token-based authorization.",
        "SQLite and Flask-Migrate": "Stores application data using SQLite, with migrations handled by Flask-Migrate.",
        "CORS Support": "Frontend and backend can communicate securely using configured CORS headers."
      }
    },

    miniYouTube: {
      title: "Mini YouTube Frontend",
      link: "https://github.com/Cristinakamuthu/mini_youtube",
      description: "A React frontend that allows users to search and watch YouTube videos. Built using the YouTube Data API.",
      features: {
        "Video Search and Playback": "Users can search videos by keywords and play them directly in the app.",
        "Responsive Layout": "The UI adjusts properly on mobile, tablet, and desktop screens.",
        "Dynamic Routing": "Each video has its own route and detail page using React Router.",
        "Component-Based Structure": "The app is built using reusable components for better code organization.",
        "API Integration": "Uses YouTube Data API to fetch video information in real time.",
        "Simple and Clean UI": "Designed with a focus on usability and clarity.",
        "Planned Features": "In future, it will support user accounts, video uploads, comments, likes, ratings, and a dashboard for content creators."
      }
    },

    safeSpaceBackend: {
      title: "Safe Space Backend (Open Source Contributor)",
      link: "https://github.com/Jjumaaa/Safe-Space-Backend",
      description: "An API for a mental health app that supports anonymous journaling and mood tracking. I contributed to the backend logic and improvements.",
      features: {
        "Anonymous Journaling": "Users can write journal entries without revealing their identity.",
        "Mood Tracking": "Helps users track how they feel over time through mood logs.",
        "Therapist Interaction (Planned)": "Future versions will include structured communication with therapists.",
        "JWT Authentication": "Token-based login system to protect user sessions and routes.",
        "Database and Migrations": "Data is stored using SQLite and changes are managed using Flask-Migrate.",
        "Team Collaboration": "Built by a team using GitHub branching and pull requests.",
        "My Contributions": "Contributed on [Cristinakamuthu-patch-1](https://github.com/Jjumaaa/Safe-Space-Backend/compare/Cristinakamuthu-patch-1) and [Tina](https://github.com/Jjumaaa/Safe-Space-Backend/compare/Tina...main) branches, working on features and bug fixes.",
        "Next Steps": "Plans include adding secure messaging and AI-based wellness suggestions."
      }
    },

    lateShowAPI: {
      title: "Late Show API",
      link: "https://github.com/Cristinakamuthu/Phase-4-Code-Challenge-Two-Late-Show-API",
      description: "A Flask API built for managing late-night shows and performers. Developed as part of a learning challenge to demonstrate backend skills.",
      features: {
        "CRUD for Shows and Performers": "Users can create, update, and delete shows and performer entries.",
        "JWT Login System": "Secure login system with token protection for private routes.",
        "Authorization Logic": "Restricts actions based on whether the user is logged in.",
        "RESTful Endpoints": "Follows REST structure for handling resources.",
        "ORM with SQLAlchemy": "Handles database operations using Flask-SQLAlchemy.",
        "Schema Validation": "Marshmallow is used to validate and serialize API data.",
        "Simple Architecture": "The codebase is modular and easy to maintain.",
        "Challenge Purpose": "Built as a timed challenge to apply real-world backend concepts."
      }
    }
  }

  return (
    <div>
      <h1>ffuyilojlk</h1>
    </div>
  );
}

export default Template;
