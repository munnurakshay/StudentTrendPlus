import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/trending-skills', label: 'Trending Skills', icon: '🔥' },
    { path: '/roadmaps', label: 'Roadmaps', icon: '🗺️' },
    { path: '/mentors', label: 'Mentors', icon: '👥' },
    { path: '/project-ideas', label: 'Project Ideas', icon: '💡' },
    { path: '/opportunities', label: 'Opportunities', icon: '🎯' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  // Add admin link if user is admin
  if (user?.userData?.role === 'admin') {
    menuItems.push({ path: '/admin', label: 'Admin Panel', icon: '⚙️' });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-100 min-h-screen">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-[#0078d4] text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
