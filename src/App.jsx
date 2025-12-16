import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// Pages
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import TrendingSkillsPage from './pages/TrendingSkills/TrendingSkillsPage';
import RoadmapsPage from './pages/Roadmaps/RoadmapsPage';
import MentorsPage from './pages/Mentors/MentorsPage';
import ProjectIdeasPage from './pages/ProjectIdeas/ProjectIdeasPage';
import OpportunitiesPage from './pages/Opportunities/OpportunitiesPage';
import ProfilePage from './pages/Profile/ProfilePage';
import AdminPage from './pages/Admin/AdminPage';

// Layout wrapper for authenticated pages with sidebar
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Layout wrapper for public pages
const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicLayout>
              <LandingPage />
            </PublicLayout>
          } />
          <Route path="/login" element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          } />
          <Route path="/signup" element={
            <PublicLayout>
              <SignupPage />
            </PublicLayout>
          } />

          {/* Protected Routes with Dashboard Layout */}
          <Route path="/onboarding" element={
            <ProtectedRoute>
              <PublicLayout>
                <OnboardingPage />
              </PublicLayout>
            </ProtectedRoute>
          } />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/trending-skills" element={
            <ProtectedRoute>
              <DashboardLayout>
                <TrendingSkillsPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/roadmaps" element={
            <ProtectedRoute>
              <DashboardLayout>
                <RoadmapsPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/mentors" element={
            <ProtectedRoute>
              <DashboardLayout>
                <MentorsPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/project-ideas" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ProjectIdeasPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/opportunities" element={
            <ProtectedRoute>
              <DashboardLayout>
                <OpportunitiesPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ProfilePage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/admin" element={
            <ProtectedRoute>
              <DashboardLayout>
                <AdminPage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
