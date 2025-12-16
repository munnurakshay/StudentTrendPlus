# Firebase Setup Guide for StudentTrend+

This guide will help you set up Firebase for the StudentTrend+ application.

## Prerequisites

- A Google account
- Node.js and npm installed on your machine

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `StudentTrendPlus` (or your preferred name)
4. (Optional) Enable Google Analytics
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the Web icon (</>) to add a web app
2. Register app with nickname: "StudentTrend+ Web"
3. Check "Also set up Firebase Hosting" (optional)
4. Click "Register app"
5. Copy the Firebase configuration object - you'll need this in Step 4

## Step 3: Enable Authentication

1. In the Firebase Console, go to **Authentication** from the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable **Email/Password** authentication:
   - Click on "Email/Password"
   - Toggle "Enable" switch
   - Save

### Configure Authorized Domains (Optional)

For production, add your deployment domain to authorized domains:
1. Go to Authentication > Settings > Authorized domains
2. Add your domain (e.g., `yourapp.com`)

## Step 4: Set Up Firestore Database

1. In the Firebase Console, go to **Firestore Database** from the left sidebar
2. Click "Create database"
3. Choose **Start in production mode** (we'll configure rules later)
4. Select a Cloud Firestore location (choose closest to your users)
5. Click "Enable"

### Configure Security Rules

Go to the **Rules** tab and replace the default rules with:

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
    
    // Trending skills are public for reading, admins can write
    match /trendingSkills/{skillId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Mentors can be read by authenticated users
    match /mentors/{mentorId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      (request.auth.uid == resource.data.userId || 
                       get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // Opportunities can be read by authenticated users
    match /opportunities/{opportunityId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Project ideas can be read by authenticated users
    match /projectIdeas/{projectId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // User progress
    match /userProgress/{progressId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
    
    // Mentorship sessions
    match /mentorshipSessions/{sessionId} {
      allow read: if request.auth != null && 
                     (resource.data.studentId == request.auth.uid || 
                      resource.data.mentorId == request.auth.uid);
      allow write: if request.auth != null && 
                      (request.resource.data.studentId == request.auth.uid || 
                       request.resource.data.mentorId == request.auth.uid);
    }
    
    // Activities
    match /activities/{activityId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

Click **Publish** to apply the rules.

### Create Indexes (Optional but Recommended)

For better query performance, create these composite indexes:

1. Collection: `trendingSkills`
   - Fields: `category` (Ascending), `trendPercentage` (Descending)
   
2. Collection: `opportunities`
   - Fields: `type` (Ascending), `date` (Ascending)
   
3. Collection: `mentors`
   - Fields: `expertise` (Ascending), `available` (Ascending), `rating` (Descending)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env` in the root directory:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your Firebase configuration values from Step 2:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. **Important**: Never commit `.env` to version control. It's already in `.gitignore`.

## Step 6: Test the Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Try to sign up with a `.edu` email address
4. Check Firebase Console > Authentication to see the user created
5. Check Firestore to see the user document created

## Step 7: Deploy to Firebase Hosting (Optional)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Choose your Firebase project
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. Build your app:
   ```bash
   npm run build
   ```

5. Deploy:
   ```bash
   firebase deploy
   ```

## Step 8: Seed Initial Data (Optional)

You can manually add initial data through the Firebase Console or create a seed script. See `FIRESTORE_STRUCTURE.md` for the database schema.

### Example: Create an Admin User

1. Sign up normally through the app
2. Go to Firestore Console
3. Find your user document in the `users` collection
4. Add a field: `role` with value `admin`
5. Now you can access the Admin Panel in the app

## Troubleshooting

### Authentication Issues
- Make sure your domain is in the authorized domains list
- Check that Email/Password is enabled in Authentication > Sign-in method
- Verify environment variables are correct

### Firestore Permission Errors
- Check that security rules are published
- Verify user is authenticated
- Check that user document exists with correct structure

### Environment Variables Not Loading
- Make sure file is named `.env` (not `.env.txt`)
- Restart the development server after changing `.env`
- Variables must start with `VITE_` prefix for Vite

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

## Support

For issues or questions, please open an issue on the GitHub repository.
