import Card from '../common/Card';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const MentorsWidget = () => {
  // Mock data - will be replaced with Firestore data
  const mentors = [
    { id: 1, name: 'Dr. Sarah Johnson', expertise: 'Machine Learning', available: true },
    { id: 2, name: 'Michael Chen', expertise: 'Web Development', available: true },
    { id: 3, name: 'Emily Rodriguez', expertise: 'Cloud Architecture', available: false },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">👥 Featured Mentors</h3>
        <Link to="/mentors" className="text-sm text-[#0078d4] hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-3">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                <p className="text-sm text-gray-600">{mentor.expertise}</p>
              </div>
              {mentor.available && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Available
                </span>
              )}
            </div>
            <Button variant="secondary" size="sm" fullWidth>
              Connect
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MentorsWidget;
