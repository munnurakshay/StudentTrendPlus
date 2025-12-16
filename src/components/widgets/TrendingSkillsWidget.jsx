import Card from '../common/Card';
import { Link } from 'react-router-dom';

const TrendingSkillsWidget = () => {
  // Mock data - will be replaced with Firestore data
  const trendingSkills = [
    { id: 1, name: 'React.js', trend: '+15%', icon: '⚛️' },
    { id: 2, name: 'Python', trend: '+12%', icon: '🐍' },
    { id: 3, name: 'Machine Learning', trend: '+20%', icon: '🤖' },
    { id: 4, name: 'Cloud Computing', trend: '+18%', icon: '☁️' },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">🔥 Trending Skills</h3>
        <Link to="/trending-skills" className="text-sm text-[#0078d4] hover:underline">
          View All
        </Link>
      </div>
      <div className="space-y-3">
        {trendingSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-medium text-gray-900">{skill.name}</span>
            </div>
            <span className="text-green-600 text-sm font-semibold">{skill.trend}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TrendingSkillsWidget;
