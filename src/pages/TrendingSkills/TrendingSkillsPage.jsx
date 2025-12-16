import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const TrendingSkillsPage = () => {
  const skills = [
    { 
      id: 1, 
      name: 'React.js', 
      category: 'Frontend', 
      trend: '+15%', 
      demand: 'High',
      icon: '⚛️',
      description: 'A JavaScript library for building user interfaces'
    },
    { 
      id: 2, 
      name: 'Python', 
      category: 'Backend', 
      trend: '+12%', 
      demand: 'High',
      icon: '🐍',
      description: 'Versatile programming language for web, data science, and more'
    },
    { 
      id: 3, 
      name: 'Machine Learning', 
      category: 'AI/ML', 
      trend: '+20%', 
      demand: 'Very High',
      icon: '🤖',
      description: 'Build intelligent systems that learn from data'
    },
    { 
      id: 4, 
      name: 'Cloud Computing', 
      category: 'DevOps', 
      trend: '+18%', 
      demand: 'Very High',
      icon: '☁️',
      description: 'AWS, Azure, and Google Cloud Platform expertise'
    },
    { 
      id: 5, 
      name: 'TypeScript', 
      category: 'Frontend', 
      trend: '+22%', 
      demand: 'High',
      icon: '📘',
      description: 'Typed superset of JavaScript for better code quality'
    },
    { 
      id: 6, 
      name: 'Docker', 
      category: 'DevOps', 
      trend: '+14%', 
      demand: 'High',
      icon: '🐳',
      description: 'Containerization platform for application deployment'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🔥 Trending Skills</h1>
        <p className="text-gray-600">
          Stay ahead with the most in-demand skills in the industry
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.id} hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{skill.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.category}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-gray-500">Trend</span>
                <p className="text-green-600 font-semibold">{skill.trend}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Demand</span>
                <p className="text-[#0078d4] font-semibold">{skill.demand}</p>
              </div>
            </div>
            
            <Button variant="primary" fullWidth>
              Start Learning
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingSkillsPage;
