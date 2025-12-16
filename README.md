# StudentTrend+

## Overview
**StudentTrend+** is a personalized skill, trend, and mentorship platform designed exclusively for college students. This platform is inspired by Microsoft's Fluent UI design, offering a modern and professional user experience.

### Key Features
- **Trending Skills**: Stay updated with in-demand skills and tools
- **Personalized Roadmaps**: Step-by-step learning paths designed to help students
- **Mentorship Program**: Connect with senior mentors for guidance
- **College Opportunities**: Discover and participate in hackathons, events, and workshops
- **Dashboard Experience**: Track progress, interests, and active roadmaps
- **Admin Panel**: Manage users, roadmaps, trends, and events

## Technology Stack
- **Frontend**: React 19 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4 (Fluent Design inspired)
- **Backend**: Firebase (Authentication, Firestore)
- **Deployment**: Firebase Hosting

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, Card, Input, etc.)
│   ├── layout/          # Layout components (Header, Footer, Sidebar)
│   └── widgets/         # Dashboard widgets
├── pages/               # Page components
│   ├── Landing/         # Public landing page
│   ├── Auth/            # Login and Signup pages
│   ├── Onboarding/      # Multi-step onboarding flow
│   ├── Dashboard/       # Main dashboard
│   ├── TrendingSkills/  # Trending skills page
│   ├── Roadmaps/        # Learning roadmaps page
│   ├── Mentors/         # Mentors page
│   ├── ProjectIdeas/    # Project ideas page
│   ├── Opportunities/   # College opportunities page
│   ├── Profile/         # User profile page
│   └── Admin/           # Admin panel (protected)
├── context/             # React Context (Auth)
├── config/              # Configuration files (Firebase)
└── App.jsx              # Main app with routing
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- A Firebase account
- A `.edu` email address for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/munnurakshay/StudentTrendPlus.git
   cd StudentTrendPlus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Follow the detailed guide in [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
   - Create a Firebase project
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy `.env.example` to `.env` and add your Firebase credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

## Key Design Principles

### Fluent Design Language
- **Clean & Minimal**: Simple layouts with plenty of white space
- **Soft Colors**: Primary blue (#0078d4) with purple accents (#8000ff)
- **Rounded Cards**: Smooth corners with subtle shadows
- **Smooth Animations**: Hover effects and transitions for better UX
- **Responsive**: Mobile-first design that scales to desktop

### Color Palette
- **Primary**: Soft blue tones (#0078d4)
- **Accent**: Purple gradient (#8000ff)
- **Background**: Light gray (#fafafa)
- **Text**: Dark gray (#323130)

## Pages Overview

### Public Pages
- **Landing Page**: Hero section, features, problem/solution, and CTA
- **Login Page**: Email/password authentication for college students
- **Signup Page**: Account creation with `.edu` email validation

### Protected Pages (Requires Authentication)
- **Onboarding**: Multi-step flow to select interests and skills
- **Dashboard**: Overview with widgets for trending skills, roadmaps, mentors, and progress
- **Trending Skills**: Browse and learn in-demand technologies
- **Roadmaps**: Personalized learning paths with progress tracking
- **Mentors**: Connect with industry experts
- **Project Ideas**: Curated project ideas for portfolio building
- **Opportunities**: Hackathons, workshops, and career fairs
- **Profile**: Manage account settings and preferences
- **Admin Panel**: Platform management (admin role required)

## Features

### Authentication
- Email/password authentication via Firebase
- College email (`.edu`) validation
- Protected routes with redirect to login
- Persistent authentication state

### Reusable Components
- **Button**: Multiple variants (primary, secondary, accent, ghost)
- **Card**: Hover effects and customizable padding
- **Input**: Form inputs with validation and error states
- **Header**: Navigation with dynamic menu based on auth state
- **Footer**: Multi-column footer with links
- **Sidebar**: Dashboard navigation sidebar
- **Widgets**: Modular dashboard components

### Database Structure
See [FIRESTORE_STRUCTURE.md](./FIRESTORE_STRUCTURE.md) for detailed Firestore collections and schemas.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Contributing

This is an educational project. Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is built for educational purposes and is open-source.

## Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/cd5a1efe-8034-45ee-8503-a990b35fa52c)

### Login Page
![Login Page](https://github.com/user-attachments/assets/96ac92ac-d8ac-4d4b-bd46-b97c1fb0a30e)

## Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for college students**
