import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ProjectIdeasPage = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      difficulty: 'Intermediate',
      category: 'Full Stack',
      duration: '4-6 weeks',
      skills: ['React', 'Node.js', 'MongoDB'],
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      difficulty: 'Beginner',
      category: 'Frontend',
      duration: '2-3 weeks',
      skills: ['React', 'CSS', 'Local Storage'],
      icon: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      difficulty: 'Beginner',
      category: 'Frontend',
      duration: '1-2 weeks',
      skills: ['JavaScript', 'API Integration', 'CSS'],
      icon: '🌤️'
    },
    {
      id: 4,
      title: 'Social Media Clone',
      difficulty: 'Advanced',
      category: 'Full Stack',
      duration: '8-10 weeks',
      skills: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
      icon: '📱'
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">💡 Project Ideas</h1>
        <p className="text-gray-600">
          Build your portfolio with these curated project ideas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} hover>
            <div className="flex items-start space-x-4">
              <span className="text-5xl">{project.icon}</span>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">📁</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-2">⏱️</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="primary" fullWidth>
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectIdeasPage;
