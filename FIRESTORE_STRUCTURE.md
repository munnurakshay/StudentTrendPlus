# Firestore Database Structure

This document outlines the Firestore database collections and their schemas for StudentTrend+.

## Collections

### 1. users
Stores user profile and authentication data.

```javascript
{
  uid: "firebase_user_id",
  email: "student@university.edu",
  name: "John Doe",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z",
  onboardingCompleted: true,
  role: "student", // or "admin", "mentor"
  interests: ["💻 Web Development", "🤖 Machine Learning"],
  skills: ["JavaScript", "Python", "React"],
  university: "Example University",
  major: "Computer Science",
  profilePicture: "url_to_image",
  stats: {
    completedSkills: 12,
    activeRoadmaps: 3,
    mentorshipHours: 8,
    projectsCompleted: 5
  }
}
```

### 2. roadmaps
Stores learning roadmap information.

```javascript
{
  id: "roadmap_id",
  title: "Frontend Development",
  description: "Master modern frontend technologies and frameworks",
  category: "Web Development",
  level: "Beginner to Advanced",
  duration: "6 months",
  icon: "💻",
  steps: [
    {
      stepNumber: 1,
      title: "HTML & CSS Basics",
      description: "Learn the fundamentals of web markup and styling",
      resources: ["link1", "link2"],
      estimatedTime: "2 weeks",
      completed: false
    },
    // ... more steps
  ],
  createdBy: "admin_user_id",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z",
  isPublished: true
}
```

### 3. trendingSkills
Stores information about trending skills and technologies.

```javascript
{
  id: "skill_id",
  name: "React.js",
  category: "Frontend",
  icon: "⚛️",
  description: "A JavaScript library for building user interfaces",
  trendPercentage: 15,
  demand: "High", // "Low", "Medium", "High", "Very High"
  resources: [
    {
      title: "Official Documentation",
      url: "https://react.dev",
      type: "documentation"
    },
    {
      title: "React Tutorial",
      url: "https://example.com/react-tutorial",
      type: "course"
    }
  ],
  relatedSkills: ["JavaScript", "TypeScript", "Redux"],
  jobCount: 5000,
  averageSalary: 120000,
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### 4. mentors
Stores mentor profile information.

```javascript
{
  id: "mentor_id",
  userId: "firebase_user_id",
  name: "Dr. Sarah Johnson",
  expertise: "Machine Learning & AI",
  experience: "10 years",
  company: "Google",
  rating: 4.9,
  totalSessions: 150,
  available: true,
  bio: "Machine Learning expert with 10+ years of experience...",
  specializations: ["Deep Learning", "NLP", "Computer Vision"],
  availability: {
    monday: ["9:00-12:00", "14:00-17:00"],
    tuesday: ["9:00-12:00"],
    // ... other days
  },
  hourlyRate: 100,
  socialLinks: {
    linkedin: "url",
    github: "url",
    twitter: "url"
  },
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### 5. opportunities
Stores information about hackathons, events, and workshops.

```javascript
{
  id: "opportunity_id",
  title: "Tech Hackathon 2024",
  type: "Hackathon", // "Hackathon", "Workshop", "Career Fair", "Competition"
  description: "Annual tech hackathon for college students...",
  date: "2024-01-15T09:00:00.000Z",
  endDate: "2024-01-17T18:00:00.000Z",
  location: "Virtual",
  prize: "$10,000",
  icon: "🏆",
  registrationLink: "https://example.com/register",
  maxParticipants: 500,
  currentParticipants: 350,
  organizer: "University Tech Club",
  requirements: ["College student", "Team of 2-4 members"],
  tags: ["AI", "Web Development", "Mobile"],
  isActive: true,
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### 6. projectIdeas
Stores project ideas for students.

```javascript
{
  id: "project_id",
  title: "E-commerce Platform",
  description: "Build a full-featured e-commerce website with shopping cart...",
  difficulty: "Intermediate", // "Beginner", "Intermediate", "Advanced"
  category: "Full Stack",
  duration: "4-6 weeks",
  icon: "🛒",
  requiredSkills: ["React", "Node.js", "MongoDB"],
  learningOutcomes: [
    "User authentication and authorization",
    "Payment gateway integration",
    "RESTful API design"
  ],
  resources: [
    {
      title: "E-commerce Tutorial",
      url: "https://example.com/tutorial",
      type: "video"
    }
  ],
  githubRepo: "https://github.com/example/repo",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### 7. userProgress
Tracks user progress on roadmaps and skills.

```javascript
{
  id: "progress_id",
  userId: "firebase_user_id",
  roadmapId: "roadmap_id",
  progress: 65, // percentage
  completedSteps: [1, 2, 3, 4],
  currentStep: 5,
  startedAt: "2024-01-01T00:00:00.000Z",
  lastActivityAt: "2024-01-15T10:00:00.000Z",
  estimatedCompletionDate: "2024-07-01T00:00:00.000Z"
}
```

### 8. mentorshipSessions
Tracks mentorship sessions between students and mentors.

```javascript
{
  id: "session_id",
  studentId: "student_user_id",
  mentorId: "mentor_user_id",
  scheduledAt: "2024-01-20T14:00:00.000Z",
  duration: 60, // minutes
  status: "scheduled", // "scheduled", "completed", "cancelled"
  topic: "Career guidance in Machine Learning",
  notes: "Discussed career paths and skill development...",
  rating: 5,
  feedback: "Very helpful session!",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

### 9. activities
Stores user activity feed.

```javascript
{
  id: "activity_id",
  userId: "firebase_user_id",
  type: "skill_completed", // "skill_completed", "roadmap_started", "mentor_feedback", etc.
  title: "Completed 'React Hooks' lesson",
  description: "Successfully finished the React Hooks module",
  icon: "✅",
  relatedId: "skill_id or roadmap_id",
  createdAt: "2024-01-15T10:00:00.000Z"
}
```

## Security Rules

Example Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Roadmaps are public for reading, but only admins can write
    match /roadmaps/{roadmapId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Similar rules for other collections...
  }
}
```

## Indexes

Recommended composite indexes:
- `trendingSkills`: (category, trendPercentage DESC)
- `opportunities`: (type, date ASC)
- `mentors`: (expertise, available, rating DESC)
- `userProgress`: (userId, roadmapId)
