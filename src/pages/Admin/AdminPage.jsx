import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const AdminPage = () => {
  const { user } = useAuth();

  // Check if user is admin
  if (!user || user?.userData?.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  const stats = [
    { label: 'Total Users', value: '1,234', icon: '👥', color: 'text-blue-600' },
    { label: 'Active Roadmaps', value: '42', icon: '🗺️', color: 'text-green-600' },
    { label: 'Trending Skills', value: '156', icon: '🔥', color: 'text-orange-600' },
    { label: 'Upcoming Events', value: '18', icon: '📅', color: 'text-purple-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">⚙️ Admin Panel</h1>
        <p className="text-gray-600">
          Manage users, content, and platform settings
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Management Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
          <p className="text-gray-600 text-sm mb-4">
            View, edit, and manage user accounts and permissions
          </p>
          <Button variant="primary" fullWidth>
            Manage Users
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Roadmap Management</h3>
          <p className="text-gray-600 text-sm mb-4">
            Create, edit, and manage learning roadmaps
          </p>
          <Button variant="primary" fullWidth>
            Manage Roadmaps
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Skills</h3>
          <p className="text-gray-600 text-sm mb-4">
            Update trending skills and technology trends
          </p>
          <Button variant="primary" fullWidth>
            Manage Skills
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Events & Opportunities</h3>
          <p className="text-gray-600 text-sm mb-4">
            Add and manage hackathons, workshops, and events
          </p>
          <Button variant="primary" fullWidth>
            Manage Events
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentor Management</h3>
          <p className="text-gray-600 text-sm mb-4">
            Approve and manage mentor profiles
          </p>
          <Button variant="primary" fullWidth>
            Manage Mentors
          </Button>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h3>
          <p className="text-gray-600 text-sm mb-4">
            View platform analytics and user engagement metrics
          </p>
          <Button variant="primary" fullWidth>
            View Analytics
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
