import Card from '../common/Card';
import { Link } from 'react-router-dom';

const RoadmapsWidget = () => {
  // Mock data - will be replaced with Firestore data
  const activeRoadmaps = [
    { id: 1, title: 'Frontend Development', progress: 65, icon: '💻' },
    { id: 2, title: 'Data Science', progress: 40, icon: '📊' },
    { id: 3, title: 'DevOps Engineer', progress: 25, icon: '🔧' },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">🗺️ Active Roadmaps</h3>
        <Link to="/roadmaps" className="text-sm text-[#0078d4] hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-4">
        {activeRoadmaps.map((roadmap) => (
          <div key={roadmap.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{roadmap.icon}</span>
                <span className="font-medium text-gray-900">{roadmap.title}</span>
              </div>
              <span className="text-sm text-gray-600">{roadmap.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#0078d4] to-[#8000ff] h-2 rounded-full transition-all duration-300"
                style={{ width: `${roadmap.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RoadmapsWidget;
