import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const RoadmapsPage = () => {
  const roadmaps = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Master modern frontend technologies and frameworks',
      duration: '6 months',
      level: 'Beginner to Advanced',
      icon: '💻',
      steps: 12
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      description: 'Become a complete web developer with frontend and backend skills',
      duration: '8 months',
      level: 'Intermediate',
      icon: '🌐',
      steps: 16
    },
    {
      id: 3,
      title: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, and machine learning',
      duration: '7 months',
      level: 'Beginner to Advanced',
      icon: '📊',
      steps: 14
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      description: 'Master CI/CD, cloud platforms, and infrastructure automation',
      duration: '5 months',
      level: 'Intermediate',
      icon: '🔧',
      steps: 10
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🗺️ Learning Roadmaps</h1>
        <p className="text-gray-600">
          Structured learning paths to achieve your career goals
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {roadmaps.map((roadmap) => (
          <Card key={roadmap.id} hover>
            <div className="flex items-start space-x-4 mb-4">
              <span className="text-5xl">{roadmap.icon}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{roadmap.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{roadmap.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-xs text-gray-500">Duration</span>
                    <p className="text-sm font-medium text-gray-900">{roadmap.duration}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Level</span>
                    <p className="text-sm font-medium text-gray-900">{roadmap.level}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Steps</span>
                    <p className="text-sm font-medium text-gray-900">{roadmap.steps}</p>
                  </div>
                </div>
                
                <Button variant="primary" fullWidth>
                  Start Roadmap
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RoadmapsPage;
