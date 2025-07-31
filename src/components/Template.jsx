import React from 'react'

const Template = () => {
    const apis = {
  farmart: {
    link: "https://mock.farmart.api",

    features: {
      1: " Login & Signup: Users (farmers/buyers) can register and authenticate using JWT.",
      2: " Animal Listings: Farmers can post, update, or delete animals for sale.",
      3: " Cart & Orders: Buyers can add animals to cart, checkout, and view past orders.",
      4: " RESTful API: Consistent CRUD structure for all resources.",
    }
  },

  jirani: {
    link: "https://mock.jirani.api",

    features: {
      1: " Neighborhood Posts: Residents can post messages to their area feed.",
      2: " Role-based System: Users can register as neighbors or service providers.",
      3: " Location-Specific Notifications: Alerts targeted to users by area.",
      4: " Moderation Tools: Admins can manage content and users.",
    }
  },

  catholicTunes: {
    link: "https://mock.catholictunes.api",

    features: {
      1: " Upload Music: Artists can share Catholic tracks and metadata.",
      2: " Auto Lyrics Sync: Real-time lyrics scroll while the song plays.",
      3: " Smart Search: Filter by artist, language, or category.",
      4: " Playlist & Favorites: Users can save favorite tracks into custom lists.",
    }
  },

  portfolioSite: {
    link: "https://cristina-portfolio.vercel.app",

    features: {
      1: " Dev Portfolio: A sleek showcase of your projects, skills, and experience.",
      2: " Resume Download: Visitors can view and download your up-to-date CV.",
      3: " Contact Form: Integrated with EmailJS or Formspree for direct reach.",
      4: " Responsive Layout: Fully optimized for mobile, tablet, and desktop.",
    }
  },

  mamaFuaApp: {
    link: "https://mock.mamafua.api",

    features: {
      1: " Service Booking: Users can book mama fua (cleaners) for home chores.",
      2: " Location-Based Matching: Connects users to workers in their area.",
      3: " Real-Time Scheduling: Users pick date/time and see availability.",
      4: " Reviews & Ratings: Users can rate services after completion.",
    }
  }
};

    

  return (
    <div>Template</div>
  )
}

export default Template