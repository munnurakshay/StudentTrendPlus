import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🔥',
      title: 'Trending Skills',
      description: 'Stay updated with the most in-demand skills and tools in the industry.'
    },
    {
      icon: '🗺️',
      title: 'Personalized Roadmaps',
      description: 'Get step-by-step learning paths tailored to your career goals.'
    },
    {
      icon: '👥',
      title: 'Expert Mentorship',
      description: 'Connect with experienced mentors for guidance and career advice.'
    },
    {
      icon: '🎯',
      title: 'College Opportunities',
      description: 'Discover hackathons, events, and workshops at your college.'
    },
    {
      icon: '💡',
      title: 'Project Ideas',
      description: 'Get inspired with curated project ideas to build your portfolio.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey and celebrate your achievements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f3f2f1]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#0078d4] to-[#8000ff] bg-clip-text text-transparent">
              StudentTrend+
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your personalized platform for skill development, trending technologies, 
            and expert mentorship. Built exclusively for college students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => navigate('/signup')}>
              Get Started Free
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/login')}>
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive platform designed for your academic and professional growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Challenge Students Face
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>✗ Overwhelming amount of skills to learn</p>
                <p>✗ Lack of personalized guidance</p>
                <p>✗ Difficulty finding the right mentors</p>
                <p>✗ Missing out on opportunities</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>✓ Curated trending skills and technologies</p>
                <p>✓ Personalized learning roadmaps</p>
                <p>✓ Direct access to expert mentors</p>
                <p>✓ Centralized opportunity discovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Card padding="lg" className="text-center bg-gradient-to-r from-[#0078d4] to-[#8000ff]">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already accelerating their careers with StudentTrend+
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => navigate('/signup')}
            className="bg-white text-[#0078d4] hover:bg-gray-100"
          >
            Create Your Free Account
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default LandingPage;
