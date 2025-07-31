import React, { useState } from 'react';


const ProjectCard = ({ title, link, description, features }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`card-row ${open ? 'open' : ''}`}>
      <button className="card-title" onClick={() => setOpen(!open)}>
        {title}
      </button>

      {open && (
        <div className="card-content">
          <a
            className="card-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub ↗
          </a>
          <p className="card-description">{description}</p>
          <ul className="card-features">
            {Object.entries(features).map(([key, val], index) => (
              <li key={index}>
                <strong>{key}:</strong> {val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Template = () => {
  const apis = {
    moringaLostAndFound: {
      title: "Moringa Lost and Found",
      link: "https://github.com/Cristinakamuthu/moringa-lost-and-found-backend-1",
      description: "A Flask API that allows users to report lost or found items within the Moringa community.",
      features: {
        "User Authentication with JWT": "Users can create accounts and log in. JWT tokens are used to protect routes and maintain secure sessions.",
        "Lost & Found Management": "Logged-in users can create, update, or delete item reports.",
        "Admin Controls": "Admins can manage user accounts and moderate reported content.",
        "RESTful Routes": "The API uses HTTP methods (GET, POST, PUT, DELETE).",
        "Password Security": "User passwords are hashed before storage.",
        "CORS Configuration": "CORS is enabled for safe frontend-backend comms.",
        "Database Management": "Uses SQLite and Flask-Migrate for DB setup."
      }
    },

    farmart: {
      title: "Farmart Backend",
      link: "https://github.com/Cristinakamuthu/farmat-backend",
      description: "Backend API for an online marketplace connecting farmers with buyers.",
      features: {
        "User and Farmer Accounts": "Buyers and farmers register/login with JWT.",
        "Animal Listings (CRUD)": "Farmers manage animal listings.",
        "Cart and Checkout System": "Buyers can order animals.",
        "Admin Dashboard": "Admins manage users, products, and orders.",
        "RESTful API Design": "Follows REST standards.",
        "Data Security": "Protected with token-based auth.",
        "SQLite and Flask-Migrate": "Handles DB + migrations.",
        "CORS Support": "Frontend and backend talk securely."
      }
    },

    miniYouTube: {
      title: "Mini YouTube Frontend",
      link: "https://github.com/Cristinakamuthu/mini_youtube",
      description: "A React frontend to search and watch YouTube videos.",
      features: {
        "Video Search and Playback": "Search videos and play them.",
        "Responsive Layout": "Works on all devices.",
        "Dynamic Routing": "Each video has a detail page.",
        "Component-Based Structure": "Clean, reusable components.",
        "API Integration": "Uses YouTube Data API.",
        "Simple and Clean UI": "Minimalist design.",
        "Planned Features": "Account system, uploads, comments, dashboard."
      }
    },

    safeSpaceBackend: {
      title: "Safe Space Backend (Open Source Contributor)",
      link: "https://github.com/Jjumaaa/Safe-Space-Backend",
      description: "An API for anonymous journaling and mood tracking.",
      features: {
        "Anonymous Journaling": "Users write entries without ID.",
        "Mood Tracking": "Track feelings over time.",
        "Therapist Interaction (Planned)": "Future structured chat.",
        "JWT Authentication": "Token-protected user sessions.",
        "Database and Migrations": "SQLite + Flask-Migrate.",
        "Team Collaboration": "GitHub collab with branches.",
        "My Contributions": "See Cristinakamuthu-patch-1 on GitHub.",
        "Next Steps": "Add messaging + AI suggestions."
      }
    },

    lateShowAPI: {
      title: "Late Show API",
      link: "https://github.com/Cristinakamuthu/Phase-4-Code-Challenge-Two-Late-Show-API",
      description: "Flask API for managing late-night shows and performers.",
      features: {
        "CRUD for Shows and Performers": "Full data management.",
        "JWT Login System": "Secure token auth.",
        "Authorization Logic": "Only logged-in users access private features.",
        "RESTful Endpoints": "Clean structure.",
        "ORM with SQLAlchemy": "DB actions with SQLAlchemy.",
        "Schema Validation": "Data validation with Marshmallow.",
        "Simple Architecture": "Easy to navigate.",
        "Challenge Purpose": "Built as a backend timed challenge."
      }
    }
  };

  return (
    <div className="template-container">
      {Object.entries(apis).map(([key, data]) => (
        <ProjectCard
          key={key}
          title={data.title}
          link={data.link}
          description={data.description}
          features={data.features}
        />
      ))}
    </div>
  );
};

export default Template;
