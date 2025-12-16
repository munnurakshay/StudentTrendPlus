import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={user ? '/dashboard' : '/'} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#0078d4] to-[#8000ff] rounded-lg"></div>
            <span className="text-xl font-semibold text-gray-900">StudentTrend+</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Dashboard
                </Link>
                <Link to="/trending-skills" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Trending Skills
                </Link>
                <Link to="/roadmaps" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Roadmaps
                </Link>
                <Link to="/mentors" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Mentors
                </Link>
                <Link to="/opportunities" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Opportunities
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Profile
                </Link>
                <Button variant="secondary" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-[#0078d4] transition-colors">
                  Login
                </Link>
                <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>
                  Get Started
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
